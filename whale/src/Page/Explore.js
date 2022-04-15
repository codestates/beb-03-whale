import React from "react";
import styled from "styled-components";
import Item from "../Component/Item.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; ㅋㅋ

const ViewItems = styled.div`
  margin-top: 5%;
  margin-left: 3%;
  margin-right: 3%;
  z-index: 50;
`;

const ItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
`;

const ItemCount = styled.div`
  margin-left: 25px;
  font-size: large;
  color: gray;
`;

function Explore({ nfts, setItem }) {
  function handleClick(e) {
    console.log(e.target);
  }
  return (
    <ViewItems>
      <ItemCount> {nfts.length} Items</ItemCount>
      <ItemContainer>
        {nfts &&
          nfts.map((item) => {
            return (
              <Item
                imgURL={item.image_link}
                name={item.name}
                key={item.token_id}
                link={`/buy/${item.token_id}`}
                isLoading={false}
                price={item.price}
                onClick={handleClick}
              />
            );
          })}
      </ItemContainer>
    </ViewItems>
  );
}

export default Explore;
