import React, { use } from 'react';
import AuthContext from '../context/AuthContext';

const Signin = () => {
    const { signInUser } = use(AuthContext);
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

                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signINInfo)
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto md:mt-50  md:mb-20 mt-40 mb-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In!</h1>
                <form onSubmit={handleSignin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In!</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;