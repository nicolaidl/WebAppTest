import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import Navigation from './components/molecules/Navigation';
import Footer from './components/molecules/Footer';

function App() {

  return (


    <div className='app' style={{ position: "relative" }}>

      <Route pah="/home">

      </Route>
      <Navigation />


      {/* 
      <LandingPage />

      <Footer /> */}

    </div>
  );
}

export default App;