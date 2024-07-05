import React, { useState, useEffect } from 'react';
import RecipieCard from './RecipieCard';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipies')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched recipes:', data);  // Add this line to log fetched data
      setRecipes(data);
    })
    .catch(error => console.error('Error fetching recipes:', error));
}, []);
  return (
    <>
      {/* <!-- Main Content --> */}
      <main className="flex-grow p-4">
        {/* <!-- Search Bar --> */}
        <div className="max-w-3xl mx-auto mb-8">
          <form action="/search" method="GET" className="w-full max-w-md flex">
            <input
              type="text"
              name="query"
              placeholder="Search recipes..."
              className="flex-grow rounded-l px-4 py-2 border border-gray-300"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
          </form>
        </div>

        {/* <!-- Popular Recipes --> */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Popular Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map(recipe => (
              <RecipieCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
