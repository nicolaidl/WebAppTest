import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import Navigation from './components/organisms/Navigation';
import Footer from './components/molecules/Footer';
import Spacer from './components/atoms/Spacer';


import ContentPage from './components/pages/ContentPage';


function App() {

  return (
    <div className='app' style={{ position: "relative" }}>
      <Navigation />



      <Switch>
        {/* <ContentPage /> */}

        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>

        <Route path="/Home" exact>
          <LandingPage />
        </Route>

        <Route path="/services" exact>
          <ServicesPage />
        </Route>

        <Route path="/contact" exact>
          <ContactPage />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="*">
          <Redirect to="/Home" />
        </Route>
      </Switch>

      {/* <Footer /> */}

    </div>
  );
}

export default App;