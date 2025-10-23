import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/layouts/LeftAside';
import RightAside from '../components/layouts/RightAside';

const Home = () => {
    return (
        <div className='poppins-font'>
            <header>
                <Header></Header>

                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-10'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;