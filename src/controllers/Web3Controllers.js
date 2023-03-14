import { ethers } from 'ethers'


export const getAccout = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

export const getProvider = async () => {

    if (window.ethereum) {
        console.log('tiene metamas')
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        return provider
    }
    console.log("no hay provider")
    return null
}

export const connetWalletMetamask = async () => {

    const provider = await getProvider()

    if (provider) {
        console.log('si tiene un provider')
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        const balance = await signer.getBalance()
        const intBalance = ethers.utils.formatEther(balance)

        return {
            address,
            intBalance
        }

    } else {
        console.log('no hay provider')
        return null
    }

}