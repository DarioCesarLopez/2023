import {
  useEffect,
  useState,
} from 'react';

const Hora = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect ( ()=> {
        let tiempo;
        
            if(visible) {
                setInterval( () => {
            setHora(new Date().toLocaleTimeString())
        },1000)}
        else {
            clearInterval(tiempo);
        }
    },[hora])
    
    return (
        <>
        {visible ? <h1>Hora: {hora}</h1> : <h1>Cargando...</h1>}
        <button onClick = {()=>setVisible(true)}>START</button>
        <button onClick = {()=>setVisible(false)}>STOP</button>
        </>
    );
}

export default Hora;