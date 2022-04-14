import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import EthereumLogo from "../images/Ethereum_logo.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyComponent from "../Component/buyComponent";

function Buy() {
  const location = useLocation();
  const path = location.pathname;
  const nftId = path[path.length - 1]; // 임시로 맨 끝자리만 떼왔어요~
  const [curItem, setCurItem] = useState(null);
  const [flag, setFlag] = useState(false);

  async function getOneNft(tokenId) {
    let result = await axios.get(`http://localhost:4000/nft?token_id=${nftId}`);
    setCurItem({ ...result.data });
    return result.data;
  }
  useEffect(() => {
    // console.log(getOneNft(nftId));
    getOneNft(nftId);
    // setCurItem(resultData);
  }, []);

  useEffect(() => {
    console.log(curItem);
  }, [curItem, flag]);

  function isNull() {
    console.log(curItem);
    if (curItem === null) {
      return true;
    } else {
      return false;
    }
  }
  return <Box>{isNull ? <Box></Box> : <BuyComponent curItem={curItem} />}</Box>;
}

export default Buy;
