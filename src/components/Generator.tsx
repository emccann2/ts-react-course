import styled from "styled-components";
import { useState } from 'react';

export const Generator = () => {
    let teamNames = ['Emma', 'Jamie', 'Eamonn', 'David K', 'David McC', 'Rebecca', 'Chris', 'Donall', 'Paul', 'Alan', 'Dean', 'Caoimhe', 'Oran', 'Danielle', 'Brian', 'Jason'];
    const [name, setName] = useState<string | null>("")
    function clickMe() {
        let randomValue = teamNames[Math.floor(Math.random() * teamNames.length)];
        teamNames = teamNames.filter(i => i !== randomValue)
        console.log(teamNames)
        setName(randomValue)
    }

    const Button = styled.button`
        background-color: black;
        color: white;
        font-size: 20px;
        padding: 10px 60px;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
        `;


    return (
        <div>
            <h1>Random Name Generator</h1>
            <h3>Click the button below to generate a random name</h3>
        <Button onClick={clickMe}>
            Generate
        </Button>
        <p></p>
        {name}
        </div>
    );
};