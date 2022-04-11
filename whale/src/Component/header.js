import React from "react";
import styled from "styled-components";
import whaleImg from "../icons/whale.png";
import userImg from "../icons/user.png";
import walletImg from "../icons/wallet.png";
import { shadow, media } from "../lib/styleUtils";
import { NavLink } from "react-router-dom";

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

// 루트 로고
const WhaleLogo = styled.img`
  position: fixed;
  top: 0%;
  left: 4%;
  height: 3.5rem;
  width: 50px;
`;

// 마이페이지 로고
const UserLogo = styled.img`
  position: fixed;
  top: 0.3%;
  right: 7%;
  height: 3rem;
  width: 45px;
`;

// 지갑 연결 로고
const Walletlogo = styled.img`
  position: fixed;
  top: 0.3%;
  right: 3%;
  height: 3rem;
  width: 35px;
`;
// 헤더 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: #8ea8db;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
  position: fixed;
  left: 7%;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: white;
  font-family: "Rajdhani";
`;

// 탐색
const Explore = styled.div`
  position: fixed;
  right: 25%;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  font-family: "Rajdhani";
`;
// 생성
const Create = styled.div`
  position: fixed;
  right: 20%;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  font-family: "Rajdhani";
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 인풋 박스
const Input = styled.input`
  position: fixed;
  left: 15%;
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  width: 50%;
  background: white;
  border: none;
  border-radius: 80px;
  ::placeholder {
    color: lightgray;
  }
`;

const Header = ({ children }) => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <NavLink to="/">
            <WhaleLogo src={whaleImg} />
            <Logo>WHALE</Logo>
          </NavLink>

          <Input type="text" placeholder="Search items, collections" />
          <Explore>Explore</Explore>
          <Create>Create</Create>
          <NavLink to="/mypage">
            <UserLogo src={userImg} />
          </NavLink>

          <Walletlogo src={walletImg} />
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
};

export default Header;
