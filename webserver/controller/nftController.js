const nfts = require('../repo/nftList');

module.exports = {
    findAll: (req, res) => {
        if (req.query.account_address !== undefined){
            const list = nfts.filter((item) => {
                return item.owner === req.query.account_address;
            });
            return res.status(200).json(list);
        }
        if (req.query.token_id !== undefined){
            const list = nfts.filter((item) => {
                return item.token_id === req.query.token_id;
            });
        }
        return res.status(200).json(nfts);
    },
};