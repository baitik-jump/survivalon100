import React from 'react';
import './silkarecept.css';
import Hyinya1 from "./5f6485d7aeb37-1536x1024.jpeg";
import Hyinya2 from "./5f647e5383634-1536x1024.jpeg";
import Hyinya3 from "./5f6cef3cd91c4-1536x1024.jpeg";
import Hyinya4 from "./5f647606210e6-1536x1024.jpeg";
import Hyinya5 from "./5f647a4738e5a-1536x1024.jpeg";
import Hyinya6 from "./5f6d0dc575429-1536x1024.jpeg";



export const Recept = () =>{
  return(
    <div>
            <div className="bigblock">
              <h1 className="zagolovok1">Наши рецепты</h1>
            </div>

              <div className="block">
               <div className="recept" >
                  <img src={Hyinya1} class="recets"/>
              </div>
                 <div className="text">
                      <a href="revani.html" class="recepts">Ревани</a>
                    </div>
                </div>

      <div class="block">
        <div classNames="recept">
         <img src={Hyinya2} className="recets"/>
        </div>
          <div className="text">
              <a href="sendvich.html" className="recepts">Утренний сэндвич</a>
            </div>
      </div>

      <div className="block">
        <div className="recept">
          <img src={Hyinya3} class="recets"/>
        </div>
        <div className="text">
              <a href="" class="recepts">Гирос</a>
        </div>
      </div>

      <div className="block">
        <div className="recept">
          <img src={Hyinya4} class="recets"/>
      </div>
         <div className="text">
            <a href="" className="recepts">Маршмеллоу</a>
          </div>
           </div>

               <div className="block">
              <div className="recept" >
               <img src={Hyinya5} className="recets"/>
             </div>
                <div className="text">
                      <a href="" className="recepts">Лимонная паста</a>
                    </div>

              </div>

            <div class="block">
              <div class="recept" >
               <img src={Hyinya6} className="recets"/>
             </div>
               <div className="text">
                      <a href="" className="recepts">Индейка</a>
                </div>
          </div>
    </div>
  )
}
