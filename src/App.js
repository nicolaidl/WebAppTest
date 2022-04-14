import './App.css';
import React from 'react';

import LandingPage from './components/pages/LandingPage';
import Navigation from './components/molecules/Navigation';
import Footer from './components/molecules/Footer';

function App() {

  return (
    <div style={{position: "relative"}}>
      <Navigation />

      <LandingPage />

      <Footer />

    </div>
  );
}

export default App;