import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./Card"

const Countries = () => {
    // creation de la data et pour la modifier avec SetData stocké dans un tableau vide useState
    const [data, setData] = useState([]);
    const [hello, setHello] = useState("Hello les amis");
    const [rangeValue, setRangeValue] = useState(36)
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const [selectedRadio, setSelectedRadio] = useState("");

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, [])

    return (
        <div className='countries'>
            {/* <h1>Countries</h1> */}
            <ul className='radio-container'>
                <input type='range' min="1" max="250"
                    defaultValue={rangeValue}
                    //    onChange={(evt) => console.log(evt.target.value)}
                    onChange={(evt) => setRangeValue(evt.target.value)}
                />
                {radios.map((continent) => (
                    <li>
                        <input type="radio" 
                        id={continent} 
                        name="continentRadio" 
                        checked={continent === selectedRadio}
                        onChange={evt => setSelectedRadio(evt.target.id)}/>
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {/* // si selectedRadio est true, alors tu affiche le boutton */}
            {selectedRadio && 
            (<button onClick={()=> setSelectedRadio("")}
            >Annuler la recherche</button>)}
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a,b)=> (b.population-a.population))
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            // On envoie un props qui s'apl country dans lequel on injecte le country qui contient 250 pays
                            <Card key={index} gountry={country} />)
                            //    <li key={index}><img src={country.flags.png} />
                            //    {/* {country.flag.png} */}</li>))
                        )
                }
            </ul>
        </div>
    );
};

export default Countries;