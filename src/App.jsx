import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSec from './components/FirstSec/FirstSec';
import Landing from './components/LandingPage/Landing';
import Menu from './components/Menu/Menu';
import SecondSec from './components/SecondSec/SecondSec';
import ThirdSec from './components/ThirdSec/ThirdSec';
import Collection from './components/FirstSec/collection/Collection';



const App = () => {
  
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
                <SecondSec />
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
