import React, { useState, useEffect } from 'react'; 
 
function App() { 
  const [data, setData] = useState([]); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      const json = await response.json(); 
      setData(json); 
    }; 
    fetchData(); 
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
