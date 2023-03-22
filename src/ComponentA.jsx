import React from 'react';
import ComponentB from './ComponentB';
import './App.css';
function ComponentA() {
return (
<div className="component_a">
<h2>Component A</h2>
<ComponentB />
</div>
);
}

export default ComponentA;
