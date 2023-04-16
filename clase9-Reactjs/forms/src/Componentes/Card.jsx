import './Card.css';

export const Card = (props) => {

    return (
        <>
            <div className='tarjeta'>
                <h3>Nombre: {props.nombre}</h3>
                <h3>Apellido: {props.apellido}</h3>
                <h3>Nacionalidad: {props.nacionalidad}</h3>
                <h3>DNI: {props.dni}</h3>
                <h3>Edad: {props.edad}</h3>
                <p>Ocupación: {props.descripcion}</p>
            </div>        
               
        </>
    )

}