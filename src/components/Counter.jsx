import React from "react";
import '../stylesheets/Counter.css'

function Counter( props ) {
  return <div className={`containerCounter ${props.color}`}>{props.numeroDeClics}</div>;
}

export default Counter;
