import './App.css';

import PesoADolar from './componentes/ConversorPesoADolar/PesoADolar';
import Contador from './componentes/EjercicioUseEffect/Ejercicio';
import ExampleClassCounter from './componentes/ExampleClassCounter';
import CelsiusAFarh from './componentes/Temperatura/CentigradosAFahrenheit';
import { UserList } from './componentes/UseEffect/UserList';

function App() {
  return (
    <div className="App">
      <ExampleClassCounter/>
      <PesoADolar />
      <UserList />
      <Contador />
      <CelsiusAFarh />
    </div>
  );
}

export default App;
