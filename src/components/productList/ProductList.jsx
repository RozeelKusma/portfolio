import React from 'react'
import Product from '../product/Product'
import './productlist.css'
import { products } from '../../data'


const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          These are the projects that I have worked with till date.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product key ={item.id} img={item.img} link={item.link}/>
        ))}
        
        
      </div>
    </div>
  )
}

export default ProductList