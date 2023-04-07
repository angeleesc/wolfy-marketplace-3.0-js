import { ethers } from 'ethers'



export const getProvider = async () => {

    if (window.ethereum) {
        console.log('tiene metamas')
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        return provider
    }
    console.log("no hay provider")
    return null
}

export const checWaletConected = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
        console.log("estas conectado")
        return true
    } else {
        console.log("no esta conectado")
        return false
    }
}



export const getWaletData = async () => {
    const provider = await getProvider()
    const signer = provider.getSigner()
    const addres = await signer.getAddress()
    const rawBalance = await signer.getBalance();
    const balance = Number(ethers.utils.formatEther(rawBalance))

    return {
        addres,
        balance,
    }
}


export const connetWalletMetamask = async () => {

    const provider = await getProvider()

    if (provider) {
        console.log('si tiene un provider')
        await provider.send("eth_requestAccounts", []);
        return true
    } else {
        console.log('no hay provider')
        return null
    }

}