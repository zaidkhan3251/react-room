import React, { useState } from 'react';
import './App.css';

function App() {

  let [Temp, setTemp]=useState(22);
  let [isLit, setLit]=useState(true);

  return (
    <div className={`box ${isLit? 'lit' : 'dark'}`}>
      The Room Light is {isLit? "ON": "OFF"}
      <br/>
      <hr/>
      The Current Temperature is:{Temp} celsius
      <br/>
      <button onClick={()=> setTemp(++Temp)}>"+"</button>
      <button onClick={()=> setTemp(--Temp)}>"-"</button>
      <br/>
      <button onClick={()=> setLit(true)}>
        ON
      </button>
      <button onClick={()=> setLit(false)}>
        OFF
      </button>
      
    </div>
  );
}

export default App;
