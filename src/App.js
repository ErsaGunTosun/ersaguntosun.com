import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

// Pages 
import Home from './pages/Home.js';
import Journey from './pages/Journey.js';
import TechStack from './pages/TechStack.js';
import Projects from './pages/Projects.js';
import Personel from './pages/Personel.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/tech-stack' element={<TechStack />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/personel' element={<Personel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
