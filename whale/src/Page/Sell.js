import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SellComponent from "../Component/sellComponent";

function Sell() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const nftId = path[path.length - 1]; // 임시로 맨 끝자리만 떼왔어요~
  const [curItem, setCurItem] = useState(null);

  async function getOneNft(tokenId) {
    let result = await axios.get(`http://localhost:4000/nft?token_id=${nftId}`);
    setCurItem([...result.data]);
    return result.data;
  }
  useEffect(() => {
    getOneNft(nftId);
    console.log(path);
  }, []);

  useEffect(() => {
    console.log(curItem);
  }, [curItem]);

  function isNull() {
    console.log(curItem);
    if (curItem === null) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <Box>{isNull() ? <Box></Box> : <SellComponent curItem={curItem} />}</Box>
  );
}

export default Sell;
