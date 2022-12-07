<h3>Usage for React JS!</h3>

# :::::::Example Provider::::::
```js
import { ProvideMetamask } from 'metamask-hook-gambaru'

<div>
  <ProvideMetamask>
    <Component />
  </ProvideMetamask>
</div>
```

# :::::::Example Hook::::::

```js 
import { useMetamask } from 'metamask-hook-gambaru'

const {
    web3
    address,
    getAddressMetamask, 
    chainId, 
    getChainId, 
    loading, 
    chainName,
    setChainIdMetamask,
    errorAddress,
    warningMessage,
    notInstalled
  }: any = useMetamask()
```
```js 
  const handleSignIn = async (e: any) => {
    e.preventDefault()
    await getAddressMetamask()
  }
```
```js 
  const handleChain = async (e: any) => {
    e.preventDefault()
    await getChainId()
  }
```
```js 
  const handleSetNetwork = async (e: any) => {
    e.preventDefault()
    await setChainIdMetamask(
      '0x61',
      'Binance Smart Chain',
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/info/logo.png',
      'BNB',
      'BNB',
      18,
      'https://data-seed-prebsc-1-s1.binance.org:8545/',
      'https://testnet.bscscan.com/'
    )
  }
```
```js 
<div>
  <p><strong>{loading ? 'NoAddress' : address}</strong></p>
  <p><strong>{chainId}</strong></p>
  <p><strong>{chainName}</strong></p>
  <button onClick={handleSignIn}>getAddress</button>
  <button onClick={handleChain}>getChainId</button>
  <button onClick={handleSetNetwork}>setChaiId</button>
</div>  
```

