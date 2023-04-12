import React, {
  useEffect,
  useState,
} from 'react';

const Contador = () => {
    const [count,setCount] = useState(0);
    const [message, setMessage] = useState('')

    
    useEffect(()=>{
        if (count===0){
           setMessage("Has click en el boton para comenzar a contar");
           } else {
            setMessage("El contador está en:" `${count}`)
           } 
                   
    },)

    const Incrementar = () =>{
        setCount(count +1);
    }


    return (
        <div>
        <h1>Contador</h1>
        <h3>{message}</h3>
        <button onClick={Incrementar}> Incrementar</button>
        </div>
    )
}
export default Contador;