import Web3 from 'web3'

const extensionContractAddress = "0x72496429Ff6F01FDa656Cdcc0A943D12B232619f";
const contract = require("../artifacts/contracts/XYZManifoldExtension.sol/XYZManifoldExtension.json");

async function mintExisting(provider) {
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(contract.abi, extensionContractAddress);
    const accounts = await provider.request({ method: 'eth_requestAccounts' })
    const fromAddress = accounts[0]
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest')
    console.log(nonce)
    const gasPrice = await web3.eth.getGasPrice()
    console.log(gasPrice)
    const estimatedGas = await nftContract.methods.mintExisting().estimateGas({
        from: fromAddress,
        value: web3.utils.toWei('0.1', 'ether')
    })
    console.log(estimatedGas)
    const tx = {
        'from': fromAddress,
        'to': extensionContractAddress,
        'nonce': String(nonce),
        'gasPrice': String(gasPrice),
        'gas': String(estimatedGas),
        'value': '100000000000000',
        'chain': 'rinkeby',
        'data': nftContract.methods.mintExisting().encodeABI()
    }

    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx],
    });
    return txHash;
}

export default mintExisting;


