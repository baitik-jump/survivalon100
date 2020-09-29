import React from 'react';
import Pirog from "./пирог.jpg";
import './stylep.css';

export const Pirogy = (props) =>{
  return(
  <div  onClick={() => props.onClick(1)}>
    <div className="block3">
        <div className="recept2">
          <a className="receptsecond" href="revani.html">  Ревани</a>
        </div>
          <img src={Pirog} className="pirog"/>
        </div>
    </div>
  )
}
