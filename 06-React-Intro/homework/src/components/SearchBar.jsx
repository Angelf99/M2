import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type= 'text' placeholder='Ciudad'></input>
    <button onClick={()=>props.onSearch('Buscando...')}>X</button>
    
  </div>
};