import React from 'react';


const Banner = () => {


    return (

        <div className="relative h-full w-full  ">

            <img
                src="https://i.ibb.co/CKhHKnsR/flat-lay-thanksgiving-food-border-assortment-with-copy-space.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                alt=""
            />
            <div className="relative z-10 p-6 text-white">

                <div>
                    <h1 className='py-60 text-3xl md:py-96 md:mx-24 md:text-5xl font-bold lg:ml-56 lg:text-7xl  '>Explore Flavors <br /> Ignite Your Passion for Cooking</h1>
                    


                </div>

            </div>
        </div>


    );
};

export default Banner;