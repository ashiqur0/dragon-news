import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>

    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>

            <div className="nav flex items-center gap-5 text-accent">
                {links}
            </div>

            <div className="login-btn flex items-center gap-5">
                <img src={user} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;