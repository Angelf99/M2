import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
  const [cities,setCities]= useState([]);
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b'
  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(respuestaWeb=> respuestaWeb.json()).then(objJson=>{
      if (objJson !== undefined){
        const city = {
          min: Math.round(objJson.main.temp_min),
          max: Math.round(objJson.main.temp_max),
          img: objJson.weather[0].icon,
          id: objJson.id,
          wind: objJson.wind.speed,
          temp: objJson.main.temp,
          name: objJson.name,
          weather: objJson.weather[0].main,
          clouds: objJson.clouds.all,
          latitud: objJson.coord.lat,
          longitud: objJson.coord.lon
        };
        setCities (oldCities=> [...oldCities,city]);//nuevo arreglo mas city
      } else alert('Ciudad no encontrada');
    })
  }
  function onClose(id){
    setCities(oldCities=>oldCities.filter(c=> c.id !==id));
  }

  return (
    <div className="App">
      
      <h1>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
      </h1>
    </div>
  );
}
