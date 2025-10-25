import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>

    const handleLogOut = () => {
        // console.log('user trying to log out');
        logOut()
            .then(() => {
                alert('log out successfull');
            })
            .catch(error => {
                console.log('log out error:', error);
            })
    }

    return (
        <nav className='w-11/12 mx-auto py-4'>
            <div className='flex justify-between items-center'>
                <div className="">{user && user.displayName}</div>

                <div className="nav flex items-center gap-5 text-accent">
                    {links}
                </div>

                <div className='flex items-center gap-5'>
                    <img src={user ? user.photoURL : userIcon} alt="" />
                    {
                        user && <button onClick={handleLogOut} className='btn btn-primary px-10'>Log out</button> || <div className="login-btn flex items-center gap-5">
                            <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                        </div>
                    }
                </div>

            </div>
        </nav>

    );
};

export default Navbar;