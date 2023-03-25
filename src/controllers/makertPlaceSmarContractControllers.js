import { ethers } from "ethers";
import marketAbI from "../abi/marketplace";
import { smartContracts } from "../helpers/global-constants";
import { getProvider } from "./Web3Controllers";

export const conectMarketPlaceContract = async () => {
  const provider = await getProvider();
  if (provider) {
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    const marketContract = new ethers.Contract(
      smartContracts.market,
      marketAbI,
      signer
    );

    // console.log(account);
    console.log("market contract");
    console.log(marketContract);
    return {
      account,
      marketContract,
    };
  } else {
    console.log("no hay provider");
    return {};
  }
};

export const readyToSelltoken = async (data) => {
  const {
    // console.log(account);
    account,
    marketContract,
  } = await conectMarketPlaceContract();

  if (account && marketContract) {
   

    const {} = data

    // const transaction = await marketContract.readyToSellToken(data.tokensId, data.tokensId.length, priceTest, 0, smartContracts.ERC721UUPS);

  } else {
    console.log("no se hace nada");
  }
};
