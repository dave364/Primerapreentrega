
import CartWidget from './CartWidget';
import React from 'react';


export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='navbrand'>
                <a className='navlinks' href='#'>mi marca</a>
            </div>   
            <ul className='navlist'>
                <li>
<a className='navlink' href='#'>categoria 1</a>
                </li>
                <li>
<a className='navlink' href='#'>categoria 2</a>
                </li>
                <li>
<a className='navlink' href='#'>
                  <CartWidget />
                 </a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar;