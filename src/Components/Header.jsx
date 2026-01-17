import React, { use, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from 'react-router';
import AuthContext from './context/AuthContext';
// import '../App.css'; // Assuming you have a CSS file for styles



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, signoutUser } = use(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        signoutUser()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    }


    return (

        <div className="w-full fixed top-0 left-0 z-50 ">


            <div className="relative z-10 p-6 text-white">
                <div  >
                    <div className='flex justify-end gap-2 lg:mr-56 md:mr-24 md:mt-3 '>
                        {/* <a href="" className='text-xl hover'>Login</a>
                        <a href="" className='text-xl hover'>Sign up</a> */}

                        {
                            user ? <span className='mt-4'>{user.email}</span> :
                                <NavLink to='/signin'><button className="btn text-xl btn-outline btn-warning">Login</button>
                                </NavLink>
                        }
                        <div>
                            {user ? <button onClick={handleSignOut} className="btn text-xl btn-outline btn-warning">Sign Out</button> : <NavLink to='/signup'>
                                <button className="btn text-xl btn-active btn-warning">Sign Up</button>
                            </NavLink>}
                        </div>
                    </div>
                    <div className='lg:mx-56 md:mx-24 md:py-5 py-3 md:px-5 px-3 mt-2 border-[#ff611d] border-solid border-[2px] flex justify-between bg-[url("https://i.ibb.co/CKhHKnsR/flat-lay-thanksgiving-food-border-assortment-with-copy-space.jpg")] bg-cover bg-center  '>
                        <div className='text-3xl font-bold '><p>COOKEDO</p></div>


                        {/* Menu Icon - visible only on mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <TiThMenu size={24} /> : <TiThMenu size={24} />}
                            </button>
                        </div>

                        {/* Desktop Menu - hidden on small, shown on medium and up */}
                        <ul className="hidden md:flex space-x-4 text-xl ">
                            <li className='hover'><Link to='/'>Home</Link></li>
                            <li className='hover'><Link to='/'>About</Link></li>
                            <li><a href="#top-recipes">Recipes</a></li>

                            {
                                user && <>
                                    <li className='hover'><Link to='/profile'>Profile</Link></li>

                                </>
                            }
                            <li className='hover block'>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("footer")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Contact
                                </button>
                            </li>

                        </ul>
                    </div>

                    {/* Mobile Menu - only shown when isOpen is true */}
                    {isOpen && (
                        <ul className=" bg-gray-800 mr-58 py-5 pl-5 pr-16 rounded-2xl  border-[2px] border-[#ff611d] md:hidden mt-4 space-y-2 md:text-xl">
                            <li className='hover'><Link to='/'>Home</Link></li>
                            <li className='hover'><Link to='/'>About</Link></li>
                            <li><a href="#top-recipes">Recipes</a></li>

                            {
                                user && <>
                                    <li className='hover'><Link to='/profile'>Profile</Link></li>

                                </>
                            }
                            <li className='hover block'>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("footer")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>

                    )}
                </div>


            </div>
        </div>


    );

};

export default Header;