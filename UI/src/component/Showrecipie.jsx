import React from 'react'

const Showrecipie = () => {
  return (
    <>


    {/* <!-- Main Content --> */}
    <main className="flex-grow p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
        <h2 id="recipeTitle" className="text-4xl font-bold mb-4">Recipe Title</h2>
        <button
              id="favoriteButton"
              className="text-gray-500 text-2xl"
              // onClick={toggleFavorite}
            >
              <i
                // className={`material-icons ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
                // style={{ fontSize: '36px' }}
              >
                star
              </i>
            </button>
        </div>
        <img id="recipeImage"src=""alt="Recipe Image"className="rounded w-full h-64 object-cover mb-4"/>
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul id="recipeIngredients" className="list-disc list-inside mb-4"></ul>
        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
        <p id="recipeInstructions" className="text-lg"></p>
      </div>
    </main>

 

    </>
  )
}

export default Showrecipie