import React from 'react';
import './Header.css'
import logo from '../../Icon/Logo.png'
import { Button, Container } from 'reactstrap';



const Header = () => {
    return (
        <Container>

            <nav className="nav">
                <div>
                <img className="logo" src={logo} alt=""/>
                </div>
                <ul>
                    
                    <li>
                        <input  className = "searchtype" placeholder =" Search for Your Trip" type="text"/>
                    </li>
                    <li>
                        <a href="/login">News</a>
                    </li>
                    <li>
                        <a className="btn-book" href="/book">Destination</a>
                    </li>
                    <li>
                        <a className="btn-book" href="/book">Blog</a>
                    </li>
                    <li>
                        <a className="btn-book" href="/login"> <Button size ="lg" color ="warning"> Login</Button> </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;