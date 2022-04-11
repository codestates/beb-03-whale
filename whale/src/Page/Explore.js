import React from "react";
import styled from "styled-components";
import Item from "../Component/Item.js";
import { dummyItems } from "../static/dummyData";

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

function Explore() {
  return (
    <ViewItems>
      <ItemCount> 300 Items</ItemCount>
      <ItemContainer>
        {dummyItems &&
          dummyItems.map((item) => {
            return (
              <Item
                imgURL={item.img}
                name={item.itemname}
                id={item.id}
                link="/"
                isLoading={false}
                price={item.price}
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
