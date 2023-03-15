
import React, { useState } from 'react'; 
import Button from './Button';


function App() { 
  const [count, setCount] = useState(0); 
 
  function incrementCount() { 
    setCount(count + 1); 
  } 
 
  function decrementCount() { 
    setCount(count - 1); 
  } 
 
  return ( 
    <div> 
      <h1>Count: {count}</h1> 
      <Button onClick={incrementCount}>Increment</Button> 
      <Button onClick={decrementCount}>Decrement</Button> 
    </div> 
  ); 
} 
 
export default App;
