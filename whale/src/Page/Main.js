import styled from "styled-components";
import MoonWhale from "../images/moon-whale.jpg";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// 배경
const MainContainer = styled.div`
  display: flex;
  z-index: -1;
`;
const Backwhale = styled.img`
  position: fixed;
  width: 80%;
  height: 100%;
  opacity: 0.8;
  z-index: 0;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 5%, transparent 100%);
`;
function Main({ nfts }) {
  return (
    <div className="Main">
      <MainContainer>
        <Backwhale src={MoonWhale}></Backwhale>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            zIndex: "0",
            position: "fixed",
            top: "10%",
            left: "55%",
            "& .MuiIconButton-root": {
              width: "8%",
              height: "10%",
              top: "45%",
            },
            "& .MuiSvgIcon-root": {
              width: "100%",
            },
          }}
        >
          <Typography variant="h3">Notable Items</Typography>
          <ImageList
            sx={{
              width: "80%",
              height: 800,
              "& .MuiImageListItem-img": {
                width: "100%",
                height: "100%",
                borderRadius: "10%",
                boxShadow: "0 5px 10px 1px lightgray",
              },
            }}
          >
            {/* {
		"token_id" : "FILL_ME",
		"owner" : "FILL_ME",
		"name" : "FILL_ME",
		"description" : "FILL_ME",
		"image_link" : "FILL_ME",
		"price" : "FILL_ME",
		"room_number" : "FILL_ME"
	}, */}
            {nfts.map((item) => (
              <ImageListItem key={item.token_id}>
                <img
                  src={`${item.image_link}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span> {item.name}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </MainContainer>
    </div>
  );
}

export default Main;
