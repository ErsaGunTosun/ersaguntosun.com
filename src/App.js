import React from 'react';

// Pages 
import Home from './pages/Home.js';
import Journey from './pages/Journey.js';


function App() {
  return (
    <div className="container bg-primary h-100 w-100 d-flex flex-fill">
      <div className='row flex-fill'>
        <div className='col'></div>
       
        <Journey /> 

        <div className='col'></div>
      </div>
    </div >
  );
}

export default App;
