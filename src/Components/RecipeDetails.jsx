import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams(); // 👈 get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe details...</p>;
  }

  return (
  <div className="md:flex  mt-60 mb-10 container mx-auto px-40  ">
      <div className=" bg-white shadow-md    p-6  text-gray-900">
     
      <h1 className="text-3xl font-semibold mb-3 ">{recipe.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
       <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {recipe.category}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Preparation Time:</strong> {recipe["Preparation-time"]} minutes
      </p>

      <h2 className="font-semibold text-lg">Ingredients:</h2>
      <p className="text-gray-700 mb-4">{recipe.ingredients}</p>

      <h2 className="font-semibold text-lg">Instructions:</h2>
      <p className="text-gray-700">{recipe.instruction}</p>
    </div>
    <div className=" bg-white shadow-md   text-gray-900">
         <img
        src={recipe["img-url"]}
        alt={recipe.title}
        className="w-full h-full  object-cover "
      />
    </div>
  </div>
  );
};

export default RecipeDetails;
