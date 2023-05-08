import axios from "axios"
import { requestEndPoints, rootApipaht } from "../helpers/global-constants"

export const getOdres = async (fillter) => {

    // const rootPath = rootApipaht.local + requestEndPoints.firebase.POSTGetAsk
    const rootPath = rootApipaht.porduction + requestEndPoints.firebase.POSTGetAsk

    try {
        const result = await axios.post(rootPath, fillter)
        console.log(result.data)
        return result.data

    } catch (error) {

        console.log(error)
        return {

            isSuccess: false
        }

    }


}


export const getOrdersByWalletAddres = async (wallet, fillter) => {

    // const rootPath = rootApipaht.local + requestEndPoints.firebase.POSTGetAskByUser
    const rootPath = rootApipaht.porduction + requestEndPoints.firebase.POSTGetAskByUser
    console.log("wallet")
    console.log(wallet)

    console.log("orteniendop la ordene por usuario")
    console.log(wallet)

    try {

        const result = await axios.post(rootPath, {
            wallet,
            fillter
        })

        return result.data


    } catch (error) {
        return null
    }


    // console.log(result.data)

}


export const getBuyerBid = async(id)=>{

}

