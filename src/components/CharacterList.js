import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

// Styles
const MainContainer = styled.div`
  text-align: center;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Whoah", error);
      });
  }, [search]);

  // Search
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredCharacters = () => {
    characters.filter(character => {
      character.name.toLowerCase().includes(search.toLowerCase());
    });
  };
  return (
    <MainContainer>
      <section>
        <h2>CHARACTERS</h2>
        <SearchForm characters={characters} />
        <SearchForm
          placeholder="search characters"
          handleChange={handleChange}
        />
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        <CharacterCard search={filteredCharacters} />
      </section>
    </MainContainer>
  );
}