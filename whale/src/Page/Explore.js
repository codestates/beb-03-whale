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

function Explore({ nfts, setItem }) {
  function handleClick(e) {
    console.log(e.target);
  }
  console.log(nfts);
  return (
    <ViewItems>
      <ItemCount> {nfts.length} Items</ItemCount>
      {/* {
		"token_id" : "FILL_ME",
		"owner" : "FILL_ME",
		"name" : "FILL_ME",
		"description" : "FILL_ME",
		"image_link" : "FILL_ME",
		"price" : "FILL_ME",
		"room_number" : "FILL_ME"
	}, */}
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
