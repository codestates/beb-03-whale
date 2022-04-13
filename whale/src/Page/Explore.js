import React from "react";
import styled from "styled-components";
import Item from "../Component/Item.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  justify-content: flex-start;
  align-content: space-around;
`;

const ItemCount = styled.div`
  margin-left: 25px;
  font-size: large;
  color: gray;
`;

function Explore({ nfts }) {
  console.log(nfts);
  return (
    <ViewItems>
      <ItemCount> {nfts.length} Items</ItemCount>

      <ItemContainer>
        {nfts &&
          nfts.map((item) => {
            return (
              <Item
                imgURL={item.properties.image.description}
                name={item.properties.name.description}
                key={item.tokenId}
                link="/buy"
                isLoading={false}
                price="0.01"
              />
            );
          })}
        <Item
          imgURL=""
          name="Img test"
          price="0.221"
          link="/"
          isLoading={true}
        />
        <Item imgURL="" name="Img test" price="0.1" link="/" isLoading={true} />
        <Item imgURL="" name="Img test" price="0.1" link="/" isLoading={true} />
        <Item imgURL="" name="Img test" price="0.1" link="/" isLoading={true} />
        <Item imgURL="" name="Img test" price="0.1" link="/" isLoading={true} />
        <Item imgURL="" name="Img test" price="0.1" link="/" isLoading={true} />
      </ItemContainer>
    </ViewItems>
  );
}

export default Explore;
