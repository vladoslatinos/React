import React, { useContext } from 'react';
import { MyContext } from './App';
import './App.css';

function ComponentC() {
const data = useContext(MyContext);

return (
<div className="component_c">
<h4>Component C</h4>
<p>Data from App: {data}</p>
</div>
);
}

export default ComponentC;
  