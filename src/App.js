import './styles/style.css';
import './components/NavBar'
import React from 'react';
import 'react-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
    </div>
  );
}

export default App;
