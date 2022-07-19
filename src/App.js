import './styles/style.css';
import './components/NavBar'
import React, { useEffect, useState } from 'react';
import 'react-dom';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Test from './components/Test';

import {HashRouter, Route, Routes} from 'react-router-dom';

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
    <HashRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<Test />}/>
        <Route path='/earth' element={<MainContainer name='earth'/>}/>
        <Route path='/jupiter' element={<MainContainer name='jupiter'/>}/>
        <Route path='/mars' element={<MainContainer name='mars'/>}/>
        <Route path='/mercury' element={<MainContainer name='mercury'/>}/>
        <Route path='/neptune' element={<MainContainer name='neptune'/>}/>
        <Route path='/saturn' element={<MainContainer name='saturn'/>}/>
        <Route path='/uranus' element={<MainContainer name='uranus'/>}/>
        <Route path='/venus' element={<MainContainer name='venus'/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
