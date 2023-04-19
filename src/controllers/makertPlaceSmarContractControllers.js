import { ethers } from "ethers";
import ERC721UUPSabi from "../abi/ERC721UUPS";
import marketAbI from "../abi/marketplace";
import { markerOperation, requestEndPoints, rootApipaht, smartContracts } from "../helpers/global-constants";
import { getProvider } from "./Web3Controllers";
import axios from "axios";


export const connectMarketContact = async (blockChain) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const marketContrac = new ethers.Contract(
    smartContracts.market,
    marketAbI,
    signer
  );

  return marketContrac;
};



export const readyToSelltoken = async (data) => {
  const {
    // console.log(account);
    account,
    marketContract,
  } = await connectMarketContact();

  if (account && marketContract) {
    const {
      tokenId,
      nftPrice,
      collection,
      // isWolfy,
    } = data;

    const cuantity = tokenId.length;
    let etherPrice = ethers.utils.parseEther(nftPrice);
    const nftContract = collection || smartContracts.ERC721;
    console.log(cuantity, tokenId, etherPrice, nftContract);

    console.log("se recibio para la transacion");

    console.log(tokenId, tokenId.length);

    const sellReques = await marketContract.readyToSellToken(
      tokenId,
      cuantity,
      etherPrice,
      0,
      nftContract
    );
    const transaction = await sellReques.wait();
    // console.log(transaction)
  } else {
    console.log("no se hace nada");
  }
};


export const getSymbol = async () => {

  const provider = await getProvider()
  const signer = provider.getSigner()
  const account = await signer.getAddress()

  if (account) {
    console.log(account)
    const contrat = new ethers.Contract(smartContracts.ERC721UUPS, ERC721UUPSabi, signer)
    const symbol = await contrat.symbol()
    console.log(symbol)
    const tokensByOwner = await contrat.tokensByOwner(account)
    console.log(tokensByOwner)

    const tokenURi = await contrat.tokenURI(tokensByOwner[0])
    console.log("tokenUri")
    console.log(tokenURi)

    const intTokensByOwner = tokensByOwner.map((tokenIdBN) => {
      return tokenIdBN.toString()
    })

    console.log(intTokensByOwner)

    return {
      tokensId: intTokensByOwner

    }
  }

  return null

}


export const readyToSell2 = async (price) => {

  const priceTest = ethers.utils.parseEther(price)
  console.log(price)
  console.log(priceTest)
  try {
    const provider = await getProvider();
    const signer = provider.getSigner();
    const marketContrac = new ethers.Contract(smartContracts.market, marketAbI, signer);
    const data = await getSymbol()
    console.log(data)
    console.log(data.tokensId.length)
    const transaction = await marketContrac.readyToSellToken(data.tokensId, data.tokensId.length, priceTest, 0, smartContracts.ERC721UUPS);
    const result = await transaction.wait()
    console.log(result)
    console.log("nft puesta en venta XD")

    return {
      isSuccess: true
    }

  } catch (error) {

    return {
      isSuccess: false
    }
  }

}

export const getOrderByid = async (orderId) => {
  const contract = await connectMarketContact();
  const rawOrder = await contract.getOrder(orderId);

  console.log(rawOrder)

  const order = {
    price: Number(ethers.utils.formatEther(rawOrder.ethPrice)),
    quantity: Number(rawOrder.quantity)
    // cuantity: 
  }

  console.log(order);
  return order
};

export const getEstimatedGastxd = async (operation, options) => {

  const contract = await connectMarketContact()

  // console.log("tiene diero suficiente")


  switch (operation) {
    case markerOperation.buy:
      // console.log("calculando los datos nesesario para la venta")
      console.log(options)
      const value = options.price.mul(options.c)
      console.log(value)

      // const gast = await contract.estimateGas.buyToken(options.orden, options.c)


      break;

    default:
      break;
  }

  return true

}

export const readyTosell3 = async (_tokensId, price, contract) => {
  const contrat = await connectMarketContact();
  const ethPrice = ethers.utils.parseEther(price);

  const transaction = await contrat.readyToSellToken(
    _tokensId,
    _tokensId.length,
    ethPrice,
    0,
    smartContracts.ERC721UUPS
  );
  const result = await transaction.wait();
  console.log(result);
};

export const buyToken = async (orden, cantidad, price) => {
  let c = cantidad;
  if (typeof c === "number") c = c.toString();
  const contract = await connectMarketContact();
  const request = await contract.buyToken(orden, c, {
    value: price.mul(c)
  });
  const transaction = await request.wait();
  console.log("transaciuon exitosa")
};



export const getEstimateGasBuyToken = async (orden, cantidad, price) => {
  let c = cantidad;
  console.log(orden)
  console.log(price)
  if (typeof c === "number") c = c.toString();
  const contract = await connectMarketContact();
  const gast = await contract.estimateGas.buyToken(orden, c, {
    value: price.mul(c)
  });

  console.log(gast)


}

export const cancelOder = async (orderId) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const marketContrac = new ethers.Contract(
    smartContracts.market,
    marketAbI,
    signer
  );
  const transaction = await marketContrac.cancelSellToken(orderId);
  const receipt = await transaction.wait();
};


export const readyTosellHttp = async (_tokensId, price) => {
  const contrat = await connectMarketContact();
  const ethPrice = ethers.utils.parseEther(price);

  const transaction = await contrat.readyToSellToken(
    _tokensId,
    _tokensId.length,
    ethPrice,
    0,
    smartContracts.ERC721UUPS
  );
  const result = await transaction.wait();


  console.log()

  if (result.events) {
    // console.log(result.events)
    const contractEvents = result.events.filter((event) => {
      if (event.args) {
        return event
      }
    })
    if (contractEvents.length > 0) {
      console.log(contractEvents[0].args)
      const { nftAddress, order_, seller } = contractEvents[0].args
      return {
        nftAddress,
        order: order_.toString(),
        seller
      }

    }

  }

  return null


};


export const cancelOderHttp = async (orderId) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const marketContrac = new ethers.Contract(
    smartContracts.market,
    marketAbI,
    signer
  );
  const transaction = await marketContrac.cancelSellToken(orderId);
  const receipt = await transaction.wait();

  if (receipt.events) {

    const events = receipt.events.filter((event) => {
      if (event.args) {
        return event
      }
    })

    if (events.length > 0) {

      const { nftAddress, order_, seller } = events[0].args

      return {
        ...(nftAddress ? { nftAddress } : {}),
        ...(order_ ? { order: order_.toString() } : {}),
        ...(seller ? { seller } : { seller })
      }

    }

  }



  return null;


};



export const goToSell = async (tokenId, price) => {

  const data = await readyTosellHttp(tokenId, price)
  // console.log("recibido")
  console.log(data)

  if (data) {

    try {

      const endPoint = rootApipaht.enventLocal + requestEndPoints.eventSeverEndpoint.marketPlaceContractPostNewOrder
  // const endPoint = rootApipaht.porduction + requestEndPoints.eventSeverEndpoint.marketPlaceContractPostNewOrder


      await axios.post(endPoint, data)

      return ({
        isSuccess: true
      })


    } catch (error) {

      return {
        isSuccess: false,
        reason: "Ocrurio unproblema durante la peticio en el servidor"
      }

    }

  }

  return {
    isSuccess: false,
    reason: "No se pudo obtener el id de la orden de la nft"
  }

}

export const goToCancel = async (orderId) => {
  const eventData = await cancelOderHttp(orderId);
  console.log("resultado de la transacion")
  console.log(eventData)

  const endPoint = rootApipaht.enventLocal + requestEndPoints.eventSeverEndpoint.marketPlaceContractDeletOrder(eventData.order, eventData.seller)
  // const endPoint = rootApipaht.porduction + requestEndPoints.eventSeverEndpoint.marketPlaceContractDeletOrder(eventData.order, eventData.seller)


  if (eventData) {
    await axios.delete(endPoint)
  }

}


export const buyTokenHttp = async (orden, cantidad, price) => {
  let c = cantidad;
  if (typeof c === "number") c = c.toString();
  const contract = await connectMarketContact();
  const request = await contract.buyToken(orden, c, {
    value: price.mul(c)
  });
  const transaction = await request.wait();
  // console.log("transaciuon exitosa")


  if (transaction.events) {

    const events = transaction.events.filter((event) => {
      if (event.args) {
        return event
      }
    })



    if (events.length > 0) {

      const { deltaQuantity, order_ } = events[0].args

      return {
        orderId: order_.toString(),
        deltaQuantity: deltaQuantity.toString(),
      }

    }



  }

  // if (transaction.events[2].args) {

  //   console.log("si hay evento")
  //   console.log(transaction.events[2].args)

  //   const { deltaQuantity, order_ } = transaction.events[2].args

  //   return {
  //     orderId: order_.toString(),
  //     deltaQuantity: deltaQuantity.toString(),
  //   }


  // }

};


export const goToBuy = async (orden, cantidad, price) => {
  const eventData = await buyTokenHttp(orden, cantidad, price)

  if (eventData) {

    const endPoint = rootApipaht.enventLocal + requestEndPoints.eventSeverEndpoint.marketplaceUpdateOrderPut
    // const endPoint = rootApipaht.porduction + requestEndPoints.eventSeverEndpoint.marketplaceUpdateOrderPut

    try {
      await axios.put(endPoint, {
        ...eventData
      })

      return {
        isSuccess: true
      }
    } catch (error) {
      return {
        isSuccess: false,
        reason: "falla en el servidor"
      }
    }


  }

  return {
    isSuccess: false,
    reason: "No hay datos del evento"
  }



}