const db = require("../db");

module.exports = {
    get1 : (addr, callback) => {
        const queryString = `SELECT token_id, owner, name, description, image_link, price, room_number
                                FROM NFTs
                                WHERE owner='${addr}';`;
        db.query(queryString, (error, result) => {
            console.log(result);
            callback(error, result);
        });
    },
    get2 : (tokenId, callback) => {
        const queryString = `SELECT token_id, owner, name, description, image_link, price, room_number
                                FROM NFTs
                                WHERE token_id='${tokenId}';`;
        db.query(queryString, (error, result) => {
            console.log(result);
            callback(error, result);
        });
    },
    get0 : (callback) => {
        const queryString = `SELECT token_id, owner, name, description, image_link, price, room_number FROM NFTs`;
        db.query(queryString, (error, result) => {
            console.log(result);
            callback(error, result);
        });
    }

}