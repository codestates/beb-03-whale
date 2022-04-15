# Whale Smart Contracts

---

다음 두개의 contract를 ropsten testnet을 통해 배포중입니다.

## 현재 배포중인 컨트랙트

### NFT 컨트랙트 WhaleNFT test용 (도지 1 2 3)

https://ropsten.etherscan.io/address/0xe23e30b939a085a2d92f50c803f574c58912162b

### 거래 컨트랙트 TransferWhaleNFT 1.0.4

https://ropsten.etherscan.io/address/0xd5e92129477fd369c14411919a6833c05c214275

---

## contract WhaleNFT

ERC721 컨트랙트에 WhaleNFT ( symbol: WNFT) 을 민팅할 수 있는 컨트랙트입니다.

## contract TransferWhaleNFT

ERC721 베이스 NFT의 거래를 도와주는 컨트랙트입니다.

해당 NFT 컨트랙트에서 approve를 받은 후 사용하실 수 있습니다.

NFT 판매 등록과 구매 기능을 제공합니다.

---

## 구버전 배포list

### TransferWhaleNFT 1.0.1

https://ropsten.etherscan.io/address/0xce82f91dbc157f2f1bdc467c1bafe97aafc1f85c

### WhlaeNFT 1.0.1 (mintNFTMyself 추가)

https://ropsten.etherscan.io/address/0x9fc8ae86546363821ee4908ee9a309a9484062d5

### test실패

https://ropsten.etherscan.io/address/0x4a9084f1b75efb80a4f481924ee23484d6bec32d

## WhaleNFT

- 기존 ERC721 컨트랙트에 mintNFT와 mintNFTMyself를 추가한 컨트랙트

## TransferWhaleNFT

- Whale 프로젝트에 사용할 거래 컨트랙트

먼저 계약주소(현재는 )로 클라이언트가 approve를 한 후 판매 등록이 가능합니다.
