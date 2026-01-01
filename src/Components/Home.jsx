import React, { useState } from 'react';

import Banner from './Banner';
import AddRecipe from './AddRecipe';
import UpdateRecipe from './UpdateRecipe';

import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Home = () => {
        const recipes = useLoaderData() || [];
        const [showAll, setShowAll] = useState(false);

        // sort by likes (descending) and take top 6
        const sorted = Array.isArray(recipes) ? [...recipes].sort((a, b) => (b.likes || 0) - (a.likes || 0)) : [];
        const topRecipes = sorted.slice(0, 6);

        return (
                <div>
                        <Banner />

                        <section className="max-w-7xl mx-auto px-4 py-8">
                            <h2 className="text-3xl font-bold text-center mb-6">Top Liked Recipes</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                                {topRecipes.map((recipe) => (
                                    <RecipeCard key={recipe._id} recipe={recipe} />
                                ))}
                            </div>

                            <div className="text-center mt-6">
                                <button onClick={() => setShowAll(!showAll)} className="btn btn-outline">
                                    {showAll ? 'Hide All Recipes' : 'View All Recipes'}
                                </button>
                            </div>
                        </section>

                        {showAll && (
                            <section className="max-w-7xl mx-auto px-4 py-8">
                                <h2 className="text-4xl text-center font-bold text-yellow-500 mb-4">All Recipes</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    {recipes.map(recipe => (
                                        <RecipeCard key={recipe._id} recipe={recipe} />
                                    ))}
                                </div>
                            </section>
                        )}

                        <AddRecipe />

                </div>
        );
};

export default Home;