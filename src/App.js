import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';
import Navigation from './components/organisms/Navigation';
import Footer from './components/molecules/Footer';
import Spacer from './components/atoms/Spacer';


import ContentPage from './components/pages/ContentPage';
import Grid2Columns from './components/molecules/Grid2Columns';
import GridContent from './components/organisms/Grid2Columns';


function App() {

  return (
    <div className='app' style={{ position: "relative" }}>
      <Navigation />



      <Switch>


        {/* <Route path="/Home" exact>
          <WorkDonePage />
        </Route> */}
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

        <Route path="/work-done" exact>
          <PortfolioPage />
        </Route>

        <Route path="/contact" exact>
          <ContactPage />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        
        <Route path="/portfolio" exact>
          <PortfolioPage />
        </Route>

        <Route path="*">
          <Redirect to="/Home" />
        </Route>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;