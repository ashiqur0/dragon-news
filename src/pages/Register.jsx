import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photourl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        createUser(email, password)
            .then(result => {

                // update user profile
                updateUser({displayName:name, photoURL:photo})
                .then(() => {
                    setUser({...result.user, displayName:name, photoURL:photo});
                    navigate('/');
                })
                .catch(error  => {
                    console.log(error);
                    setUser(result.user);
                })
            })
            .catch(error => {
                console.log('registration error', error);
            });

        event.target.reset();
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <h2 className='font-semibold text-3xl text-center pt-10 pb-5 text-primary'>Register your account</h2>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name Field */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Name"
                            name='name'
                            required
                        />

                        {/* Photo Url Field */}
                        <label className="label">Photo Url</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Photo Url"
                            name='photourl'
                            required
                        />

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

                        {/* Register Button */}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                    <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Already have an account ? <Link to='/auth/login' className='text-green-500 hover:underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;