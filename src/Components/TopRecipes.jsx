// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import RecipeCard from "./RecipeCard";

// const TopRecipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetch("https://cookedo-server.vercel.app/recipes")
//       .then(res => res.json())
//       .then(data => setRecipes(data));
//   }, []);

//   return (
//     <div className="my-10">
//       <h2 className="text-3xl font-bold text-center mb-6">
//         Top Liked Recipes
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {
//           recipes.map(recipe => (
//             <RecipeCard key={recipe._id} recipe={recipe} />
//           ))
//         }
//       </div>

//       <div className="text-center mt-8">
//         <Link to="/recipes">
//           <button className="btn btn-outline">
//             See All Recipes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopRecipes;
