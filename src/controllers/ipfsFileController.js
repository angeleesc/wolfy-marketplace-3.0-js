import axios from "axios";
import { rootApipaht } from "../helpers/global-constants";

export const uploadFileToIpfs = async (file, data) => {

    // console.log("archivo")
    // console.log(file)
    // console.log("datos")
    // console.log(data)
    // console.log("archivo envado")

    // const data = 

    const rootPath = rootApipaht.local
    const dataObtained = await axios.get(rootPath)
    // cons
    console.log(dataObtained)




}