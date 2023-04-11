import './App.css';

import { useState } from 'react';

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks +1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
        <h3>Contador by Darius Lopeblack</h3>
        <div className='contenedor-contador'>
          <Contador numClicks={numClicks} />
          <Boton 
             texto ='Incrementar'
             esBotonDeClick={true}
             manejarClick={manejarClick} />
          <Boton
              texto='Reiniciar'
              esBotonDeClick={false}
              manejarClick={reiniciarContador} />
        </div>  
    </div>

  );
}

export default App;
