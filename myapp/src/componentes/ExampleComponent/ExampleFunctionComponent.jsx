import React from 'react';

function ExampleFunctionComponent(props){
    return (
        <div>
            <h1>Hola, soy un componente funcional</h1>
            <h4>Mi nombre es {props.name} y tiene {props.edad} y mide {props.altura}</h4>
        </div>
    )
}

export default ExampleFunctionComponent;
