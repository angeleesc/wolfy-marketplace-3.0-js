import axios from "axios";
import { rootApipaht, requestEndPoints } from "../helpers/global-constants";

export const uploadFileToIpfs = async (file, data) => {


    const formadta = new FormData()

    formadta.append("file", file[0])

    const rootPath = rootApipaht.local + requestEndPoints.ipfs.POSTuploadFile
    const dataObtained = await axios.post(rootPath, formadta, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    // cons
    console.log(dataObtained.data)




}