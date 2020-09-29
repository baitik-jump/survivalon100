import React,{useState} from 'react';
import {Revani} from './revani';
import {Block1} from './block1';
import './modulab.css';
import {Butter} from './buter';

export const ModulAB = (props) => {
  return(
    <div>
      {props.activeBlock === 1 && <Butter/>}
      {props.activeBlock === 2 && <Revani/>}
      {props.activeBlock === 3 && <div/>}
    </div>
  )
}
