import '../hojas-de-estilo/Boton.css';

import React from 'react';

function Boton ({ texto, esBotonDeClick, manejarClick }) {
    return (
        <button
            className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
            onClick={ manejarClick }>
            {texto}
        </button>
    );
}

export default Boton;