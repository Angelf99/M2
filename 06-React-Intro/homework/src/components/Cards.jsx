import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
    {props.cities && props.cities.map(ciudades =>// validador
      (<Card
        key={ciudades.id}
        max={ciudades.main.temp_max}
        min={ciudades.main.temp_min}
        name={ciudades.name}
        img={ciudades.weather[0].icon}
        onClose={() => alert(ciudades.name)}
        />)
      )}
  </div>
};