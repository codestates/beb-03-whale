import { Box, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Profile from "../Component/profile";
import ImageList from "@mui/material/ImageList";
import Item from "../Component/Item.js";
import { useEffect, useState } from "react";
import axios from "axios";

const MypageContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
}));

function MyPage({ mypageNfts }) {
  const [mypage, setMypage] = useState(mypageNfts);
  async function getMyPage() {
    let result = await axios.get(
      `http://localhost:4000/nft?account_address=${window.ethereum.selectedAddress}`
    );
    setMypage(result.data);
  }
  useEffect(() => {
    getMyPage();
    console.log(mypage);
  }, []);
  // console.log(mypageNfts);
  return (
    <MypageContainer>
      {/* 맨 뒷 배경 */}
      <Box
        sx={{
          background: "lightgray",
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        <Profile />
        {/* 하얀 배경 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "20%",
            width: "100%",
            height: "100%",
            background: "white",
            flexWrap: "wrap",
          }}
        >
          <ImageList
            sx={{
              width: "80%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              overflow: "auto",
              flexWrap: "wrap",
              "& .MuiImageListItem-img": {
                width: "100%",
                height: "100%",
                borderRadius: "10%",
                boxShadow: "0 5px 10px 1px lightgray",
              },
            }}
          >
            {mypage &&
              mypage.map((item) => {
                return (
                  <Item
                    imgURL={item.image_link}
                    name={item.name}
                    key={item.token_id}
                    link={`/sell/${item.token_id}`}
                    isLoading={false}
                    price={item.price}
                    onClick={null}
                  />
                );
              })}
          </ImageList>
        </Box>
      </Box>
    </MypageContainer>
  );
}

export default MyPage;
