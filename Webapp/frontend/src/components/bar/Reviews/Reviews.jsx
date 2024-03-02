import React from 'react'
import './index.scss'

function Reviews() {
  return (
    <div className='review-background'>
        <h1 className='second'>Hear it from our <span className='yellow'>Customers</span></h1>


        <div className='review-container'> 
          <p>"Danjr Wedding Biriyani exceeded expectations! The biryanis were a delightful blend of authenticity and flavor. The online ordering process was seamless, and the delivery was prompt. A truly satisfying experience!"</p>  
                  <span className='yellow'>-Gokul</span>
        </div>

        <div className='review-container'>
          <p>"What a find! The website design is user-friendly and visually appealing. The biryanis were a taste revelation – perfectly cooked and rich in flavor. The additional touches of raita, katta, and bread halwa made the meal unforgettable."</p>
          <span className='yellow'>-Tharun</span>
        </div>


    </div>
  )
}

export default Reviews