import { ethers } from "ethers";
import ERC721UUPSabi from "../abi/ERC721UUPS";
import marketAbI from "../abi/marketplace";
import { markerOperation, smartContracts } from "../helpers/global-constants";
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

  // console.log(result.events[2]);
  if (result.events[2].args) {
    // console.log("si hay evento")
    const {
      seller,
      nftAddress,
      order_ } = result.events[2].args

    // console.log("seller", seller)
    // console.log("nftAddress", nftAddress)
    // console.log("order", order_.toString())

    const datataToSent = {
      seller,
      nftAddress,
      order: order_.toString()
    }

    // console.log(endpointUrl)
    // console.log(datataToSent)

    return datataToSent
  }

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

  if (receipt.events[2].args) {

    // console.log("si hay evento")
    // console.log(receipt.events[2].args)
    const { nftAddress, order_, seller } = receipt.events[2].args

    return {
      ...(nftAddress ? { nftAddress } : {}),
      ...(order_ ? { order: order_.toString() } : {}),
      ...(seller ? { seller } : { seller })
    }


  }

  return null;


};

export const goToSell = async (tokenId, price) => {

  const data = await readyTosellHttp(tokenId, price)
  // console.log("recibido")
  // console.log(data)
  await axios.post("http://localhost:5001/api/v1/makertplace", data)

}

export const gTooCancel = async (orderId) => {
  const eventData = await cancelOderHttp(orderId);
  console.log("resultado de la transacion")
  console.log(eventData)

  if (eventData) {
    await axios.delete(`http://localhost:5001/api/v1/makertplace/${eventData.order}/${eventData.seller}`)
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


  if (transaction.events[2].args) {

    console.log("si hay evento")
    console.log(transaction.events[2].args)

    const { deltaQuantity, order_ } = transaction.events[2].args

    return {
      orderId: order_.toString(),
      deltaQuantity: deltaQuantity.toString(),
    }


  }

};


export const goToBuy = async (orden, cantidad, price) => {
  const eventData = await buyTokenHttp(orden, cantidad, price)

  await axios.put("http://localhost:5001/api/v1/makertplace/", {
    ...eventData
  })


}