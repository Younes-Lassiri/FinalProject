import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Landing.css';

export default function Landing() {
  return (
    <div className='landing-page'>
      <div><h1 className='logo'>Y&M Royal Chic</h1></div>
      <div className='description'>
        <h1 style={{ fontWeight: 300 }}>
          Burning <span style={{ fontStyle: 'italic', fontWeight: 100 }}>brightly </span>
          as a star, <span style={{ fontStyle: 'italic', fontWeight: 100 }}>new<br></br> collection </span>
          is here
        </h1>
      </div>
      <div className='scroll'>
        <ScrollLink className='a' to="menu" smooth={true} duration={500}>
          scroll down
        </ScrollLink>
      </div>
      <div className='scroll-line'></div>
    </div>
  );
}
