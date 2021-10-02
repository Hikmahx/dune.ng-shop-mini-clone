import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
  return (
    <div className="products-wrapper flex flex-col justify-center self-center mb-8 mt-60 md:mt-4">
      <h1 className="text-2xl text-center"> POPULAR PRODUCTS</h1>
      <div style={{gridTemplateColumns:'25% 25% 25% 25%', gridTemplateRows:'33% 33% 33%'}} 
          className="flex w-full items-center flex-col justify-center lg:grid lg:flex-wrap">
        {popularProducts.map((item)=>(
          <Product item={item} key={item.id} />
        ))}
       </div>
    </div>
  )
}

export default Products
