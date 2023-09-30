import React, { useState } from 'react';
import './App.css';
import Cuadrado from './images/Cuadrado.png';
import imagePairs from './imagePairs.js';


function App() {
  const [pairIndex, setPairIndex] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false); // Estado para mostrar la respuesta



  const changeRandomPair = () => {
    const randomIndex = Math.floor(Math.random() * imagePairs.length);
    setPairIndex(randomIndex);
    setMostrarRespuesta(false);
  };
  const mostrarRespuestaBoton2 = () => {
    setMostrarRespuesta(true);
  };

  const currentPair = imagePairs[pairIndex];

  return (
    <div>
      <div>
        <img src={currentPair.image1} alt="Image 1" className="imagen-pequena" />
      </div>

      <div>
        {/* Mostrar respuesta o cuadrado en blanco según el estado */}
        {mostrarRespuesta ? (
          <img src={currentPair.image2} alt="Imagen 2" className="imagen-pequena" />
        ) : (
          <img src={Cuadrado} alt="Cuadrado en blanco" className="imagen-pequena" />
        )}
      </div>
      <div className="contenedor-botones">
      <button className="boton" onClick={mostrarRespuestaBoton2}>
          Respuesta
        </button>
        <button className="boton" onClick={changeRandomPair}>
          Siguiente
        </button>

      </div>
    </div>
  );
}

export default App;
