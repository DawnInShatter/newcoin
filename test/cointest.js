let file_path = __dirname + '/../build/contracts/TokenDispatcher.json';
let fs = require('fs');
const infuraKey = fs.readFileSync("../file/.infurakey").toString().trim();


const networkUrl = 'https://ropsten.infura.io/v3'
// const networkUrl = 'https://rinkeby.infura.io/v3'
const heco_networkUrl = 'https://http-testnet.hecochain.com'

// ether
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`${networkUrl}/${infuraKey}`);
// const provider = new ethers.providers.JsonRpcProvider(`${heco_networkUrl}`);
const privateKey = fs.readFileSync("../file/.secret").toString().trim();
const wallet = new ethers.Wallet(privateKey, provider);

const data = JSON.parse(fs.readFileSync(file_path));
var options = {
    gasLimit: 8000000,
    gasPrice: 2000000000
};

async function test_mint(tokenAddress, toAddress){
    let contract_obj = new ethers.Contract('0x6f8EFc43A168c188437294FC10747270E01D3b32', data.abi, wallet)
    console.log(await contract_obj.token_mint(tokenAddress, toAddress, options));
}


test_mint('0x740CaA6A3D85a715d14A79330b23B16071cF9F67', '0x379365Ea34e45444659F24CAb94fCd6031b0b9E8');
