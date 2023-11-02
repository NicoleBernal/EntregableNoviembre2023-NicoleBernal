//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react'
import Formulario from './Formulario' 
function Card(props) {
  return (
    <div>
      <p>Genero Musical: {props.genero}</p>
      <p>Album Musical: {props.album}</p>
      <p>Artista: {props.artista}</p>
      
    </div>
  );
}

export default Card;
