import axios from "axios";
import { rootApipaht, requestEndPoints } from "../helpers/global-constants";

export const uploadFileToIpfs = async (file, data, updatedState) => {
  const formadta = new FormData();

  formadta.append("file", file[0]);

  for (let key in data) {
    formadta.append(key, data[key]);
  }

  try {
    // const rootPath = rootApipaht.local + requestEndPoints.ipfs.POSTuploadFile;
    const rootPath = rootApipaht.porduction + requestEndPoints.ipfs.POSTuploadFile
    const dataObtained = await axios.post(rootPath, formadta, {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress: (e) => {

        const totalLentg = e.total
        const loaded = e.loaded

        console.log(totalLentg, loaded)
        const progress = parseInt((loaded * 100) / totalLentg)
        console.log(progress)

        if (updatedState && typeof (updatedState) === "function") {
          updatedState(progress)
        }


      }
    });

    console.log(dataObtained.data.urlMetadata);

    return {
      isSucces: true,
      url: dataObtained.data.urlMetadata,
    };
  } catch (error) {
    return {
      isSucces: false
    };
  }
};
