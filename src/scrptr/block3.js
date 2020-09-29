import React,{useState} from 'react';
import Pirog from './пирог.jpg';


export const Block3 = () =>{
  return(
    <div class="block3">
      <div class="recept2">
        <a class="receptsecond" href="">  Ревани</a>
      </div>
      <img src={Pirog} class="pirog"/>
    </div>
  )
}
