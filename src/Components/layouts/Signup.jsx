import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router';



const Signup = () => {
    const { createUser } = useContext(AuthContext);
    
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    console.log(createUser);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formdata.entries());
        console.log(email, password, restFormData);
        setErrorMessage('');

        //password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (passwordRegex.test(password) === false) {
            setErrorMessage('Password must have one lowercase, one uppercase, one digit and 6 characters or longer');
            return;
        }

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
                fetch('https://cookedo-server.vercel.app/users', {
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
                                confirmButtonText: "Go to Home"
                            }).then(() => {
                                navigate('/');
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
                    <div className='relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="input"
                            placeholder="Password" />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute ml-[-35px] mt-2'>
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaEye />
                            }
                        </button>
                    </div>
                    
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                    <p>Already have an account? Please <Link to='/signin' className='text-blue-500'> Login</Link></p>
                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }
                </form>
            </div>
        </div>

    );
};

export default Signup;