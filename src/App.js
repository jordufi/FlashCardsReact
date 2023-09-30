import Image1 from './images/Do.png';
import Image2 from './images/Fa.png';
import Image3 from './images/Mi.png';
import Image4 from './images/R_Do.png';
import Image5 from './images/R_Fa.png';
import Image6 from './images/R_Mi.png';
import Cuadrado from './images/Cuadrado.png';
import './App.css';

function App() {
  return (
    <div>
    <div>
      <img src={Image1} alt="Imagen 1" className="imagen-pequena" />
    </div>

    <div>
    <img src={Image1} alt="Imagen 1" className="imagen-pequena" />
  </div>
  <div className="contenedor-botones">
        <button className="boton">Botón 1</button>
        <button className="boton">Botón 2</button>
      </div>
  </div>
  );
}

export default App;
