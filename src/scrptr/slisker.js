import React,{useState} from 'react';
import Vrag from './vrag.png';
import VragDead from './vragdead.png';

export const Sliker = () => {
  const [hp,setHp]= useState(100);

  const scl = () => {
    if (hp > 0){
      setHp(hp-5);
    }
  }

  return(
    <div onClick={scl}>
      {hp}


    </div>
  )
}
