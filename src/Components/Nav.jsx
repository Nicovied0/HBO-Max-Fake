import React from 'react'
import '../Css/Nav.modules.css'
import img from '../img/logoapp.svg'

const Nav = () => {
    return (
        <div className='Container_Nav'>
            <div>
                <h3>MENU</h3>
                <div>FORM</div>
            </div>
            <img src={img} alt='logo' className='Img-logo'/>
            <div>
                <div>USER IMG</div>
                <h3>USERNAME</h3>
            </div>

        </div>
    )
}

export default Nav