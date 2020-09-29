import React,{useState} from 'react';
import Logos from './logos.jpg';
import './stylep.css';


export const Navigatin = (props) => {
  return(
  <div class="head">
    <div className="otstup">
        <div  onClick={() => props.onClick(4)} className="silka">Товары</div>
        <div  onClick={() => props.onClick(3)} className="silka">Акции</div>
        <div  onClick={() => props.onClick(2)} className="silka">Рецепты</div>
        <div  onClick={() => props.onClick(1)} className="silka">Главная</div>
      </div>
      <div class="logo">
        <img src={Logos} className="logophoto"/>
      </div>
    </div>
  )
}
