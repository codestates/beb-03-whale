const rpcURL = "https://ropsten.infura.io/v3/0e4ca7c98aff4188997b4dfed819da2d"

const Contract = require('web3-eth-contract');
Contract.setProvider(rpcURL);

const whale = require("../abi/whaleNFT.json");
const whaleAddr = "0xe23E30b939a085a2d92f50C803F574c58912162B";
const whaleContract = new Contract(whale, whaleAddr);

const transfer = require("../abi/transferNFT.json");
const transferAddr = "0xD5e92129477fD369C14411919A6833c05C214275"
const transferContract = new Contract(transfer, transferAddr);


// const Web3 = require('web3');
// const web3 = new Web3(rpcURL);
// const account1 = "0xF1fB7114Dc87CeB4efC0D6a5dbc05b042412745F";


module.exports = {
    test: async (req, res) => {
        var maxNum = await transferContract.methods.roomCount().call()
                .then((ans) => {
                    console.log(ans);
                    res.status(200).json(ans);
                    return ans;
                })
        console.log('hello', maxNum);

        // return web3.eth.getBalance(account1)
        //     .then((bal) => {
        //         return web3.utils.fromWei(bal, "ether");
        //     })
        //     .then((eth) => {
        //         console.log(`${eth}`);
        //         res.status(200).json(eth);
        //     })
    }

};
