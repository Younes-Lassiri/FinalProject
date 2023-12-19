import React from 'react';
import imgThird from './myImages/h1-video-img-1.jpg';
import './ThirdSec.css'
import playImg from './myImages/Design_sans_titre-removebg-preview.png'

export default function ThirdSec() {
  return (
    <div className="third-sec">
       <div className="container">
      <div className="row">
        <div className="col-xl-6 col-sm-12">
        <img src={imgThird} alt=""/>
            <div className='play'><img src={playImg} alt=""/></div>
            <div className="new"></div>
            <div className="old"></div>
        </div>
      </div>
    </div>
    </div>
  )
}
