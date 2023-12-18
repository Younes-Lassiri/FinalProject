import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSec from './components/FirstSec/FirstSec';
import Landing from './components/LandingPage/Landing';
import Menu from './components/Menu/Menu';
import SecondSec from './components/SecondSec/SecondSec';
import ThirdSec from './components/ThirdSec/ThirdSec';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing />
              <div>
                <Menu />
                <FirstSec />
                <SecondSec />
              </div>
            </div>
          }
        />
        <Route path="/haha/*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
