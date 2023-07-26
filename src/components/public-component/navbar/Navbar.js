import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo.png'
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className='custom-navbar'>
                <div className='navbar-item '>
                    <img className='navbar-item' src={ logo } alt='' />
                </div>
                <div className='navbar-item serch-navbar'>
                    <input className='form-control' type='text' placeholder=' Search...' />
                </div>
                <div className='navbar-item '><FaUserAlt /> Login</div>
                <div className='navbar-item'><FaShoppingCart /> Cash</div>
            </div>

        </>
    );
}

export default Navbar;
