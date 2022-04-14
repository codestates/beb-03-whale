import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import EthereumLogo from "../images/Ethereum_logo.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
            <Button variant="contained">Buy Now</Button>
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
