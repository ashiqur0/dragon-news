import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>

    return (
        <nav className='w-11/12 mx-auto py-4'>
            <div className='flex justify-between items-center'>
                <div className="">{user && user.email}</div>

                <div className="nav flex items-center gap-5 text-accent">
                    {links}
                </div>

                <div className="login-btn flex items-center gap-5">
                    <img src={userIcon} alt="" />
                    <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;