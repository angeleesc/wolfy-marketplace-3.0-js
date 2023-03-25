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
    const contrat = new ethers.Contract(
      smartContracts.ERC721UUPS,
      ERC721UUPSabi,
      signer
    );
    return {
      contrat,
      account,
    };
  }

  console.log("no hay provider");
  return null;
};

export const safewMint = async (url) => {
  const { contrat, account } = await connectErc721Ups();
  console.log(account);
  const result = await contrat.safeMint(account, url);
  const data = await result.wait();
  console.log(data);

  //   console.log(symbol);
  //   console.log("acunado exitoso");
};

export const getTokensIds = async () => {
  const { contrat, account } = await connectErc721Ups();
  try {
    const tokeensId = await contrat.tokensByOwner(account);
    // console.log(tokeensId)
    const tokensIdsFormated = tokeensId.map((token) => {
      return Number(token.toString());
    });
    console.log(tokensIdsFormated);
  } catch (error) {
    return null;
  }
};

export const aporveTransaction = async (blockChain) => {
  const { contrat, account } = await connectErc721Ups();
  try {
    const getAproveTrasaction = await contrat.setApprovalForAll(
      smartContracts.market,
      true
    );
    const transation = await getAproveTrasaction.wait();
    console.log("transacion exitosa");
    console.log(transation);
  } catch (error) {
    console.log("ocurrio un error");
    console.log(error);
  }
};
