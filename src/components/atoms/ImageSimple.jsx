import React from 'react';
import image from '../../images/pexels-desk.jpg'

export default function Image() {
    return (
      <img className="image" src={image} alt="default alt" width="100%"/>
    );
  }