import React from 'react'
import img from '../img/logoapp.svg'

const LandingPage = () => {
  return (
    <div>
        <div>
        <img src={img} alt='logo' className='Img-logo'/>
        </div>
        <div>
            <h2>Who is watching?</h2>
        </div>
        <div>
            
            <h1>U</h1>
            <h3>User</h3>
        </div>
        <div>
            <h4>MANAGE PROFILES</h4>
        </div>
    </div>
  )
}

export default LandingPage