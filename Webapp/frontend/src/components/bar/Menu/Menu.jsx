import React from 'react'
import './index.scss'
import { PRODUCTS } from '../../Products/product'
import { PRODUCTS1 } from '../../Products/product'
import { PRODUCTS2 } from '../../Products/product'

function Menu() {
  return (
    <div className='menu-background'>
            <h2 className='first'>BIRIYANIS</h2>
            <div className='container'>

      {PRODUCTS.map((product) => (
          <div className='card' key={product.id}>
            <div className='image'>
              <img src={product.image} alt="..." />
            </div>
            <div className='first product'>{product.firstName}</div>
              <div className='second product'>{product.secondName}</div>

              <p>{product.content}</p>
              
              <div className='first price'>&#8377;{product.price}</div>

              <button type="button" className="btn btn-light buttonlight"><span className='add_color '>ADD</span></button>
          </div>
        ))}
    </div>
    <h2 className='first'>Add on</h2>
    <div className='container'>
              {PRODUCTS1.map((product) => (
          <div className='card' key={product.id}>
            <div className='image'>
              <img src={product.image} alt="..." />
            </div>
            <div className='first product'>{product.firstName}</div>
              <div className='second product'>{product.secondName}</div>

              <p>{product.content}</p>
              
              <div className='first price'>&#8377;{product.price}</div>

              <button type="button" className="btn btn-light buttonlight"><span className='add_color '>ADD</span></button>
          </div>
          
        ))}
        </div>

        <h2 className='first'>Desserts</h2>
    <div className='container'>
              {PRODUCTS2.map((product) => (
          <div className='card' key={product.id}>
            <div className='image'>
              <img src={product.image} alt="..." />
            </div>
            <div className='first product'>{product.firstName}</div>
              <div className='second product'>{product.secondName}</div>

              <p>{product.content}</p>
              
              <div className='first price'>&#8377;{product.price}</div>

              <button type="button" className="btn btn-light buttonlight"><span className='add_color '>ADD</span></button>
          </div>
        ))}
        </div>

        <button className='btn btn-dark btn-outline-light check'  > Check out</button>
    </div>

  )
}

export default Menu