import axios from "axios"
import { requestEndPoints, rootApipaht } from "../helpers/global-constants"

export const getNftsByWallet = async (acccount) => {

    const rootPath = rootApipaht.local + requestEndPoints.alchemy.getNftsBalanceOnWalet
    // const rootPath = rootApipaht.porduction + requestEndPoints.alchemy.getNftsBalanceOnWalet

    try {

        const res = await axios.get(rootPath, {
            params: {
                acccount
            }
        })

        return res.data

    } catch (error) {

        return null

    }







}