import React from 'react';

const Card = ({gountry}) => {
  
    return (
        <li className='card'>
            <img src={gountry.flags.png} 
                 alt={"drapeau" + gountry.translations.fra.common}
            />
            <div className='infos'>
                <h2>{gountry.translations.fra.common}</h2>
                <h4>{gountry.capital}</h4>
                <p>Popu. {gountry.population.toLocaleString()}</p>
            </div>
        </li>

    );
};

export default Card;