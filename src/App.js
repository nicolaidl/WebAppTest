import './App.css';
import React from 'react';

import Page from './components/pages/Page'
import FlexGrid3Row from './components/atoms/FlexGrid3Row';
import useWindowDimensions from './utils/MediaQuery';

function App() {


  let asd = useWindowDimensions();
  console.log('see this: ' + asd)


  return (
    <>

      <Page />
      <FlexGrid3Row />

    </>
  );
}

export default App;