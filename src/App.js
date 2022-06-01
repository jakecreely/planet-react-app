import './styles/style.css';
import './components/NavBar'
import React, { useEffect, useState } from 'react';
import 'react-dom';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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


// Set the data from json
// Create function which finds specified planet
// Pass that to the navbar
// Navbar calls function depending on chosen planet
// This data is then passed to the main component

  return (
    <Router>
    <div className="app">
      <NavBar /> 
      <Routes>
        {/* <Route path='/' exact render={() => <MainContainer />}/> */}
        <Route path='/:name' element={<MainContainer />}/>
      </Routes>
    </div>
    </ Router>
  );
}

export default App;
