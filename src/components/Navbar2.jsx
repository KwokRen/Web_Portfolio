import React from 'react'
import Logo from './Logo'
import '../styles/Navbar2.css'

const NavbarTwo = (props) => {
    return(
        <div className="navbar-kr">
            <Logo />
            <div className="links-container">
                <div className="link">About</div>
                <div className="link">Projects</div>
                <div className="link">Contact</div>
                <div className="link">Resume</div>
            </div>
        </div>
    )
}

export default NavbarTwo