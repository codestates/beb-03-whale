// import Header from "../Component/header";
import styled from "styled-components";
import MoonWhale from "../images/moon-whale.jpg";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import CollectionContainer from "../Component/collectionContainer";
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
const Intro1 = styled.div`
  position: fixed;
  top: 42%;
  left: 1%;
  font-size: 50px;
  color: white;
  width: 30%;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 2px;
`;
const Intro2 = styled.div`
  position: fixed;
  top: 50%;
  left: 5%;
  font-size: 50px;
  color: white;
  width: 30%;
  font-family: "Rajdhani";
  letter-spacing: 2px;
`;

const Intro3 = styled.div`
  position: fixed;
  top: 49%;
  left: 20%;
  font-size: 60px;
  color: darkslateblue;
  width: 30%;
  font-family: "Rajdhani";
  letter-spacing: 2px;
`;

function Main() {
  return (
    <div className="Main">
      <MainContainer>
        <Backwhale src={MoonWhale}></Backwhale>
        <Box
          sx={{
            width: 600,
            height: 500,
            display: "flex",
            justifyContent: "space-between",
            zIndex: "0",
            position: "fixed",
            top: "25%",
            left: "62%",
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
          <IconButton aria-label="Arrow Left">
            <ArrowLeft />
          </IconButton>
          <CollectionContainer />
          <IconButton aria-label="Arrow right">
            <ArrowRight />
          </IconButton>
        </Box>

        <Intro1>Discover collections</Intro1>
        <Intro2>From Ocean, </Intro2>
        <Intro3>With Whale</Intro3>
      </MainContainer>
    </div>
  );
}

export default Main;
