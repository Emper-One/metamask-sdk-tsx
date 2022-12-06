<h4>Usage!</h4>
</br>
<h3>:::::::Example Provider::::::</h3>
</br>
<p>import { ProvideMetamask } from 'metamask-hook-gambaru'</p>
</br>
<div>
  <ProvideMetamask>
    <Component />
  </ProvideMetamask>
</div>
</br>
</br>
<h3>:::::::Example Hook::::::</h3>
</br>
<p>import { useMetamask } from 'metamask-hook-gambaru'</p>

<p>const {</p>
    <p>we3</p>
    <p>address,</p>
    <p>getAddressMetamask, </p>
    <p>chainId, </p>
    <p>getChainId, </p>
    <p>loading, </p>
    <p>chainName,</p>
    <p>setChainIdMetamask,</p>
    <p>errorAddress,</p>
    <p>warningMessage,</p>
    <p>notInstalled</p>
  <p>}: any = useMetamask()</p>
</br>
  <p>const handleSignIn = async (e: any) => {</p>
    <p>e.preventDefault()</p>
    <p>await getAddressMetamask()</p>
  <p>}</p>
</br>

  <p>const handleChain = async (e: any) => {</p>
    <p>e.preventDefault()</p>
    <p>await getChainId()</p>
  <p>}</p>
</br>
  <p>const handleSetNetwork = async (e: any) => {</p>
    <p>e.preventDefault()</p>
    <p>await setChainIdMetamask(</p>
      <p>'0x61',</p>
      <p>'Binance Smart Chain',</p>
      <p>'https://assets-cdn.trustwallet.com/blockchains/smartchain/info/</p>
      <p>logo.png',</p>
      <p>'BNB',</p>
      <p>'BNB',</p>
      <p>18,</p>
      <p>'https://data-seed-prebsc-1-s1.binance.org:8545/',</p>
      <p>v'https://testnet.bscscan.com/'</p>
    <p>)</p>
  <p>}
</br>
<div>
  <p><strong>{loading ? 'NoAdess' : address}</strong></p>
  <p><strong>{chainId}</strong></p>
  <p><strong>{chainName}</strong></p>
  <button onClick={handleSignIn}>getAddress</button>
  <button onClick={handleChain}>getChainId</button>
  <button onClick={handleSetNetwork}>setChaiId</button>
</div>  

