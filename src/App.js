import "./App.css";
import Counter from "./components/Counter.jsx";
import Boton from "./components/Boton.jsx";
import { useState } from "react";

function App() {
  const [numDeClicsRed, setNumClicsRed] = useState(0);
  const [numDeClicsBlue, setNumClicsBlue] = useState(0);

  const sumarClicRed = () => {
    setNumClicsRed(numDeClicsRed + 1);
  };
  const restarClicRed = () => {
    if (numDeClicsRed < 1) {
      setNumClicsRed(0)
    }else {
      setNumClicsRed(numDeClicsRed - 1);
    }
  };
  const reiniciarContador = () => {
    setNumClicsRed(0);
    setNumClicsBlue(0);
  };
  const sumarClicBlue = () => {
    setNumClicsBlue(numDeClicsBlue + 1);
  };
  const restarClicBlue = () => {
    if (numDeClicsBlue < 1) {
      setNumClicsBlue(0)
    }else {
      setNumClicsBlue(numDeClicsBlue - 1);
    }
  };

  return (
    <div className="App">
      <Counter color="color-1" numeroDeClics={numDeClicsRed} />
      <div className="container-buttons">
        <div className="container-button-team">
          <Boton text="+1" colorBoton="colorBoton-1" manejarClic={sumarClicRed}/>
          <Boton text="-1" colorBoton="colorBoton-1" manejarClic={restarClicRed}/>
        </div>

        <Boton text="Reset" colorBoton="colorBoton-3" manejarClic={reiniciarContador}/>

        <div className="container-button-team">
          <Boton text="+1" colorBoton="colorBoton-2" manejarClic={sumarClicBlue}/>
          <Boton text="-1" colorBoton="colorBoton-2" manejarClic={restarClicBlue}/>
        </div>
      </div>
      <Counter color="color-2" numeroDeClics={numDeClicsBlue} />
    </div>
  );
}

export default App;
