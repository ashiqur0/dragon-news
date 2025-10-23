import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import '../App.css'

const Home = () => {
    return (
        <div className='poppins-font'>
            <header>
                <Header></Header>
            </header>

            <main>
                <section className='left_nav'></section>

                <section className='main'>
                    <Outlet></Outlet>
                </section>

                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default Home;