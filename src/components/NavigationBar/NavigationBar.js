import React from 'react'
import './NavigationBar.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import Search from '../../assets/Search.png'
import Profile from '../../assets/profile.png'
import Menu from '../../assets/menu.png'
import Nav from '../../assets/nav.png'

const NavigationBar = () => {
  return (
    <nav>
        <img className='logo' src={Logo} alt="Logo" />
        <div className='right-side-container'>
            <img className='nav-image' src={Nav} alt="" />
            <div className='button hide'>
                <img src={User} alt="" />
                <span>Join <br />as a Coach</span>
            </div>

            <div className='button hide'>
                <img src={User} alt="" />
                <span>Hire <br />a Coach</span>
            </div>

            <div className='button hide'>
                <img src={Search} alt="" />
            </div>

            <div className='button hide'>
                <img src={Profile} alt="" />
                <span>Login</span>
            </div>

            <div className='button'>
                <img src={Menu} alt="" />
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar