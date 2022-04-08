// import Header from "../Component/header";
import styled from "styled-components";
import MoonWhale from "../images/moon-whale.jpg";

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
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 5%, transparent 100%);
`;

function Main() {
  return (
    <div className="Main">
      <MainContainer>
        <Backwhale src={MoonWhale}></Backwhale>
      </MainContainer>
    </div>
  );
}

export default Main;
