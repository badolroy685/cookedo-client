import React, {} from 'react';

import Banner from './Banner';
import AddRecipe from './AddRecipe';
import UpdateRecipe from './UpdateRecipe';

import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const Home = () => {
    const recipes = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
          
           <AddRecipe></AddRecipe>
           <RecipeCard></RecipeCard>
           <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                recipes.map(recipe => <RecipeCard
                    key={recipe._id}
                    recipe={recipe}
                ></RecipeCard>)
            }
           </div>
          
            
        </div>
    );
};

export default Home;