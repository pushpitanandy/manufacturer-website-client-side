import React from 'react';
import { Link } from 'react-router-dom';
import toolIcon from '../../images/toolIcon.png';

const Header = () => {
    const menuItems = <>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl"><img src={toolIcon} alt='' /> BD Tools</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn">Login</Link>
            </div>
        </div>

    );
};

export default Header;