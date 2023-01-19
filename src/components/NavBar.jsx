import './NavBar.css';
import CartWidget from './CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='navbrand'>
                <NavLink className='navlinks' to="/Primerapreentrega/"><h1>SHOES.AR</h1></NavLink>
            </div>   
            <ul className='navlist'>
                <li>
<NavLink className='navlink' to="/Primerapreentrega/categoria/clasicos">Modelo Clasico</NavLink>
                </li>
                <li>
<NavLink className='navlink' to="/Primerapreentrega/categoria/modernos"> Modelo Moderno</NavLink>
                </li>
                <li>
<NavLink className='navlink' to="/Primerapreentrega/cart">
                  <CartWidget />
                 </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar;