import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Todolist } from './features/todolist/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
	  <main>
		<Todolist/>
	  </main>
    </div>
  )
}

export default App;
