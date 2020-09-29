import React,{useState} from 'react';
import {Navigatin} from './Navigation';
import {Block1} from './block1';
import {Kontakt} from './kontakt';
import './stylep.css';
import {Tovari} from './tovar';
import {Akcii} from './akcii';
import {Recept} from './recept';



function App() {
  const [activePage,setActivePage] = useState(1);


  return (
    <div className="main">
      <Navigatin onClick={setActivePage}/>
      {activePage === 1 && <Block1/>}
      {activePage === 2 && <Recept/>}
      {activePage === 3 && <Akcii/>}
      {activePage === 4 && <Tovari/>}
      <Kontakt/>


    </div>

  );
}

export default App;
