import './App.css';

import Testimonio from './componentes/Testimonios';

function App() {
  return (
    <div className="App">
      <h2>Esto es lo que dicen nuestros alumnos sobre Developer Full Stack Web:</h2>
      <div className='contenedor-principal'>
        <Testimonio
          nombre='Marc Wang'
          pais='Singapur'
          imagen='marc'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='No me da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>
        <Testimonio
          nombre='Meli Bostian'
          pais=' Suecia'
          imagen='meli'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Developer Full Stack Web fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>    
        <Testimonio
          nombre='Fer Powel '
          pais='Inglaterra'
          imagen='fer'
          cargo='Ingeniero de Software'
          empresa='Globant'
          testimonio='Me encantó aprender JavaScript. He tomado muchos cursos, pero el curso de Developer Full Stack Web fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Globant.'/>
     </div>  
    </div>
  );
}

export default App;

