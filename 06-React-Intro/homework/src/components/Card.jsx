import React from 'react';
import Style from '../styles/Card.module.css';


export default function Card(props) {
  // acá va tu código
  return <div>
    <button onClick={props.onClose} className={`$si.btn $si.btn1`} >X</button>
    <h2 >{props.name}</h2>
    <h3>Temperatura minima</h3>
    <p>{props.min}</p>
    <h3>Temperatura maxima</h3>
    <p>{props.max}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='no hay img'   />
  </div>
};