import React, { createContext, useState } from 'react';
import ComponentA from './ComponentA';
import './App.css';

export const MyContext = createContext();

function App() {
  const data = useState('Hello from App');

return (
<div className="App">
<MyContext.Provider value={data}>
<ComponentA />
</MyContext.Provider>
</div>
);
}

export default App;
