import React from 'react';
import { useState, useEffect } from 'react';
import { Header, Footer } from '../../components/layout';
import ProductItem from '../../components/module/ProductItem';
import {getProductList} from '../../core/services';
import {API_PRODUCTS} from '../../core/constants';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      getProductList(API_PRODUCTS)
      .then((res) => {
        setProducts(res)
        setLoading(!loading);
      })
    };

    getProducts();
  }, [])

  return (
    <div className='page-home'>
      <Header/>
      <main className='page-main'>
        <div className='product-list'>
          {
            loading ? 
            'isLoading...' :
            products.map((item) => {
              return (
                <ProductItem product={item} key={item.id}/>
              )
            })
          }
        </div>
      </main>
      <Footer/>
    </div>
  )
}
