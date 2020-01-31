import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  text-align: center;
  border: solid 1px black;
  color: black;
  border-radius: 20px;
  background: aquamarine;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
`;

const CardMainContainer = styled.div`
  width: 33%;
  margin: 2rem auto;
`;

export default function CharacterCard({ name, image, origin }) {
  // console.log("is this card?", props);

  return (
    <CardMainContainer>
      <CardContainer>
        <p>Name: {name} </p>
        <p>Origin: {origin} </p>
        <img src={image} />
      </CardContainer>
    </CardMainContainer>
  );
}