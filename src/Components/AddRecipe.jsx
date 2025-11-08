import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddRecipe = () => {
    const [selected, setSelected] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleAddRecipe = event => {
        event.preventDefault();
        const form = event.target;

        // Check if category is selected
        if (!selectedCategory) {
            alert("Please select a category");
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Add the selected category to the form data
        data.category = selectedCategory;

        // Validate all required fields
        const requiredFields = ['title', 'cuisine', 'Preparation-time', 'ingredients', 'instruction', 'img-url'];
        const missingFields = requiredFields.filter(field => !data[field]);

        if (missingFields.length > 0) {
            alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }

        console.log('Form data object:', data);

        //send data to  the db
        fetch('http://localhost:5000/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("After adding data to DB", data);
                    Swal.fire({
                        title: "Recipe added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }

            })
    }

    return (
        <div >

            <div className="relative">
                <h1 className="relative z-10 text-center text-7xl font-bold text-yellow-500  py-20">
                    Create Your Own Recipe
                </h1>
                <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/d0vSMJtx/hot-spicy-stew-eggplant-sweet-pepper-tomato-zucchini-mushrooms-flat-lay-top-view-1.jpg')] bg-cover bg-center opacity-50"></div>
            </div>
            <div className='lg:mx-56 md:mx-24 mx-6 my-20 bg-white p-10 rounded-xl'>

                <form onSubmit={handleAddRecipe}>
                    <h1 className='text-gray-800 text-4xl font-bold '>Add Your Recipe</h1>
                    <p className="text-gray-500 mb-10">Share your delicious creation with the world 🍲</p>
                    {/* --------Title  name ------------ */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-black'>
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">
                            <label className="label text-gray-800 text-xl">Title: <span className="text-red-500">*</span></label>
                            <input required type="text" name='title' className="text-black input w-full bg-orange-50 placeholder-gray-400" placeholder="Recipe name" />
                        </fieldset>

                        {/* --------cuisine type---------- */}
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">
                            <label className="label text-gray-800 text-xl">Cuisine Type: <span className="text-red-500">*</span></label>
                            <select
                                required
                                name="cuisine"
                                value={selected}
                                onChange={(e) => setSelected(e.target.value)}
                                className="w-full p-3  rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 placeholder-black text-black bg-orange-50"
                            >
                                <option value="" disabled>
                                    -- Select a category --
                                </option>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="chinese">Chinese</option>
                                <option value="American">American</option>
                            </select>
                            {selected && (
                                <p className="mt-3 text-yellow-600 font-medium">
                                    You selected: {selected}
                                </p>
                            )}

                        </fieldset>
                        {/* -----------ingredients----------- */}
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">
                            <label className="label text-gray-800 text-xl">Ingredients: <span className="text-red-500">*</span></label>
                            <input required type="text" name='ingredients' className="input w-full bg-orange-50 placeholder-gray-400" placeholder="List ingredients separated by commas" />
                        </fieldset>

                        {/* ---------category---------- */}
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">

                            <label className="label text-gray-800 text-xl">Categories: <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-2 gap-3">
                                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                                    (cat) => (
                                        <label key={cat} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat}
                                                checked={selectedCategory === cat}
                                                onChange={() => handleCategoryChange(cat)}
                                            />
                                            <span>{cat}</span>
                                        </label>
                                    )
                                )}
                            </div>
                            {selectedCategory && (
                                <p className="mt-3 text-yellow-600 font-medium">
                                    Selected: {selectedCategory}
                                </p>
                            )}
                        </fieldset>
                        {/* -------Preparation Time ---------- */}
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">
                            <label className="label text-gray-800 text-xl">Preparation Time (minutes): <span className="text-red-500">*</span></label>
                            <input required type="number" min="1" name='Preparation-time' className="input w-full bg-orange-50 placeholder-gray-400" />
                        </fieldset>

                        {/* --------------Likes Count ----------- */}
                        <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box   p-4 ">
                            <label className="label text-gray-800 text-xl">Likes Count:</label>
                            <input type="number" name='likes' className="input w-full bg-orange-50 placeholder-gray-400" placeholder="0" />
                        </fieldset>

                    </div>
                    {/* --------------Instructions ----------- */}
                    <fieldset className="fieldset bg-orange-100 border-base-300 rounded-box mt-2  p-4 ">
                        <label className="label text-gray-800 text-xl">Instructions: <span className="text-red-500">*</span></label>
                        <textarea required name='instruction' rows="4" className="input w-full bg-orange-50 text-black placeholder-gray-400 min-h-[100px] p-2" placeholder="Step-by-step instructions"></textarea>
                    </fieldset>

                    {/* -----------Image URL ------------  */}
                    <fieldset className="fieldset bg-orange-100 rounded-box  p-4 my-2">
                        <label className="label text-gray-800 text-xl">Image URL <span className="text-red-500">*</span></label>
                        <input required type="url" name='img-url' className="input w-full bg-orange-50 placeholder-gray-400 text-black" placeholder="https://example.com/image.jpg" />
                    </fieldset>

                    <input type="submit" className='btn w-full rounded-xl btn-warning ' value="Add Recipe" />
                </form>
            </div>






        </div>
    );
};

export default AddRecipe;