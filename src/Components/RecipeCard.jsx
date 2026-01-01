import React from 'react';
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RecipeCard = ({ recipe }) => {

    if (!recipe || Object.keys(recipe).length === 0) {
        return null;
    }
    // Safely destructure recipe. Property names with hyphens must be quoted and
    // can be aliased to valid JS identifiers. Also guard against recipe being undefined.
    const {
        'img-url': imgUrl,
        title,
        ingredients,
        instruction,
        cuisine,
        'Preparation-time': preparationTime,
        _id,
        likes,
    } = recipe || {};

    const handleDelete = (_id) => {
        // Implement delete functionality here
        console.log(`Delete recipe with id: ${_id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recipes/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success"
                            });
                        }
                    });

            }
        });
    }
    return (
        <div className='text-gray-900 m-10' >


            <div className=" bg-white shadow-sm rounded-xl ">
                <figure>
                    <img
                        className='h-72 w-full object-cover'
                        src={imgUrl || ''}
                        alt={title || 'Recipe image'}

                    />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">
                            {title || 'Untitled Recipe'}
                        </h2>
                        <h2>{likes ? <div className="badge border-none bg-red-400">{likes} <span className='text-red-500'><IoHeart /></span> </div> : null}</h2>
                    </div>
                    <p className="text-sm text-gray-600">{cuisine ? `${cuisine} • ${preparationTime || ''} min` : ''}</p>
                    <h3 className='font-medium'>Ingredients:</h3>
                    <p className='text-gray-700'>
                        {ingredients
                            ? ingredients.slice(0, 110) + (ingredients.length > 110 ? '...' : '')
                            : 'No instructions provided.'}
                    </p>

                    <h3 className='font-medium'>Instruction: </h3>
                    <p className='text-gray-700'>
                        {instruction
                            ? instruction.slice(0, 220) + (instruction.length > 220 ? '...' : '')
                            : 'No instructions provided.'}
                    </p>
                   <Link to={`/recipe/${_id}`} className="w-full block">
                    <button className="btn w-full bg-yellow-400 border-none text-gray-800 mt-5">See Details</button>
                   </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error ">Delete Recipe</button>
                    <Link to={`updateRecipe/${_id}`}>
                    <button className='w-full bg-green-400 border-none btn text-gray-800'>Update Recipe</button>
                    </Link>
                
                </div>
            </div>


        </div>
    );
};

export default RecipeCard;