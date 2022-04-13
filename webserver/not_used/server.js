// const http = require('http');
// const web3 = require('web3');

// const PORT = 6000;
// const IP = 'localhost';

// const server = http.createServer((req, res) => {
//     const {headers, method, url} = req;
//     if (method === 'GET'){
//         if (url === '/nft/all/'){
//             res.writeHead(201, defaultCorsHeader);
//             res.end(json.stringify(data1));
//         }
//         if (url === '/nft/0xF1fB7114Dc87CeB4efC0D6a5dbc05b042412745F/'){
//             res.writeHead(201, defaultCorsHeader);
//             res.end(json.stringify(data2));
//         }
//     }
//     if (method === 'OPTIONS'){
//         res.writeHead(200, defaultCorsHeader);
//         res.end();
//     }
// });

// server.listen(PORT, IP, () => {
//     console.log(`http server listen on ${IP}:${PORT}`);
// });

// const defaultCorsHeader = {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Accept',
//     'Access-Control-Max-Age': 10
// };


// const data1 = {
// 	"1": ["0xf1fb7114dc87ceb4efc0d6a5dbc05b042412745f", {
//     "title": "nft1",
//     "type": "animal",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "doge"
//         },
//         "description": {
//             "type": "string",
//             "description": "doge is cool, wow"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://bafkreihbecelxnbh7qczs5wb2r2xpfyx2zfyzc46ecr7m3guzy6fecxslm.ipfs.nftstorage.link/"
//         }
//     }}],
// 	"2": ["0xf1fb7114dc87ceb4efc0d6a5dbc05b042412745f", {
//     "title": "nft2",
//     "type": "animal",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "doge2"
//         },
//         "description": {
//             "type": "string",
//             "description": "doge is cute, wow"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://bafkreifkde4gzwpmjtsloilbeoz43e65m3bdplist2lsvqfi7hovkjytwe.ipfs.nftstorage.link/"
//         }
//     }}],
// 	"3": ["0x16eb1675cebe17dfa1920e836962952430c5c9f0", {
//     "title": "nft3",
//     "type": "animal",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "doge3"
//         },
//         "description": {
//             "type": "string",
//             "description": "doge is awesome, wow"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://bafybeibabmxzb6gxsnhhv6ujz2ndxk3zqxfa4mr2wzrfipeolzgsufvhiu.ipfs.nftstorage.link/"
//         }
//     }}]
// };

// const data2 = {
// 	"1": {
//     "title": "nft1",
//     "type": "animal",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "doge"
//         },
//         "description": {
//             "type": "string",
//             "description": "doge is cool, wow"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://bafkreihbecelxnbh7qczs5wb2r2xpfyx2zfyzc46ecr7m3guzy6fecxslm.ipfs.nftstorage.link/"
//         }
//     }},
// 	"2": {
//     "title": "nft2",
//     "type": "animal",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "doge2"
//         },
//         "description": {
//             "type": "string",
//             "description": "doge is cute, wow"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://bafkreifkde4gzwpmjtsloilbeoz43e65m3bdplist2lsvqfi7hovkjytwe.ipfs.nftstorage.link/"
//         }
//     }}
// };