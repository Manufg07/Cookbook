import React from 'react'

const HeaderHome = () => {
  return (
    <>
        {/* <!-- Navbar --> */}
        <header
      class="bg-blue-500 text-white p-4 flex justify-between items-center"
    >
      <nav class="flex space-x-4">
        <a href="/home" class="text-white text-lg">Home</a>
        <a href="/favourites" class="text-white text-lg">Favourites</a>
      </nav>
      <form action="/logout" method="get">
      {/* <!-- <form action="/"> --> */}
        <button type="submit" class="bg-white text-blue-500 rounded px-4 py-1">
          Logout
        </button>
      </form>
    </header>
    </>
  )
}

export default HeaderHome