<div
  key={recipe.id}
  className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-4"
>
  <img
    src={recipe.image}
    alt={recipe.title}
    className="w-full h-40 object-cover rounded-lg"
  />
  <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
  <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    View Recipe
  </button>
</div>
