import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 1rem;
 margin: 5% auto;
 width: 25%;
 height: 300px;
 background-color: white;
 opacity: 0.7;
 border: 1px solid black;
 border-radius: 10px;
`;

const H1 = styled.h1`
font-size: 2.5rem;
font-weight: 400;
`;

const H3 = styled.h3`
font-size: 1.5rem;
`;


function CharacterCard(props) {
    return (
        <Card key={props.url}>
            <H1>{props.name}</H1>
            <H3>{props.eye_color}</H3>
            <H3>{props.gender}</H3>
            <H3>{props.birth_year}</H3>
        </Card>
    )
}

export default CharacterCard