<p>Usage!</p>
<h4>:::::::Example Provider::::::</h4>
</br>
<p>import { ProvideMetamask } from 'metamask-hook-gambaru'</p>
</br>
<p><ProvideMetamask></p>
  <p><Component /></p>
<p></ProvideMetamask></p>
</br>
</br>
<h4>:::::::Example Hook::::::</h4>
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
  <p>{loading ? 'NoAdess' : address}</p>
  <p>{chainId}</p>
  <p>{chainName}</p>
  <h5 onClick={handleSignIn}>getAddress</h5>
  <h5 onClick={handleChain}>getChainId</h5>
  <h5 onClick={handleSetNetwork}>setChaiId</h5>
  

