import styled from "styled-components";
import MoonWhale from "../images/moon-whale.jpg";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { dummyItems } from "../static/dummyData";

// export default function TitlebarBelowImageList() {
//   return (

//   );
// }

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
// const Intro1 = styled.div`
//   position: fixed;
//   top: 42%;
//   left: 1%;
//   font-size: 50px;
//   color: white;
//   width: 30%;
//   font-family: "Quicksand", sans-serif;
//   letter-spacing: 2px;
// `;
// const Intro2 = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 5%;
//   font-size: 50px;
//   color: white;
//   width: 30%;
//   font-family: "Rajdhani";
//   letter-spacing: 2px;
// `;

// const Intro3 = styled.div`
//   position: fixed;
//   top: 49%;
//   left: 20%;
//   font-size: 60px;
//   color: darkslateblue;
//   width: 30%;
//   font-family: "Rajdhani";
//   letter-spacing: 2px;
// `;

function Main() {
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
            // justifyContent: "space-between",
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
            {dummyItems.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span> {item.itemname}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
          {/* <IconButton aria-label="Arrow Left">
            <ArrowLeft />
          </IconButton>
          <CollectionContainer />
          <IconButton aria-label="Arrow right">
            <ArrowRight />
          </IconButton> */}
        </Box>

        <Box>
          <Typography variant="h2">Discover collections</Typography>
          {/* <Intro1>Discover collections</Intro1>
          <Intro2>From Ocean, </Intro2>
          <Intro3>With Whale</Intro3> */}
        </Box>
      </MainContainer>
    </div>
  );
}

export default Main;
