import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { login } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then(() => {
                // console.log(result.user);
                // if have location.state then navigate user to location.state. otherwise navigate to home page
                navigate(`${location.state && location.state || '/'}`);
            })
            .catch(error => {
                // alert(error.code, error.message);
                setError(error.code);
            })

        event.target.reset();
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <h2 className='font-semibold text-3xl text-center pt-10 pb-5 text-primary'>Login your account</h2>

                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            required
                        />

                        {/* Password Field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                            required
                        />

                        {/* Forgot Password */}
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-500 text-lg text-center font-semibold'>{error}</p>}

                        {/* Login Button */}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-500 hover:underline'>Register</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Login;