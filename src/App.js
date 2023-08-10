import React from 'react';

// Pages 
import Home from './pages/Home.js';
import Journey from './pages/Journey.js';
import TechStack from './pages/TechStack.js';
import Projects from './pages/Projects.js';
import Personel from './pages/Personel.js';


function App() {
  return (
    <div className="container h-100 w-100 d-flex flex-fill">
      <div className='row flex-fill'>
        <div className='col'></div>
        
        <Personel />

        <div className='col'></div>
      </div>
    </div >
  );
}

export default App;
