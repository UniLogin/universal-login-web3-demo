import Web3 from 'web3';
import {ULWeb3Provider} from '@universal-login/web3';

const config = {
  relayerUrl: process.env.RELAYER_URL,
  jsonRpcURl: process.env.JSON_RPC_URL,
  ensDomains: [process.env.ENS_DOMAIN_1],
};

const universalLogin = new ULWeb3Provider(
  new Web3.providers.HttpProvider(config.jsonRpcURl),
  config.relayerUrl,
  config.ensDomains,
);

const web3 = new Web3(universalLogin);

function sendTransaction() {
  web3.eth.sendTransaction({
    from: '0x0000000000000000000000000000000000000000',
    to: '0x7ffC57839B00206D1ad20c69A1981b489f772031',
    value: '500000000000000',
  })
    .then(receipt => {
      console.log(receipt);

      alert(`Transaction completed. Tx hash: ${receipt.transactionHash}`)
    }, console.error);
}

document.getElementById('send-btn').addEventListener("click", sendTransaction);

