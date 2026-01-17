import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Banner from "./Banner";
import AddRecipe from "./AddRecipe";
import RecipeSection from "./RecipeSection";

const Home = () => {
    const recipes = useLoaderData() || [];
    const [showAll, setShowAll] = useState(false);

    const sorted = Array.isArray(recipes)
        ? [...recipes].sort((a, b) => (b.likes || 0) - (a.likes || 0))
        : [];

    const topRecipes = sorted.slice(0, 6);

    return (
        <div>
            <Banner />

            <RecipeSection
                id="top-recipes"
                title="Top Liked Recipes"
                recipes={topRecipes}
                showButton={true}
                buttonText={showAll ? "Hide All Recipes" : "View All Recipes"}
                onButtonClick={() => setShowAll(!showAll)}
            />

            {showAll && (
                <RecipeSection
                    title="All Recipes"
                    recipes={recipes}
                />
            )}

            <AddRecipe />
        </div>
    );
};

export default Home;
