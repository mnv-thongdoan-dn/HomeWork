import React from 'react'

export default function ProductItem({product}) {
  const {productName, productImage, productPrice, productDescription} = product;
  return (
    <div className='product-item'>
      <img className='product-item-image' src={productImage} alt={productImage} />
      <div className='product-item-content'>
        <span className='product-name'>{productName}</span>
        <span className='product-price'>{productPrice}</span>
        <p className='product-des'>{productDescription}</p>
      </div>
      <button className='product-item-btn'>Add To Cart</button>
    </div>
  )
}
