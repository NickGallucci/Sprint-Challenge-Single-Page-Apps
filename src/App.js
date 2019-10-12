import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components//CharacterCard";
import WelcomePage from "./components/WelcomePage";


//Styles
const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  background: aquamarine;
  width: 100%;
  text-decoration: none;
`;


//App
export default function App() {
  return (
    <main>
      <NavLinks>
        <Links>
          <Link to="/">Home Page</Link>
          <Link to="/CharacterList">Characters</Link>
        </Links>
      </NavLinks>
      <Header />

      {/* Route */}
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
      <Route path="/character-list/" component={CharacterCard} />
      {/* <Route path="/LocationList" component={LocationList} /> */}
    </main>
  );
}