import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';

const Signin = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
              
                const signINInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                fetch('https://cookedo-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signINInfo)
                })
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto md:mt-50  md:mb-20 mt-40 mb-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login!</h1>
                <form onSubmit={handleSignin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login!</button>
                    <p>New to this site? Please <Link to='/signup' className='text-blue-500'> Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signin;