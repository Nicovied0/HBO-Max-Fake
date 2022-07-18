import React from 'react'
import img from '../img/logoapp.svg'
import { Link } from "react-router-dom";
import '../Css/LandingPage.css'

const LandingPage = () => {
  return (
    <div>
      <div>
        <img src={img} alt='logo' className='Img-logo' />
      </div>
      <div>
        <h2>Who is watching?</h2>
      </div>
      <div>
        <Link to="/home">
          <span className='Btn-home'>
          <h1>U</h1>
          <h3>User</h3>
          </span>
          
        </Link>

      </div>
      <div>
        <h4>MANAGE PROFILES</h4>
      </div>
    </div>
  )
}

export default LandingPage