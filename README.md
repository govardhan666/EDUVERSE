# EDUVERSE - GameFi Project on EDU Ecosystem

![Screenshot 2024-08-31 052058](https://github.com/user-attachments/assets/91f03a4b-e9e3-4dc2-89b2-2737c330f852)

You own a virtual study table where you can mint empty books, write with a pen in them as a digital signature from wallet and submit the filled books to gain points. 

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

## Quickstart

To get started, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/govardhan666/EDUVERSE
cd EDUVERSE
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. Final you can get this amazing Frogverse on your screen: 
![Screenshot 2024-08-31 051031](https://github.com/user-attachments/assets/d3002787-f4e8-401c-9c23-c920b75b799e)



