import React, { useState, useEffect } from 'react'; 
 
function App() { 
  const [data, setData] = useState([]); 
 
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, []); 
 
  return ( 
    <div> 
      <h1>Дані:</h1> 
      <ul> 
        {data.map(item => ( 
          <li key={item.id}>{item.title}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;
