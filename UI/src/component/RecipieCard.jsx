import React from 'react';

const RecipeCard = ({ recipie }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* <img
        src={recipe.image}
        alt="Recipe Image"
        className="rounded w-full h-32 object-cover mb-4"
      /> */}
      <h3 className="text-xl font-semibold">{recipie.item}</h3>
      <p className="text-gray-600">{recipie.ingredients}</p>
      <p className="text-gray-600">{recipie.instructions}</p>
    </div>
  );
};

export default RecipeCard;
