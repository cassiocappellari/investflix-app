import React from 'react'
import Logo from '../../../src/assets/img/Logo.png'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Investflix Logo"/>
            </a>

            <a className="ButtonLink" href="/">
                New Video
            </a>
        </nav>
    )
}

export default Menu