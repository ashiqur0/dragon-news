import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <h2 className='font-semibold text-3xl text-center pt-10 pb-5 text-primary'>Register your account</h2>

                <div className="card-body">
                    <fieldset className="fieldset">

                        {/* Name Field */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        {/* Photo Url Field */}
                        <label className="label">Photo Url</label>
                        <input type="text" className="input" placeholder="Photo Url" />

                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* Password Field */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        
                        {/* Login Button */}
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Already have an account ? <Link to='/auth/login' className='text-green-500 hover:underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;