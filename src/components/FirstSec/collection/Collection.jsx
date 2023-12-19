import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Collection.css'
import { Link } from 'react-router-dom';

export default function Collection() {
  const data = useSelector((state) => state.products)
  const dispatch = useDispatch()


  
  return (
    <div class="container-fluid text-center con">
  <div class="row">
    {data.map(function(product, index) {
      return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 carde" key={index} title={product.name}>
          <img src={product.thumbnail} alt="" />
          <div className="price">${product.price}</div>
          <div className="name"><Link>{product.name}</Link></div>
          {product.new == true && <div className='new'>NEW</div>}
          {
  product.promo === true && (
    <>
      <div className='promo'>-{product.promoValue}%</div>
      <div className='oldPrice'>${product.oldPrice}</div>
    </>
  )
}
{product.sold == true && <div className='sold'>SOLD</div>}

        </div>
      );
    })}
  </div>
</div>



  )
}
