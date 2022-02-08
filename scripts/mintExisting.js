require('dotenv').config();

// Settings please adjust
const PUBLIC_KEY = process.env.PUBLIC_KEY;  // Wallet Address sender
const PRIVATE_KEY = process.env.PRIVATE_KEY; //Private Walled Key
const extensionContractAddress = "0xF704aCb329142b5604b78268F39aD858b71b8B08"; // Contract Address
const API_URL = process.env.STAGING_ALCHEMY_KEY; // Alchemy API Url


const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/XYZManifoldExtension.sol/XYZManifoldExtension.json");

const nftContract = new web3.eth.Contract(contract.abi, extensionContractAddress);


async function mintExisting() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
  console.log("initialize");


  try {

    console.log("Minting");

    const gasPrice = await web3.eth.getGasPrice()
    const estimatedGas = await web3.eth.estimateGas({
      to: PUBLIC_KEY,
      nonce: nonce,
    })
    
    console.log("---------------------------------------------------------------------");
    console.log("Minting");
    console.log("Calculated GasPrice", gasPrice);
    console.log("Calculated estimatedGas", estimatedGas);

    const tx = {
      'from': PUBLIC_KEY,
      'to': extensionContractAddress,
      'nonce': nonce,
      'gasPrice': gasPrice * 2,
      'gas': estimatedGas * 20,
      'value': 10000000000000000,
      'data': nftContract.methods.mintExisting().encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    const hash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    console.log(
      "The hash of your transaction is: ",
      hash,
      "\nCheck Alchemy's Mempool to view the status of your transaction!"
    )
  } catch (err) {
    console.log(err)
  }
}
mintExisting().then(data => {
  console.log(data)
});

