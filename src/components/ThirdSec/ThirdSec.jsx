import React from 'react';
import imgThird from './myImages/h1-video-img-1.jpg';
import './ThirdSec.css'

export default function ThirdSec() {
  return (
    <div className="third-sec">
       <div className="container">
      <div className="row">
        <div className="col-md-6">
            <img src={imgThird} alt=""/>
        </div>
      </div>
    </div>
    </div>
  )
}
