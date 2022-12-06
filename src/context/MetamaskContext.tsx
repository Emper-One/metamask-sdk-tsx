import React, { useState, useContext, createContext, useEffect } from 'react'
import Web3 from 'web3'


export const MetamaskContext = createContext({})

export const useMetamask = () => useContext(MetamaskContext)

export function ProvideMetamask ({ children }: any) {
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [chainName, setChainName] = useState<any>(null)
  const [web3, setWeb3] = useState<any | null>(null)
  const [notInstalled, setNotInstalled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [warningMessage, setWarningMessage] = useState<string>('')
  const [errorAddress, setErrorAddress] = useState<string>('')


  const getAccountLegacy = async (web3Provider: any) => {
    setLoading(true)
    const web3internal = new Web3(web3Provider)
    setWeb3(web3internal)
    web3.eth.getAccounts()
      .then((accounts : string[]) => {
        setAddress(accounts[0])
        setLoading(false)
        return address
        })
      .catch((error: string) => {
        setLoading(false)
        setErrorAddress(error)
        return error
      })
  }

  const getAccount = async (web3Provider: any) => {
    setLoading(true)
    const web3internal = new Web3(web3Provider)
    setWeb3(web3internal),
    (window as any).ethereum
     .request({
         method: "eth_requestAccounts",
     })
     .then((accounts : string[]) => {
        setAddress(accounts[0])
        setLoading(false)
      })
     .catch((error: string) => {
        setLoading(false)
        setErrorAddress(error)
     })
  }

  const getAddressMetamask = async () => {
    let web3Provider: any
    // Modern dApp browsers...
    if ((window as any).ethereum) {
      // console.log('window.ethereum')
      web3Provider = (window as any).ethereum
      const account = await getAccount(web3Provider)
      return account
    } else if ((window as any).web3) { // Legacy dApp browsers...
      // console.log('window.web3')
      web3Provider = (window as any).web3.currentProvider
      const account = await getAccountLegacy(web3Provider)
      return account
    } else { 
      // If no injected web3 instance is detected, fall back to Ganache
      setWarningMessage('Please Install Metamask')
      setNotInstalled(true)
      return
    }
  }

  const getChainId = async () => {
    setLoading(true)
    if ((window as any).ethereum) {
      const chainId: string = await (window as any).ethereum.request({
        method: "eth_chainId",
      }).then((chainId: number) => {
        setChainId(Math.floor(chainId))
        setLoading(false)
      }).catch((error: string) => {
        setErrorAddress(error)
        setLoading(false)
     })
    } else if ((window as any).web3) {
      const networkID = await web3.eth.net.getId()
      setChainId(Math.floor(networkID))
      setLoading(false)
    } else {
      setWarningMessage('Please Install Metamask')
      setNotInstalled(true)
      setLoading(false)
    }
  }
  
  const networksNames = () => {
    const names = []
    names[1] = 'Ethereum Mainnet'
    names[3] = 'Ethereum Ropsten'
    names[42] = 'Ethereum Kovan'
    names[4] = 'Ethereum Rinkeby'
    names[5] = 'Ethereum Goerli'
    names[56] = 'Binance Smart Chain'
    names[97] = 'Binance Smart Chain Testnet'
    if (chainId) {
      if (names[chainId]) {
        setChainName(names[chainId])
      } else {
        setWarningMessage(`Network ID ${chainId} Not found in the networksNames list`)
      }
    } else {
      setWarningMessage('Set chainId')
    }
  }

  useEffect(() => {
    if(chainId) {
      networksNames()
    }
  },[chainId])

  useEffect(() => {
    getAddressMetamask()
    getChainId()
    if((window as any)) {
      const etherium = (window as any).ethereum
      if (etherium) {
        etherium.on('accountsChanged', async function (accounts: string[]) {
          setAddress(accounts[0])
        })
    
        etherium.on('chainChanged',async function (chainId: number) {
          setChainId(Math.floor(chainId))
        })
      } else if ((window as any).web3) {
        setWarningMessage('Deprecated, install new version metamask!')
      } else {
        setWarningMessage('Please Install Metamask')
        setNotInstalled(true)
      }
    }
  }, [])

  const setChainIdMetamask = async (
      chainId: number,
      chainName: string,
      iconUrls: string,
      name: string,
      symbol: string,
      decimals: number,
      rpcUrls: string,
      blockExplorerUrls: string,
    ) => {
    if ((window as any).ethereum) {
      const ethereum = (window as any).ethereum
      const data = [{
        chainId: await web3.utils.toHex(chainId),
        chainName,
        iconUrls: [iconUrls],
        nativeCurrency: { name, symbol, decimals },
        rpcUrls: [rpcUrls],
        blockExplorerUrls: [blockExplorerUrls]
      }]
      /* eslint-disable */
      await ethereum
        .request({method: 'wallet_addEthereumChain', params:data})
        .catch((error: string) => {
          setWarningMessage('Network not exist or rejected change!')
      })
    }
  }

  return (
    <MetamaskContext.Provider
      value={{
        web3,
        address,
        chainId,
        chainName,
        errorAddress,
        warningMessage,
        notInstalled,
        loading,
        getAddressMetamask,
        getChainId,
        setChainIdMetamask
      }}
    >
      {children}
    </MetamaskContext.Provider>
  )
}
