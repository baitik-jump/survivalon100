import React from 'react';
import C1 from './b1.jpg';
import C2 from './6.jpg';
import C3 from './lojki.jpg';
import C4 from './miski.jpg';
import C5 from './b3 (1).jpg';
import C6 from './b3.jpg';
import './tovari.css'

export const Tovari = () => {
return(
  <div>
        <div className="bigblock">
          <h1 className="zagolovok1">Товары</h1>
             <div className="block">
               <div className="photo">
                <img src={C1} className="tovor"/>
               </div>
                <div className="text">
                  <p>Набор столовых приборов  1000₽</p>
                </div>
                </div>
              <div className="block">
                  <div className="photo">
                    <img src={C2} className="tovor"/>
               </div>
                <div className="text">
                  <p>Набор кухонных инструментов 900₽</p>
                </div>

                 </div>


              <div className="block">
                   <div className="photo">
                <img src={C3} className="tovor"/>
               </div>
                <div className="text">
                  <p>Набор кухонных инструментов 1000₽</p>
                </div>

               </div>




                <div className="block">
                   <div className="photo">
                <img src={C4} className="tovor"/>
               </div>
                <div className="text">
                  <p>Набор мисок 1500₽</p>
                </div>
                </div>

                <div className="block">
                    <div className="photo">
                <img src={C5} className="tovor"/>
               </div>
                <div className="text">
                  <p>Тёрка спиральная 1500₽</p>
                </div>
                </div>

                <div className="block">
                    <div className="photo">
                <img src={C6} className="tovor"/>
               </div>
                <div className="text">
                  <p>Пресс для гамбургера 1000₽</p>
                </div>
                </div>
             </div>


        </div>


)}
