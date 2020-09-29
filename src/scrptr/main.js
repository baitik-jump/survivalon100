import React,{useState} from 'react';
import {Heder} from './hedr';
import jn from './jn.jpg';
import dedN from './dedN.jpg';

export const Main = (props) => {
  const [state,setState] = useState(100);



    const hendleM = () =>{
      setState(state -1);

    }

  return(
    <div>

      <div onClick={hendleM}>
      Click

        {  state < 0 ? (
            <img src={dedN}>
          ) : (
            <img src={jn}>
          )
        }

        {state}
      </div>
    </div>
  )
}
