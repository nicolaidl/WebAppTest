import startImage from './images/pexels-desk.jpg';
import './App.css';
import React from 'react';

import Image from './components/atoms/Image'

function App() {
  return (
    <>
      <p>Home Page</p>
      <Image image={startImage} type={"hero"} alt={"err"} />
    </>
  );
}

export default App;