import React, { use } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';


const Signup = () => {
    const { createUser } = use(AuthContext);
    console.log(createUser);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formdata.entries());
        console.log(email, password, restFormData);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                //SAVE USER PROFILE TO DB
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Your account has been created!",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (

        <div className="card bg-base-100 mx-auto md:mt-50  md:mb-20 mt-40 mb-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up!</h1>
                <form onSubmit={handleSignup} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Your Name" />

                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Your Address" />

                    <label className="label">Phone Number</label>
                    <input type="number" name='phone' className="input" placeholder="Phone Number" />

                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>

    );
};

export default Signup;