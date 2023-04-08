import '../hojasDeEstilos/Testimonios.css';

import React from 'react';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
        <img className = 'imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Marcos'/>

        <div className='contenedor-texto-testimonio'>
            <p className='nombre-pais'>{props.nombre} en {props.pais} </p>
            <p className='cargo'>{props.cargo} en {props.empresa} </p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div>
  );  
}
export default Testimonio; 
