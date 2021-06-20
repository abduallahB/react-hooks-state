import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return(
   <button onClick={increment}>I have been clicked {count} times</button>
  // <button onClik={ () => setCount(count + 1)}
   );
}



const decCounter = () =>{
  
  const [decCount, setDecCount] = useState(false);
  function decrement(){
    setDecCount(decCount - 1 )
  }
  return(
    <button onClick={decrement}>{decCount} </button>
  )
}



export default Counter;

