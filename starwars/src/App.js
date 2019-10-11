import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Nav from './components/Nav'
import CharacterCard from './components/CharacterCard';

const MainContent = styled.section`
width: 100%;
margin: 0 auto;
height: 100vh;
`;

const Button = styled.button` 
width: 100px;
height: 30px;
margin: 1rem;
border: 1px solid black;
border-radius: 10px;
font-size: 1rem;
font-weight: 600;
opacity: 0.8;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)

      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => {
        console.log(err, 'Theres been a disturbance in the force');
      })

  }, [page]);
  console.log(page);

  return (
    <>
      <Nav />
      <MainContent className="App">

        <Button className="next" onClick={() => setPage(page + 1)}>Next</Button>

        <Button className="previous" onClick={() => setPage(page - 1)}>Prev</Button>

        {data.map(character => {
          return <CharacterCard name={character.name} eye_color={character.eye_color} gender={character.gender} birth_year={character.birth_year} url={character.url} />
        }
        )}
      </MainContent>
    </>
  );
}

export default App;
