import { ethers } from 'ethers'
import { jsonRpc } from '../helpers/global-constants'



export const getProvider = async () => {

    if (window.ethereum) {
        // console.log('tiene metamas')
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        return provider
    }
    // console.log("no hay provider")
    return null
}


export const getProviderByJsonRpc = async () => {
    const provider = new ethers.providers.JsonRpcProvider(jsonRpc["optimism-goerli"])
    return provider
}

export const checWaletConected = async () => {

    if (!window.ethereum) {
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

    if (network.chainId === Number(ref)) return true
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
            params: [{ chainId: "0x1a4" }],
        })

        return true

    } catch (error) {
        console.log("ocuurio un error")
        console.log(error)

        return false
    }



}


export const addNewBlockChainNetWork = async () => {

    const web3Provider = window.ethereum

    try {
        await web3Provider.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: "0x1a4",
                    chainName: 'optimism-goerli',
                    rpcUrls: ['https://goerli.optimism.io/'],
                    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
                    nativeCurrency: {
                        symbol: 'ETH',
                        decimals: 18
                    }
                }
            ]
        })

        console.log("vinculacion exitosa")

    } catch (error) {

        console.log("ocurrio un error")

    }

}


export const getWaletData = async () => {
    const provider = await getProvider()

    if (provider) {
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

export const checkIsEqualAddres = async (id) => {

    const provider = await getProvider()

    if (provider) {
        const signer = provider.getSigner()
        const wallet = await signer.getAddress()

        if (id === wallet) {
            return true
        }

        return false

    }

    return null

}