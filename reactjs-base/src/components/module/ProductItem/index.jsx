import React from 'react';
import { useHistory } from "react-router-dom";

export default function ProductItem({product}) {
  const history = useHistory();
  const {title, image, price, description, id} = product;
  return (
    <div className='product-item' onClick={()=> history.push(`/product/${id}`)}>
      <img className='product-item-image' src={image} alt={image} />
      <div className='product-item-content'>
        <p className='text-wrapper'>
          <span className='product-name'>{title}</span>
          <span className='product-price'>{price}</span>
        </p>
        <p className='product-des'>{description}</p>
      </div>
      <button className='product-item-btn'>Add To Cart</button>
    </div>
  )
}
