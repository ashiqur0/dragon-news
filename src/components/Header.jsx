import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={logo} alt="" />

            <p className='text-accent text-[18px]'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl text-accent'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;