import { ethers } from "ethers";
import ERC721UUPSabi from "../abi/ERC721UUPS";
import marketAbI from "../abi/marketplace";
import { markerOperation, smartContracts } from "../helpers/global-constants";
import { getProvider } from "./Web3Controllers";


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

export const getEstimatedGas = async (opration, options) => {

  const contract = await connectMarketContact()

  console.log("tiene diero suficiente")

  return true



}