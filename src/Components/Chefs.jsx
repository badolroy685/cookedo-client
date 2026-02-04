import { useEffect, useState } from "react";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/public/chefs.json")
      .then(res => res.json())
      .then(data => setChefs(data));
  }, []);

  // Decide how many chefs to show
  const visibleChefs = showAll ? chefs : chefs.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto py-10 px-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Chefs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12">
        {visibleChefs.map(chef => (
          <div
            key={chef.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            {/* Image */}
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/80 via-black/50 to-transparent
              flex flex-col justify-end
              p-6
              translate-y-full
              group-hover:translate-y-0
              transition-transform duration-500
            ">
              <h2 className="text-xl font-bold text-white">
                {chef.name}
              </h2>

              <p className="text-sm text-gray-300">
                {chef.specialty}
              </p>

              <p className="text-yellow-400 mt-1">
                ⭐ {chef.rating}
              </p>

              <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                {chef.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      {chefs.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Chefs;
