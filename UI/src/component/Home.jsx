import React from 'react'

const Home = () => {
  return (
    <>


    {/* <!-- Main Content --> */}
    <main class="flex-grow p-4">
      {/* <!-- Search Bar --> */}
      <div class="max-w-3xl mx-auto mb-8">
        <form action="/search" method="GET" class="w-full max-w-md flex">
        {/* <!-- <form action="/" class="w-full max-w-md flex"> --> */}
            <input type="text" name="query" placeholder="Search recipes..." class="flex-grow rounded-l px-4 py-2 border border-gray-300"/>
            <button type="submit" class="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
        </form>
      </div>

      {/* <!-- Popular Recipes --> */}
      <section class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Popular Recipes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* <!-- Example Recipe Card --> */}
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/636488"> --> */}
              <img
                src="../images/butter_chicken.jpeg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Butter Chicken</h3>
              <p class="text-gray-600">A gravy made with chicken and butter</p>
            {/* </a> */}
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/638549"> --> */}
              <img
                src="../images/beef_fry.jpeg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Beef Fry</h3>
              <p class="text-gray-600">A sidedish including beef and coconut</p>
            {/* </a> */}
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/648758"> --> */}
              <img
                src="../images/fish_curry.jpeg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Fish Curry</h3>
              <p class="text-gray-600">
                A gravy made with fish for roti, dosa, and rice
              </p>
            {/* </a> */}
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/641604"> --> */}
              <img
                src="../images/brownie.jpg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Brownie</h3>
              <p class="text-gray-600">
                A chocolate cake which is usually served as a dessert
              </p>
            {/* /</a> */}
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/652542"> --> */}
              <img
                src="../images/panner.jpg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Paneer Tikka</h3>
              <p class="text-gray-600">A sidedish made with paneer</p>
            {/* </a> */}
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            {/* <!-- <a href="/search/recipe/665005"> --> */}
              <img
                src="../images/watermelon.jpg"
                alt="Recipe Image"
                class="rounded w-full h-32 object-cover mb-4"
              />
              <h3 class="text-xl font-semibold">Watermelon Juice</h3>
              <p class="text-gray-600">
                Watermelon made into a juice with less sugar
              </p>
            {/* </a> */}
          </div>
          {/* <!-- Repeat Recipe Cards as needed --> */}
        </div>
      </section>
    </main>


    </>
  )
}

export default Home