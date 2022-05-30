import './styles/style.css';
import './components/NavBar'
import React from 'react';
import 'react-dom';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
