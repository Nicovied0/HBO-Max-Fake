import React from 'react'
import '../Css/Nav.modules.css'
import img from '../img/logoapp.svg'
import Search from './Search'

const Nav = () => {
    return (
        <div className='Container_Nav'>
            <div className='Div_container'>
                <Search />
            </div>
            <div className='Div_container'>
                <img src={img} alt='logo' className='Img-logo' />
            </div>
            <div className='Div_container'>
                <div>USER IMG</div>
                <h3>USERNAME</h3>
            </div>

        </div>
    )
}

export default Nav