import React from 'react'
import './index.scss'
import facebookIcon from '../../../assets/danjr_facebook.png'
import instagramIcon from '../../../assets/danjr_instagram.png'
import linkedinIcon from '../../../assets/danjr_linkedin.png'
import xIcon from '../../../assets/danjr_x.png'
// import Birinji from "../../assets/danjr_birinji.png"


function Contact() {
  return (
    <div className='contact-bg'>
      <h3 className='number second'>Contact Number: <span className='first'>+91 9363295500 </span> (Call/WhatsApp)</h3>
      <p className='content'>For inquiries or assistance, reach us at the provided contact number. We look forward to serving you the best of Danjr Wedding Biriyani!</p>

      <hr />
      

      <div>
      <div className='seperate1 first'>Contact us :  </div>
        <div className='content yellow'>Email : <span className='white'>danjrweddingbiriyani@gmail.com</span></div>
        <div className='phone content yellow'>Phone no : <span className='content white'>+91 9363295500</span> </div>
        <div className='address content white'>6, 1st Main Rd, 
Seevaram, Perungudi, 
Chennai, Tamil Nadu
600096</div>

<hr />
      </div>

      <div className='end white'>
        <div>© Dan Jr Wedding Biriyani 2024</div>

        <ul className='yellow'>privacy policy</ul>

        <ul className='yellow'>Terms and conditions</ul>

        <div className='icon'>
        <span className='icon1'><img src={facebookIcon} alt="error" /></span>
        <span className='icon2'><img src={instagramIcon} alt="error" /></span>
        <span className='icon3'><img src={linkedinIcon} alt="error" /></span>
        <span className='icon4'><img src={xIcon} alt="error" /></span>
        </div>
      </div>

    </div>
  )
}

export default Contact