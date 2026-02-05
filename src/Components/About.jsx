import React from 'react';

const About = () => {
    return (
        <div id='about' className='flex max-w-7xl mx-auto py-10 px-12  bg-base-200  '>
            <div className='   flex flex-col md:p-12  gap-4 justify-center max-w-2/4 '>
                <h4 className='font-bold text-2xl text-yellow-500'>COOKEDO</h4>
                <h1 className='text-5xl font-semibold'>Few Words About Us</h1>
                <p className=''>Our recipe website is a vibrant space for food lovers to explore flavors from around the world. Discover diverse recipes, learn new cooking techniques, and experience the traditions behind every dish. Whether you are a beginner or an experienced cook, you can expand your skills and enjoy creative culinary journeys.</p>
                <p>Users can share their own recipes and inspire others daily.</p>
            </div>
            <div className='flex gap-10 ml-16 py-26'>
                <img className='h-88 w-62 object-cover mt-30 hidden lg:block' src="https://i.ibb.co.com/7JxbF4f9/side-close-up-view-salad-bowls-colorful-spices-vegetable-salad-cutting-board-garlic.jpg" alt="" />
                <img className='h-88 w-62 object-cover  ' src="https://i.ibb.co.com/G4GWmPgD/chef-cooking-kitchen-while-wearing-professional-attire.jpg
                " alt="" />
            </div>
        </div>
    );
};

export default About;