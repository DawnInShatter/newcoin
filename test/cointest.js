let file_path = __dirname + '/../build/contracts/TokenDispatcher.json';
let fs = require('fs');
const infuraKey = fs.readFileSync("../file/.infurakey").toString().trim();


const networkUrl = 'https://ropsten.infura.io/v3'
const heco_networkUrl = 'https://http-testnet.hecochain.com'

// ether
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`${networkUrl}/${infuraKey}`);
// const provider = new ethers.providers.JsonRpcProvider(`${heco_networkUrl}`);
const privateKey = fs.readFileSync("../file/.secret").toString().trim();
const wallet = new ethers.Wallet(privateKey, provider);

const data = JSON.parse(fs.readFileSync(file_path));


async function test_mint(tokenAddress, toAddress){
    let contract_obj = new ethers.Contract('0xfa5CB376A039DAC0ba48fc51705D8F9D802F8Cf5', data.abi, wallet)
    console.log(await contract_obj.token_mint(tokenAddress, toAddress, ethers.utils.parseEther('666')));
}


test_mint('0x92733d126fc90A714714Fe97D3530362653aA416', '0x379365Ea34e45444659F24CAb94fCd6031b0b9E8');
