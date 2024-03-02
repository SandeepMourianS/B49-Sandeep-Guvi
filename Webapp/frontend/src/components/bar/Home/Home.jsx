import React from 'react'
import Contact from '../Contact/Contact'
import Aboutus from '../Aboutus/Aboutus'
import Headers from '../../Header/Header'
import { useNavigate } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Reviews from '../Reviews/Reviews'

function Home() {

  const navigate = useNavigate();

  const handleClick = ()=>{
      navigate('/menu');
  }

  return (
    <div className='home-background'>
      <div className='home-content'>
      <h1 className='first'>Authentic <span className='second'>Firewood</span> Biryanis <span className='second'>in Wedding Style</span></h1>
      <p>Discover the art of Viragu Aduppu Biryani, crafted in wedding style. Immerse yourself in authentic flavors, straight from our cloud kitchen to your table. A culinary ode to Tamil Nadu's taste buds</p>
      <button type='button' className="btn btn-dark btn-outline-light" onClick={handleClick}> <span className='first'>ORDER NOW</span> </button>
      </div>
      
      <Menu></Menu>
      <br />
      <Aboutus></Aboutus>
      <br />
      <Reviews></Reviews>
      <br />
      <Contact></Contact>
    </div>
  )
}

export default Home