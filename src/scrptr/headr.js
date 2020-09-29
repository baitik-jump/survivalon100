import React,{useState} from 'react';
import Dhph from './дщпщ.jpg';


export const Headr = () =>{
return(
<div class="head">

  <div class="otstup">
      <a href="" class="silka">Войти</a>
      <a href="" class="silka">Товары</a>
      <a href="" class="silka">Акции</a>
      <a href="recepti.html" class="silka">Рецепты</a>
 </div>

  <div class="logo">
    <img src={Dhph} class="logophoto"/>
    </div>
</div>
)
}
