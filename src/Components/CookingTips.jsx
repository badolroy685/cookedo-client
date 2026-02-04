import { useEffect, useState } from "react";

const CookingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then(res => res.json())
      .then(data => setTips(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        🍳 Cooking Tips & Tricks
      </h2>

      <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
        Learn simple techniques and expert advice to cook smarter, tastier, and with confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10">
        {tips.map(tip => (
          <div
            key={tip.id}
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-500"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              {tip.icon}
            </div>

            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              {tip.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookingTips;
