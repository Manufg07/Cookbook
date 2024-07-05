import React from 'react';
import { Link, useParams } from 'react-router-dom'

const RecipieCard = ({ recipe }) => {
  // const { id } = useParams();
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold">{recipe.item}</h3>
      <p className="text-gray-600">{recipe.ingredients}</p>
      <p className="text-gray-600">{recipe.instructions}</p>
      {/* <button onClick={toggleText} className='flex-w-full mx-5 mb-5 text-purple-500  hover:text-purple-800'>{showFullDescription?'less':'more'}</button> */}
      <Link to={`/recipe/${recipe._id}`} className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-600 self-start mx-5 my-2">Show More</Link>
    </div>
  );
};

export default RecipieCard;
