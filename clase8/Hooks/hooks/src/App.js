import './App.css';

import PesoADolar from './componentes/ConversorPesoADolar/PesoADolar';
import Contador from './componentes/EjercicioUseEffect/Ejercicio';
import ExampleClassCounter from './componentes/ExampleClassCounter';
import { UserList } from './componentes/UseEffect/UserList';

function App() {
  return (
    <div className="App">
      <ExampleClassCounter/>
      <PesoADolar />
      <UserList />
      <Contador />
    </div>
  );
}

export default App;
