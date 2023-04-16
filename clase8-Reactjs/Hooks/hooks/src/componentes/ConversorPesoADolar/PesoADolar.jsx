import React, { useState } from 'react';

function PesoADolar (){
    const [peso, setPeso] = useState('');

    const convertirADolares = (pesos) => {
        const dolares = pesos / 390;
        return dolares.toFixed(2)
    }

    return (
        <div>
            <h2>Conversor de pesos a dolares</h2>
            <input
            type='number'
            value={peso}
            onChange={(e)=>setPeso(e.target.value)}
            style={{width:'12rem'}}
            />
            <h3>{peso ? `${peso} pesos equivalen a ${convertirADolares(peso)} dolares` : 'Ingrese los pesos a convertir'}</h3>
        </div>
    )
}
export default PesoADolar;