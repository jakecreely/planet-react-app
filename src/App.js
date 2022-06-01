import './styles/style.css';
import './components/NavBar'
import React, { useEffect, useState } from 'react';
import 'react-dom';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

function App() {

  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch('data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPlanetData(data)
    })
  }, [])

  const extractPlanet = (planetName) => {
    data = planetData.filter(item => {
      return item.name = planetName
    })
    console.log(data)
    return data
  }

// Set the data from json
// Create function which finds specified planet
// Pass that to the navbar
// Navbar calls function depending on chosen planet
// This data is then passed to the main component

  return (
    <div className="app">
      <NavBar /> 
      <MainContainer />
    </div>
  );
}

export default App;
