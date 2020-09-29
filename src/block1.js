import React,{useState} from 'react';
import Buter from './бутер.jpg';
import Pirog from './пирог.jpg';
import Pasta from './паста.jpg';
import {ModulAB} from './modulab';

export const Block1 = (props) =>{

  const [activeBlock, setActivBlock] = useState(0);

  return(
    <div >


      <div className="block2" onClick={() => setActivBlock(1)}>
        <div className="recept1" >
          <a className="receptfirst" href="sendvich.html">  Утренний сэндвич</a>
        </div>
        <img src={Buter} className="omlet"/>
      </div>

      <div className="block3" onClick={() => setActivBlock(2)}>
        <div className="recept2">
          <a className="receptsecond" href="revani.html">  Ревани</a>
        </div>
        <img src={Pirog} className="pirog"/>
      </div>

      <div className="block4" onClick={() => setActivBlock(3)}>
        <div className="recept3">
          <a className="receptthird" href="">  Лимонная паста</a>
        </div>
        <img src={Pasta} className="pasta"/>
      </div>
      { activeBlock && <ModulAB activeBlock={activeBlock}/> }


    </div>

  )
}
