# Universal-Login Web3 demo app

## Getting started

Running the app:
```bash
# install dependencies
yarn

# start in dev-mode (runs on local ganache blockchain)
yarn start:dev
```
The app would now be running on http://0.0.0.0:8080/.


To top-up your wallet use the following command:
```bash
npx universal-login send <address> <count> ETH

# example
npx universal-login send 0x438A35372071114863e726e7c4A1BB2D1D59b170 4 ETH
```

## How it set it up yourself

1. Create a provider:
```javascript
import {ULWeb3Provider} from '@universal-login/web3';

const universalLogin = new ULWeb3Provider(
  new Web3.providers.HttpProvider(config.jsonRpcURl), // provider used to connect to blockchain
  config.relayerUrl, // Universal-Login relayer url
  config.ensDomains, // array of ENS-domains available for registration
);
```
2. Set-up web3 with it:
```javascript
import Web3 from 'web3';

const web3 = new Web3(universalLogin);
```
3. Use it as a normal web3 app: 
```javascript
web3.eth.sendTransaction({
  from: '0x0000000000000000000000000000000000000000', // set the from field to arbitrary value
  to: '0x7ffC57839B00206D1ad20c69A1981b489f772031',
  value: '500000000000000',
})
  .then(receipt => {
    console.log(receipt);

    alert(`Transaction completed. Tx hash: ${receipt.transactionHash}`)
  }, console.error);
```
