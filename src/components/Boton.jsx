import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  return <button className={`Boton ${props.colorBoton}`} onClick={props.manejarClic}>{props.text}</button>;
}

export default Boton;
