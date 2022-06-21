import React from 'react';
import Style from '../styles/Card.module.css';


export default function Card(props) {
  // acá va tu código
  return <div className={Style.card}>
    <button onClick={props.onClose} className={Style.btn} >X</button>
    <h2 >{props.name}</h2>
    <div className={Style.div}>
    <h3>Temperatura minima</h3>
    <p>{props.min}</p>
    <h3>Temperatura maxima</h3>
    <p>{props.max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='no hay img'   />
  </div>
};