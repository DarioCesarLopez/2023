import React, { useState } from 'react';

function CelsiusAFarh (){
    const [gradosC, setGradosC] = useState('');

    const convertirAFarhenheit = (gradosC) => {
        const fahreheit = gradosC * 9/5 + 32;
        return fahreheit.toFixed(1)
    }

    return (
        <div>
            <h2>Conversor de grados Celsius a Fahrenheit</h2>
            <input
            type='number'
            value={gradosC}
            onChange={(e)=>setGradosC(e.target.value)}
            style={{width:'5rem'}}
            />
            <h3>{gradosC ? `${gradosC}º Celsius equivalen a ${convertirAFarhenheit(gradosC)}º Fahrenheit` : 'Ingrese la temperatura a convertir'}</h3>
        </div>
    )
}
export default CelsiusAFarh;