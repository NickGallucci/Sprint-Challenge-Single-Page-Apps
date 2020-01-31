import React from "react";
import styled from "styled-components";
//STYLES
const HeaderContainer = styled.div`
  text-align: center;
`;

//header
export default function Header() {
  return (
    <HeaderContainer>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
    </HeaderContainer>
  );
}