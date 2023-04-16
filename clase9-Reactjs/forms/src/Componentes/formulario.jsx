import './Card.css';

import { useState } from 'react';

import { Card } from './Card';

const MyForm = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [dni, setDni] = useState('');
    const [edad, setEdad] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [personas, setPersonas] = useState ([]);
     
    const handelSubmit = (e)=> {
        e.preventDefault();
        console.log(nombre);
        console.log(apellido);
        console.log(nacionalidad);
        console.log(dni);
        console.log(edad);
        console.log(descripcion);

        // creacion de un arreglo de personas 'nuevaPersona' que contenga todos los datos "nombre, apellido etc..."
    const nuevaPersona = { nombre: nombre, apellido: apellido, nacionalidad: nacionalidad, dni: dni, edad: edad, descripcion: descripcion };

        // aqui agregamos el arreglo de nuevaPersonas en el setPersonas y lo relacionamos para que se vayan cargando al arreglo 'personas'
        setPersonas([nuevaPersona,...personas]);
        setNombre(''); // aqui setNombre vuelve a vacio una ves se haya hecho click en el boton Enviar
        setApellido(''); // aqui setApellido vuelve a vacio una ves se haya hecho click en el boton Enviar
        setNacionalidad('');
        setDni('');
        setEdad('');
        setDescripcion('');
        console.log(personas);  // muesta en arreglo de personas   
    }

    return (
        
        <> 
            <section className ="form">
                
            <form onSubmit={handelSubmit}>
                <h3>Formulario de Registro de datos Personales</h3>                
                <input className='control' type="text" placeholder='Nombre' value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
                
                <input className='control' type="text" placeholder='Apellido' value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
            
                <input className='control' type="text" placeholder='Nacionalidad' value={nacionalidad} onChange={(e)=>(setNacionalidad(e.target.value))}></input>
            
                <input className='control' type="number" placeholder='DNI' value={dni} onChange={(e)=>(setDni(e.target.value))}></input>
                
                <input className='control' type="number" placeholder='Edad' value={edad} onChange={(e)=>(setEdad(e.target.value))}></input>
                
                <input className='control' type="text" placeholder='Descripcion' value={descripcion} onChange={(e)=>(setDescripcion(e.target.value))}></input>
                
                <button type= "submit" >Enviar</button>
            </form>
            </section>
            
            <section class ="form2">
            {personas.map((persona) => <Card key={persona.nombre} nombre={persona.nombre} apellido={persona.apellido} nacionalidad={persona.nacionalidad} dni={persona.dni} edad={persona.edad} descripcion={persona.descripcion}></Card>)}               
            </section>           
         
                 
        </>
    )
}
export default MyForm;