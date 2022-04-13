// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract WhaleNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("WhaleNFT", "WNFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}

// contract TestWho {
//     function Whosent () public returns (address sender) {
//         sender = msg.sender;
//     }
// }

// version 1.0.1
contract TransferWhaleNFT {

    constructor () payable {}

    enum TradeStatus {  
        STATUS_POST, STATUS_COMPLETE, STATUS_ERROR 
    }

    struct NFTProduct {
        address contractAddr;
        uint256 tokenId;
    }

    struct TradeRoom {
        NFTProduct nftProduct;
        uint256 price;
        address payable sellerAddr;
        TradeStatus tradeStatus;
    }

    mapping(uint => TradeRoom) rooms;
    uint roomLen = 0;

    event SellPosted (address indexed sellerAddress, uint256 price, uint256 roomNumber);

    event TransferSuccess (address indexed seller, address indexed buyer, uint256 price, uint256 roomNumber);

    // 판매등록: price 단위는 wei = ether * 10^18
    function sell(address _nftContract, uint256 _tokenId, uint256 _price) public returns (uint roomNum) {
        // approve 되었는지 확인
        require (ERC721(_nftContract).getApproved(_tokenId) == address(this), "TransferWhaleNFT: token is not approved");

        rooms[roomLen] = TradeRoom({
            nftProduct: NFTProduct({
                contractAddr: _nftContract,
                tokenId: _tokenId
            }),
            price: _price,
            sellerAddr: payable(msg.sender),
            tradeStatus: TradeStatus.STATUS_POST
            // buyerAddr: payable(_ownerAddr) // will change
        });
        roomNum = roomLen;
        roomLen = roomLen + 1;

        emit SellPosted(msg.sender, _price, roomNum);

        // owner address로 approve (컨트랙트가 같은 페이지에 없을 때)
        // (bool success, bytes memory data) = _nftContract.call {value: 1000} (
        //     abi.encodeWithSignature("approve(address, uint256)", _ownerAddr, _tokenId)
        // );
    }

    // function Test (address _nftContract) public returns (address sender) {
    //     sender = TestWho(_nftContract).Whosent();
    // }


    // 문제점 예상: 중간에 판매자가 임의로 approve를 변경했을 때?
    function buy(uint256 _roomNumber)
        public
        payable
    {
        uint256 price = rooms[_roomNumber].price;
        uint256 tokenId = rooms[_roomNumber].nftProduct.tokenId;
        require(
            msg.value == price,
            "TransferWhaleNFT: Please submit the asking price in order to complete the purchase"
        );

        // 판매자에게 송금
        rooms[_roomNumber].sellerAddr.transfer(msg.value);
        // 구매자에게 nft양도
        ERC721(rooms[_roomNumber].nftProduct.contractAddr).transferFrom(rooms[_roomNumber].sellerAddr, msg.sender, tokenId);

        // idToMarketItem[itemId].owner = payable(msg.sender);
        rooms[_roomNumber].tradeStatus = TradeStatus.STATUS_COMPLETE;
        // _itemsSold.increment();
        // 수수료?
        // payable(owner).transfer(listingPrice);
        emit TransferSuccess (rooms[_roomNumber].sellerAddr, msg.sender, price, _roomNumber);
    }


    // 개선할 점: 서버에 정보를 줄 수 있는 함수 생성
    // return(status, nftcontract, tokenId, price)
    function roomInfo(uint256 _roomNumber) public returns (TradeStatus, address, uint256, uint256) {
        return(rooms[_roomNumber].tradeStatus, rooms[_roomNumber].nftProduct.contractAddr, rooms[_roomNumber].nftProduct.tokenId, rooms[_roomNumber].price);
    }
}