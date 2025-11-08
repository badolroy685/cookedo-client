import React, { useState } from "react";
import Swal from "sweetalert2"; // npm install sweetalert2

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
    prepTime: "",
    categories: [],
    likeCount: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setRecipe((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value),
      }));
    } else {
      setRecipe((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate storing in DB (replace with your API call / Firebase)
    try {
      // Example: await fetch("/api/recipes", { method: "POST", body: JSON.stringify(recipe) });
      console.log(recipe);

      Swal.fire({
        icon: "success",
        title: "Recipe Added!",
        text: "Your recipe has been successfully added 🍲",
        confirmButtonColor: "#f97316",
      });

      setRecipe({
        image: "",
        title: "",
        ingredients: "",
        instructions: "",
        cuisineType: "",
        prepTime: "",
        categories: [],
        likeCount: 0,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 my-10 text-black">
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
        Add a New Recipe 🍳
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full bg-orange-50"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Recipe title"
            className="input input-bordered w-full bg-orange-50"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients separated by commas"
            className="textarea textarea-bordered w-full bg-orange-50"
            rows="3"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Instructions:
          </label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Step-by-step instructions"
            className="textarea textarea-bordered w-full bg-orange-50"
            rows="4"
          />
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Cuisine Type:
          </label>
          <select
            name="cuisineType"
            value={recipe.cuisineType}
            onChange={handleChange}
            className="select select-bordered w-full bg-orange-50"
          >
            <option value="">Select cuisine</option>
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Time (minutes):
          </label>
          <input
            type="number"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleChange}
            className="input input-bordered w-full bg-orange-50"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Categories:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
              (cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="categories"
                    value={cat}
                    checked={recipe.categories.includes(cat)}
                    onChange={handleChange}
                  />
                  <span>{cat}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Like Count:
          </label>
          <input
            type="number"
            name="likeCount"
            value={recipe.likeCount}
            readOnly
            className="input input-bordered w-full bg-orange-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-orange-500 hover:bg-orange-600 text-white text-lg"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
