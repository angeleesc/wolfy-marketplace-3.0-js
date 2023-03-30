import axios from "axios";
import { rootApipaht, requestEndPoints } from "../helpers/global-constants";

export const uploadFileToIpfs = async (file, data) => {
  const formadta = new FormData();

  formadta.append("file", file[0]);

  for (let key in data) {
    formadta.append(key, data[key]);
  }

  try {
    const rootPath = rootApipaht.local + requestEndPoints.ipfs.POSTuploadFile;
    const dataObtained = await axios.post(rootPath, formadta, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(dataObtained.data.urlMetadata);

    return {
      isSucces: true,
      url: dataObtained.data.urlMetadata,
    };
  } catch (error) {
    return {};
  }
};
