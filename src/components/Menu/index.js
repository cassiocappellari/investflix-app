import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button/index'
//import ButtonLink from '../components/ButtonLink'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Investflix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                New Video
            </Button>
        </nav>
    )
}

export default Menu