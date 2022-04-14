import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import EthereumLogo from "../images/Ethereum_logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import transferABI from "../abi/TransferWhaleNFT.json";
import address from "../abi/Address";
const Contract = require("web3-eth-contract");

const BuyComponent = ({ curItem }) => {
  const BuyContainer = styled(Paper)(({ theme }) => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    boxShadow: 3,
    width: "80%",
    height: "80%",
    top: "8%",
    left: "10%",
    padding: "2%",
  }));
  async function buy() {
    // buy
    try {
      console.log("buy process start");
      Contract.setProvider(
        "https://ropsten.infura.io/v3/6df37bdfbb1e4dcd8db19ac839911a1b"
      ); // infura
      window.contract = new Contract(
        transferABI,
        address.transferWhaleNFTAddress
      );
      const transactionParameters = {
        to: address.transferWhaleNFTAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods
          .buy(curItem[0].room_number) // 미완성
          .encodeABI(), //make call to NFT smart contract
      };
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      // 서버에 (txHash, nftContract주소, tokenId ,원하는가격) 을 post
      console.log(
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash
      );
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      console.log("😥 Something went wrong: " + error.message);
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  }

  return (
    <BuyContainer>
      <Box>
        <Typography variant="h5">Buy</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {/* photo input area */}
        <Box
          sx={{
            flex: "1 1",
            borderRadius: "10%",
            width: "50%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: { EthereumLogo },
            boxShadow: "0 5px 10px 1px lightgray",
            "& .SellImage": {
              width: "100%",
              height: "100%",
              borderRadius: "10%",
            },
          }}
        >
          <img
            alt="sell NFT"
            src={curItem[0].image_link}
            className="SellImage"
          ></img>
        </Box>
        {/* Text input area */}
        <Box
          sx={{
            margin: "1%",
            width: "50%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            "& .MuiButton-root": {
              background: "8ea8db",
            },
            "& .MuiTypography-h5": {
              color: "lightgray",
            },
          }}
        >
          <Box>
            <Typography variant="h3">{curItem[0].name}</Typography>
            <Typography variant="h5">owned by {curItem[0].owner}</Typography>
          </Box>
          {/* 외곽선 있는 박스 */}
          <Box
            sx={{
              width: "100%",
              height: "20%",
              border: "solid lightgray 0.1px",
              borderRadius: "10px",
              boxShadow: "0 5px 10px 1px lightgray",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2%",
            }}
          >
            {/* 로고+가격 컨테이너 */}
            <Box
              sx={{
                display: "flex",
                // flexDirection: "cloumn",
                justifyContent: "space-evenly",
              }}
            >
              {/* 이더리움 로고 */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "27px",
                  height: "40px",
                  "& .Eth": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <img alt="ETh logo" src={EthereumLogo} className="Eth"></img>
              </Box>

              {/* 가격 */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" align="center">
                  {curItem[0].price}
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" onClick={buy}>
              Buy Now
            </Button>
          </Box>
          <Typography variant="h6" align="center">
            {curItem[0].description}
          </Typography>
        </Box>
      </Box>
    </BuyContainer>
  );
};

export default BuyComponent;
