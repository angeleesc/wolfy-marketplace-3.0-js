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

    if(!window.ethereum){
        return "notBlockchain"
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
        console.log("estas conectado")
        return true
    } else {
        console.log("no esta conectado")
        return false
    }
}

export const checkCorrertBlockchain = async (ref) => {
    const provider = await getProvider()
    const network = await provider.getNetwork()
    // console.log(network.chainId)
    // console.log(network.name)

    if (network.chainId === ref) return true
    return false

    // console.log(network.)
}


export const changeBlochainNetworkMetamas = async (ref) => {

    const web3Provider = window.ethereum
    const format = ethers.utils.hexValue(420)
    console.log(format)

    try {
        await web3Provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId:"0x1a4" }],
        })
    } catch (error) {
        console.log("ocuurio un error")
        console.log(error)
    }



}

export const getWaletData = async () => {
    const provider = await getProvider()

    if(provider){
        const signer = provider.getSigner()
        const addres = await signer.getAddress()
        const rawBalance = await signer.getBalance();
        const balance = Number(ethers.utils.formatEther(rawBalance))
    
        return {
            addres,
            balance,
        }
    }

    return null

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