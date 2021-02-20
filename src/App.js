import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  const [ characters, setCharacters ] = useState([]);
  useEffect(()=>{
      axios.get('http://swapi.dev/api/people/')
      .then((res)=>{
          console.log(res.data.results)
          setCharacters(res.data.results)
      })
      .catch((err)=>{
          console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={characters}/>
      
    </div>
  );
}

export default App;