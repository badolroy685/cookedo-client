import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
// import '../App.css'; // Assuming you have a CSS file for styles



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

    <div className="w-full fixed top-0 left-0 z-50">
            
          
            <div className="relative z-10 p-6 text-white">
                <div  >
                    <div className='flex justify-end gap-10 lg:mr-56 md:mr-24 md:mt-3 '>
                        <a href="" className='text-xl hover'>Login</a>
                        <a href="" className='text-xl hover'>Sign up</a>

                    </div>
                    <div className='lg:mx-56 md:mx-24  md:py-5 py-3 md:px-5 px-3 mt-2 border-[#ff611d] border-solid border-[2px] flex justify-between'>
                        <div className='text-3xl font-bold '><p>COOKEDO</p></div>


                        {/* Menu Icon - visible only on mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <TiThMenu size={24} /> : <TiThMenu size={24} />}
                            </button>
                        </div>

                        {/* Desktop Menu - hidden on small, shown on medium and up */}
                        <ul className="hidden md:flex space-x-4 text-xl">
                            <li><a href="#" className='hover'>Home</a></li>
                            <li><a href="#" className='hover'>About</a></li>
                            <li><a href="#" className='hover'>Recipes</a></li>
                            <li><a href="#" className='hover'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Mobile Menu - only shown when isOpen is true */}
                    {isOpen && (
                        <ul className=" bg-gray-800 mr-58 py-5 pl-5 pr-16 rounded-2xl  border-[2px] border-[#ff611d] md:hidden mt-4 space-y-2 md:text-xl">
                            <li><a href="#" className="block hover">Home</a></li>
                            <li><a href="#" className="block hover">About</a></li>
                            <li><a href="#" className="block hover">Recipes</a></li>
                            <li><a href="#" className="block hover">Contact</a></li>
                        </ul>
                        
                    )}
                </div>
                

            </div>
        </div>


    );

};

export default Header;