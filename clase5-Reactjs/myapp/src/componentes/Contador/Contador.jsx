import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    
    function sumarAlCarrito(){
        setContador(contador +1);
    }
    function restarAlCarrito(){
        setContador(contador -1);
    }

    return (
        <div>
            <h3>Carrito de compras: {contador}</h3>
            <button onClick={sumarAlCarrito}>Agregar al carrito (1)</button>
            <button onClick={restarAlCarrito}>Quitar del carrito (-1)</button>

        </div>
    )
}
export default Contador;
