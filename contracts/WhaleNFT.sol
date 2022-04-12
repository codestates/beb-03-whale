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

contract TestWho {
    function Whosent () public returns (address sender) {
        sender = msg.sender;
    }
}

contract TransferWhaleNFT is Ownable {
    address private _ownerAddr;

    constructor () payable {
        _ownerAddr = msg.sender;
    }

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
        // address payable buyerAddr;
    }

    mapping(uint => TradeRoom) rooms;
    uint roomLen = 0;

    event RoomCreated (address indexed sellerAddress, uint256 price, uint256 roomNumber);

    event Response(bool success, bytes data);

    // 판매등록: price 단위는 wei = ether * 10^18
    function createRoom (address _nftContract, uint256 _tokenId, uint256 _price) public payable returns (uint roomNum) {
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

        // owner address로 approve (컨트랙트가 같은 페이지에 없을 때)
        // (bool success, bytes memory data) = _nftContract.call {value: 1000} (
        //     abi.encodeWithSignature("approve(address, uint256)", _ownerAddr, _tokenId)
        // );

        // approve 되었는지 확인
        require (ERC721(_nftContract).getApproved(_tokenId) == address(this), "TransferWhaleNFT: token is not approved");
    }

    function Test (address _nftContract) public returns (address sender) {
        sender = TestWho(_nftContract).Whosent();
    }

    function Buy(address _nftContract, uint256 _roomNumber)
        public
        payable
    {
        uint256 price = rooms[_roomNumber].price;
        uint256 tokenId = rooms[_roomNumber].nftProduct.tokenId;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        // 판매자에게 송금
        rooms[_roomNumber].sellerAddr.transfer(msg.value);
        // 구매자에게 nft양도
        IERC721(_nftContract).transferFrom(address(this), msg.sender, tokenId);

        rooms[_roomNumber].tradeStatus = TradeStatus.STATUS_COMPLETE;
        
        // 수수료?
        // payable(owner).transfer(listingPrice);
    }

}