import React from 'react';
import './Header.css'
import logo from '../../Icon/Logo.png'
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container>

            <nav className="nav">
                <div>
                <Link to="/home"><img className="logo" src={logo} alt=""/></Link>
                </div>
                <ul>
                    
                    <li>
                        <input className = "searchtype" placeholder =" Search for Your Trip" type="text"/>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/search">Destination</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login"> <Button size ="lg" color ="warning"> Login</Button> </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;