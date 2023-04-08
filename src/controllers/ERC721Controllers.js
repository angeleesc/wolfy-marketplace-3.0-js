import { ethers } from "ethers";
import ERC721UUPSabi from "../abi/ERC721UUPS";
import { smartContracts } from "../helpers/global-constants";
import { getProvider } from "./Web3Controllers";

// ipfs://QmVvoG6hGD6Rfe9RTDm1ERy83FPN9bNJbiGBSUh6R7MaT9

export const connectErc721Ups = async () => {
  const provider = await getProvider();

  if (provider) {
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    console.log("hay provider");
    const contract = new ethers.Contract(
      smartContracts.ERC721UUPS,
      ERC721UUPSabi,
      signer
    );
    return {
      contract,
      account,
    };
  }

  console.log("no hay provider");
  return null;
};

export const safewMint = async (url) => {
  const { contract, account } = await connectErc721Ups();
  console.log(account);

  try {
    const result = await contract.safeMint(account, url);
    const data = await result.wait();
    console.log(data);

    return {
      isSucces: true
    }

  } catch (error) {

    return {
      isSucces: false
    }

  }


  //   console.log(symbol);
  //   console.log("acunado exitoso");
};

export const getTokensIds = async () => {
  const { contract, account } = await connectErc721Ups();
  try {
    const tokeensId = await contract.tokensByOwner(account);
    // console.log(tokeensId)
    const tokensIdsFormated = tokeensId.map((token) => {
      return token.toString();
    });
    console.log(tokensIdsFormated);
    return tokensIdsFormated;
  } catch (error) {
    console.log("ocurrio un error")
    console.log(error)
    return null;
  }
};


export const getEstimateGasMint = async (url) => {

  const { contract, account } = await connectErc721Ups()
  const estimateGas = await contract.estimateGas.safeMint(account, url)
  console.log(estimateGas)

}

export const aporveTransaction = async (blockChain) => {
  const { contract, account } = await connectErc721Ups();
  try {
    console.log("aprovando transacion")
    const getAproveTrasaction = await contract.setApprovalForAll(
      smartContracts.market,
      true
    );
    const transation = await getAproveTrasaction.wait();
    console.log("transacion exitosa");
    console.log(transation);
    return {
      isSucces: true
    }
  } catch (error) {
    console.log("ocurrio un error");
    console.log(error);
    return {
      isSucces: false
    }
  }
};
