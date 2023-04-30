import { ethers } from "ethers";
import { requestEndPoints, rootApipaht, smartContracts } from "../helpers/global-constants";
import auctionAbi from "../abi/auction";
import axios from "axios";

export const getProvider = async () => {
    // verificamos si hay provider verificado
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
    }
    // console.log("no hay provider");ap
    return null;
};


export const conectAuctionContrac = async () => {
    const provider = await getProvider()
    if (provider) {
        const signer = provider.getSigner()
        const contract = new ethers.Contract(smartContracts.Auction, auctionAbi, signer)
        return contract
    }
}

const extractArgs = (receipt, keys = []) => {

    if (receipt.events) {

        const args = receipt.events.filter((event) => {
            if (event.args) {
                return event
            }
        })

        if (args.length > 0) {

            const eventArgs = args[0].args

            console.log("evetn args")
            console.log(eventArgs)

            let dataToSend = {}

            for (let key of keys) {

                if (eventArgs[key]) {
                    console.log("el campo exites")
                    console.log(eventArgs[key])

                    if (typeof (eventArgs[key]) === "string") {
                        dataToSend[key] = eventArgs[key]
                    } else if (typeof (eventArgs[key]) === "object" && eventArgs[key]._isBigNumber) {
                        dataToSend[key] = eventArgs[key].toString()
                    } else {
                        dataToSend[key] = eventArgs[key]
                    }




                } else {
                    console.log("el campo no existe")
                }

            }

            console.log("datos a enviar")
            console.log(dataToSend)

            // console.log(args[0].args)

            return dataToSend

        }


        return null

    }

    return null;


}

export const goToAuction = async (erc721, tokenIds, price, duration) => {

    let nprice = typeof (price) === "number" ? price.toString() : price
    let nduration = typeof (duration) === "number" ? duration.toString() : duration
    const etherPrice = ethers.utils.parseEther(nprice)
    const contract = await conectAuctionContrac()
    const resquet = await contract._createAuctionSingle(erc721, tokenIds, etherPrice, nduration, false)
    const transation = await resquet.wait()
    console.log(transation)

    const dataToSend = extractArgs(transation, ["seller", "_duration", "_price", "_tokenId", "id"])
    if (dataToSend) return {
        isSuccess: true,
        hasEventData: true,
        data: dataToSend,

    }

    return { isSuccess: true, hasEventData: false }




}


export const goToAuctionHttp = async (erc721, tokenIds, price, duration) => {

    const args = await goToAuction(erc721, tokenIds, price, duration,)
    if (args.hasEventData && args.data) {
        const { seller, _duration, _price, _tokenId, id } = args.data

        const dataToSend = {
            fOrderId: id,
            fPrice: ethers.utils.formatEther(_price),
            seller,
            duration: _duration

        }

        const endPoint = rootApipaht.enventLocal + requestEndPoints.eventSeverEndpoint.auctionCreatePost
        // const endPoint = rootApipaht.eventProducion + requestEndPoints.eventSeverEndpoint.marketPlaceContractPostNewOrder

        try {

            await axios.post(endPoint, dataToSend)

        } catch (error) {

        }

    }

    console.log(args)

}


export const getAuctionOrderBySeller = async () => {

    try {

        const provider = await getProvider()
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        const contract = await conectAuctionContrac()


        const res = await contract.getAllSellerOrdersUser(address)
        const orders = res.map(orde => orde.toString())
        return orders


    } catch (error) {

        return null

    }

}

export const goFinishAuction = async (order) => {

    const contract = await conectAuctionContrac()
    const req = await contract.finishAuction(order)
    const transaction = await req.wait()
    console.log(transaction)

}

export const getAllAuctionOrder = async () => {

    const provider = await getProvider()
    const signer = provider.getSigner()
    const address = await signer.getAddress()




    const contract = await conectAuctionContrac()
    const auctionsOrders = await contract.getAllAuctions()
    // console.log(auctionsOrders)

    const auctionDataFormated = []

    console.log(address)

    auctionsOrders.forEach((auction) => {

        console.log(auction)



        const { NFTAddress, bestBidder, currentPrice, endTime, orderId, tokenId, initPrice, seller } = auction


        const constNftAddres = NFTAddress;
        const bestBBidder = bestBidder === ethers.constants.AddressZero ? "Ninguno" : bestBidder;
        const nCurrentPrice = Number(ethers.utils.formatEther(currentPrice));
        const expirationDate = Number(endTime.toString());
        const nOrderId = orderId.toString()
        const nTokenId = tokenId.toString()
        const nInitPrice = Number(ethers.utils.formatEther(initPrice))

        const auctionData = {
            nftAddress: constNftAddres,
            bestBidder: bestBBidder,
            currentPrice: nCurrentPrice,
            expirationDate,
            orderId: nOrderId,
            tokenId: nTokenId,
            initPrice: nInitPrice,
            seller,
            isOwner: address === seller

        }

        auctionDataFormated.push(auctionData)

        // console.log(auctionData)


    })

    return auctionDataFormated



}


export const bid = async (orderId, value) => {

    const etherPrice = ethers.utils.parseEther(value)

    const contract = await conectAuctionContrac()
    const req = await contract.bid(orderId, etherPrice, {
        value: etherPrice
    })
    const transation = await req.wait()

    console.log(transation)

}

export const removeBid = async (orderId) => {

    let nOrderId = typeof (orderId) === "number" ? orderId.toString() : orderId

    const contract = await conectAuctionContrac()
    const requet = await contract.removeBid(nOrderId)
    const transaction = await requet.wait()

}

export const getAllBuyerOrdes = async (address) => {

    const contract = await conectAuctionContrac()
    const orderBuyer = await contract.getAllBuyerOrdersUser(address)

    console.log(orderBuyer)

    const orders = []

    orderBuyer.forEach(order => {
        // console.log(order)
        orders.push(order.toString())
    })

    console.log(orders)
    return orders



}

export const removeBibSideBuyer = async (order) => {

    const contract = await conectAuctionContrac()
    const req = await contract.removeBid(order)
    const transaction = await req.wait()
    console.log(transaction)
}

export const removeOfferSideSeller = async (order) => {

    const contract = await conectAuctionContrac()
    const req = await contract.removeOffer(order)
    const transaction = req.wait()
    console.log(transaction)

}