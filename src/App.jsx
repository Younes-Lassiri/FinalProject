import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSec from './components/FirstSec/FirstSec';
import Landing from './components/LandingPage/Landing';
import Menu from './components/Menu/Menu';
import SecondSec from './components/SecondSec/SecondSec';
import ThirdSec from './components/ThirdSec/ThirdSec';
import Collection from './components/FirstSec/collection/Collection';


const App = () => {
  const [tata,setTata] = useState('')
  fetch('http://localhost:3500/products').then((res) => res.json()).then((data) => {
    setTata(data[0].fruit)
  });
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing/>
              <div>
                <Menu />
                <FirstSec />
                <SecondSec tata={tata}/>
              </div>
              <div className='issue'><ThirdSec />
                </div>
              <div><Collection/></div>
            </div>
          }
        />
        <Route path="/haha/*" element={<h1>Not Found</h1>} />
      </Routes>
      <div className='toTop'></div>
    </Router>
  );
};

export default App;
