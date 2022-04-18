const rpcURL = "https://ropsten.infura.io/v3/0e4ca7c98aff4188997b4dfed819da2d"

const Contract = require("web3-eth-contract");
Contract.setProvider(rpcURL);

const whale = require("./abi/whaleNFT.json");
const whaleAddr = "0xe23E30b939a085a2d92f50C803F574c58912162B";
const whaleContract = new Contract(whale, whaleAddr);

const transfer = require("./abi/transferNFT.json");
const transferAddr = "0xD5e92129477fD369C14411919A6833c05C214275"
const transferContract = new Contract(transfer, transferAddr);

const db = require("./db");
const axios = require("axios");

const Web3 = require('web3');
const web3 = new Web3(rpcURL);

let LastIdx = 0;
let prevLastIdx = 0;

const recur = async function () {
    console.log('');
    console.log('############# SECTION 1 #############');
    console.log('GET ALL NFTs OWNER INFO...')

    let nftOwners = {};
    for (let i=1; i<=LastIdx; i++){
        let info = await whaleContract.methods.ownerOf(i).call();
        nftOwners[i] = {};
        nftOwners[i]['owner'] = info;
    }
    prevLastIdx = LastIdx;
    let checkIdx = LastIdx + 1;
    try {
        while (true){
            let checkInfo = await whaleContract.methods.ownerOf(checkIdx).call();
            if (checkInfo[1] == 'x'){
                nftOwners[checkIdx] = {};
                nftOwners[checkIdx]['owner'] = checkInfo;
                LastIdx = checkIdx;
                checkIdx++;
                continue;
            }
        }
    }
    catch (err){
    }

    console.log(nftOwners);
    console.log('');
    console.log('############# SECTION 2 #############');
    console.log('GET ALL NFTs METADATA INFO...');
    
    for (let i = 1; i <= LastIdx; i++){
        let tokenURI = await whaleContract.methods.tokenURI(i).call();
        let res = await axios.get(tokenURI);
        nftOwners[i]['name'] = res.data.name;
        nftOwners[i]['description'] = res.data.description;
        nftOwners[i]['image'] = res.data.image;
    }

    console.log(nftOwners);
    console.log('');
    console.log('############# SECTION 3 #############');
    console.log('UPDATE NFTs DATABASE...');

    for (let i = 1; i <= prevLastIdx; i++){
        const updateQuery = `UPDATE NFTs
                                SET owner='${nftOwners[i]['owner']}', name='${nftOwners[i]['name']}',
                                description='${nftOwners[i]['description']}', image_link='${nftOwners[i]['image']}',
                                price='0', room_number='-1'
                                WHERE token_id='${i}';`;
        db.query(updateQuery, (error, result) => {
            if (error) {
                console.log(error);
            }
        });
    }
    for (let i = prevLastIdx+1; i <= LastIdx; i++){
        const addQuery = `INSERT INTO NFTs (token_id, owner, name, description, image_link, price, room_number)
                            VALUES ('${i}', '${nftOwners[i]['owner']}', '${nftOwners[i]['name']}',
                            '${nftOwners[i]['description']}', '${nftOwners[i]['image']}', '0', '-1');`;
        db.query(addQuery, (error, result) => {
            if (error) {
                console.log(error);
            }
        });
    }

    console.log('prevLastIdx :', prevLastIdx);
    console.log('LastIdx :', LastIdx);
    console.log('');
    console.log('############# SECTION 4 #############');
    console.log('GET ALL TRADE INFO...');

    let ahead = [];
    let rooms = {}; // key is token_id
    let roomNum = await transferContract.methods.roomCount().call();
    for (let i = 0; i < roomNum; i++){
        let roomInfo = await transferContract.methods.roomInfo(i).call();
        if (roomInfo['0'] == 1){
            let tokenId = roomInfo['2'];
            if (ahead.includes(tokenId)){
                rooms[tokenId]['price'] = web3.utils.fromWei(roomInfo['3'], 'ether');
                rooms[tokenId]['roomNum'] = i;
            }
            else {
                ahead.push(tokenId);
                rooms[tokenId] = {};
                rooms[tokenId]['price'] = web3.utils.fromWei(roomInfo['3'], 'ether');
                rooms[tokenId]['roomNum'] = i;
            }
        }
        if (roomInfo['0'] == 2 && ahead.includes(roomInfo['2'])){
            rooms[roomInfo['2']]['price'] = 0;
            rooms[roomInfo['2']]['roomNum'] = -1;
        }
    }

    console.log(rooms);
    console.log('');
    console.log('############# SECTION 5 #############');
    console.log('UPDATE TRADE DATABASE...');

    for (let i = 0; i < ahead.length; i++){
        let tokenId = ahead[i];
        const updateQuery = `UPDATE NFTs
                                SET price='${rooms[tokenId]['price']}', room_number='${rooms[tokenId]['roomNum']}'
                                WHERE token_id='${tokenId}';`;
        db.query(updateQuery, (error, result) => {
            if (error) {
                console.log(error);
            }
        });
    }
    
    console.log('');
    console.log('############# SECTION 6 #############')
    console.log('UPDATE END...')

}

const go = async function(){
    let cnt = 1;
    while (true) {
        let s = await recur();
        console.log('');
        console.log('====================================================')
        console.log('repetition :', cnt);
        cnt++;
        console.log('====================================================')
    }
}

db.query('DELETE FROM NFTs;', (error, result) => {
    if (error){
        console.log(error);
    }
});

go();

// roomNumber 0부터 시작
// TradeStatus -> 0:not_created, 1:post, 2:complete, 3:error
// (room.tradeStatus, room.contractAddr, room.tokenId, room.price)