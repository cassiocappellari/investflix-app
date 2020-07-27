import React from 'react'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button/index'
//import ButtonLink from '../components/ButtonLink'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Investflix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    )
}

export default Menu