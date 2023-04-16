import { useState } from 'react';

import { Card } from './Card';

const MyForm = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const [personas, setPersonas] = useState ([]);
     
    const handelSubmit = (e)=> {
        e.preventDefault();
        console.log(nombre);
        console.log(apellido);

        // creacion de un arreglo de personas 'nuevaPersona' que contenga ambos datos "nombre y apellido"
    const nuevaPersona = { nombre: nombre, apellido: apellido };

        // aqui agregamos el arreglo de nuevaPersonas en el setPersonas y lo relacionamos para que se vayan cargando al arreglo 'personas'
        setPersonas([nuevaPersona,...personas]);
        setNombre(''); // aqui setNombre vuelve a vacio una ves se haya hecho click en el boton Enviar
        setApellido(''); // aqui setApellido vuelve a vacio una ves se haya hecho click en el boton Enviar
         console.log(personas);  // muesta en arreglo de personas   
    }

    return (
        
        <> 
            <form onSubmit={handelSubmit}>
                <label > Nombre 
                    <input type="text" value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
                </label>

                <label> Apellido 
                    <input type="text" value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
                </label>
               
               <button type= "submit" >Enviar</button>

            </form>

            <div className='tarjeta'>
            {personas.map((persona) => <Card nombre={persona.nombre} apellido={persona.apellido}></Card>)}               
            </div>
                 
        </>
    )
}
export default MyForm;