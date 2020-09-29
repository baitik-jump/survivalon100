import React from 'react';
import './revani.css';
import Kdkd from './kdkd.jpg';
import Jej from "./jej.jpg";
import Hh from './hh.jpg';
import Jj from './jj.jpg';
import Anota from './Аннотация 2020-09-28 163715.jpg'



export const Revani = (props) => {
  return(
  <div>

    <div className="bigblock"/>
        <img src={Anota}/>
        <img src={Kdkd}/>
        <img src={Jej}/>
        <img src={Hh}/>
        <img src={Jj}/>
    </div>

  )
}
