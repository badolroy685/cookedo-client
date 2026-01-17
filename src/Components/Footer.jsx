import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer' className="relative z-100 h-full w-full py-16 ">
            <img
                src="https://i.ibb.co/bMj2M7vC/1702-m10-i304-n005-F-c06-551922376-White-doodle-vegetables-and-fruits-isolated-on-blackboard-seamles.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-5 "
                alt=""
            />
            <div className="relative z-10 p-6 text-white text-center">
               <h3 className='font-bold text-3xl mb-3'>COOKEDO</h3>
               <p>Discover global flavors and timeless traditions—all in one place. Taste the <br /> world from the comfort of your kitchen.</p>
               <div className='flex justify-center gap-5 mt-5'>
                <a className='hover:underline' href="">Home</a>
                <a className='hover:underline' href="">About</a>
                <a className='hover:underline' href="">Contact</a>
               </div>
               <div className='flex justify-center gap-5 mt-5 text-2xl '>
                <a className='hover:text-blue-500' href=""><FaFacebook /></a>
               <a className='hover:text-red-500' href=""><FaYoutube /></a>
               <a className='hover:text-blue-400'  href=""><FaTwitter /></a>
               </div>

               <p className='mt-5 '>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>

    );
};

export default Footer;