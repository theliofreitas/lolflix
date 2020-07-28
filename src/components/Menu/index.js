import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className = "Menu">

            {/* <a href="/">
                <img className="Logo" src={Logo} alt="Lolflix logo"/>
            </a> */}
            
            <Link to="/">
                <img className="Logo" src={Logo} alt="Lolflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;