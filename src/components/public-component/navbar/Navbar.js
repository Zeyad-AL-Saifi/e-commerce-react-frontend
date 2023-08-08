import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo.png'
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const admin = true;

    return (
        <>
            <div className='custom-navbar'>
                <div className='navbar-item '>
                    <Link to='/'>
                        <img className='navbar-item' src={ logo } alt='' />
                    </Link>
                </div>
                <div className='navbar-item serch-navbar'>
                    <input className='form-control' type='text' placeholder=' Search...' />
                </div>
                <Link to='/LoginPage' style={ { textDecoration: 'none', color: 'white' } }>
                    <div className='navbar-item '><FaUserAlt />Login
                    </div>
                </Link>
                <div class="dropdown navbar-item dropbtn">
                    <FaUserAlt />User
                    <div class="dropdown-content">
                        <Link to={ admin ? "Admin" : "Profile" } >User Profile</Link>
                        <Link >Logout</Link>
                    </div>
                </div>
                <Link to={ '/ShoppingCartPage' } style={ { textDecoration: 'none', color: 'white' } }>
                    <div className='navbar-item'><FaShoppingCart />Cash</div></Link>
            </div >

        </>
    );
}

export default Navbar;
