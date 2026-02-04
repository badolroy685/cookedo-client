import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeSection = ({
    id,
    title,
    recipes,
    showButton = false,
    buttonText,
    onButtonClick,
}) => {
    return (
        <section id={id} className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>

            {showButton && (
                <div className="text-center mt-6">
                    <button onClick={onButtonClick} className="btn btn-outline">
                        {buttonText}
                    </button>
                </div>
            )}
        </section>
    );
};

export default RecipeSection;
