// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const CharacterContainer=styled.div`
    margin: auto;
    padding: 10px;
    width: 25%;
`
const CharacterDiv = styled.div`
    opacity: 1;
    color: black;
    margin: 1rem auto;
    border: 1px solid black;
    border-radius: 3px;
    padding: 10px;
    background-color: white;
    text-align: center;
`
function Character(props){
    const { character } = props
    return (
        <CharacterContainer>
            {character.map((character)=>{
             return <CharacterDiv>
                <h2>{character.name}</h2>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Color: {character.skin_color}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                 </CharacterDiv>;
             })}
        </CharacterContainer>
    )
}
export default Character
