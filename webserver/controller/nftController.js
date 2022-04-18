const models = require("../models");

module.exports = {
    findAll: (req, res) => {
        if (req.query.account_address != undefined){
            models.get1(req.query.account_address, (error, result) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
                else {
                    return res.status(200).json(result);
                }
            });
        }
        else if (req.query.token_id !== undefined){
            models.get2(req.query.token_id, (error, result) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
                else {
                    return res.status(200).json(result);
                }
            })
        }
        else {
            models.get0((error, result) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
                else {
                    return res.status(200).json(result);
                }
            })
        }
    },
};


// below is for local file system test version

// const nfts = require('../repo/nftList');

// module.exports = {
//     findAll: (req, res) => {
//         if (req.query.account_address !== undefined){
//             const list = nfts.filter((item) => {
//                 return item.owner === req.query.account_address;
//             });
//             return res.status(200).json(list);
//         }
//         if (req.query.token_id !== undefined){
//             const list = nfts.filter((item) => {
//                 return item.token_id === req.query.token_id;
//             });
//             return res.status(200).json(list);
//         }
//         return res.status(200).json(nfts);
//     },
// };