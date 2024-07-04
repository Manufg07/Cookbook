import React from 'react'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
  return (
    <>
        {/* <!-- Navbar --> */}
        <header
      className="bg-blue-500 text-white p-4 flex justify-between items-center"
    >
      <nav className="flex space-x-4">
        <Link to="/home" className="text-white text-lg">Home</Link>
        <Link to="/favourites" className="text-white text-lg">Favourites</Link>
        <Link to="/add" className="text-white text-lg">Share Recipie</Link>
        <Link to="/favourites" className="text-white text-lg">Favourites</Link>
      </nav>
      <form action="/logout" method="get">
      {/* <!-- <form action="/"> --> */}
        <button type="submit" className="bg-white text-blue-500 rounded px-4 py-1">
          Logout
        </button>
      </form>
    </header>
    </>
  )
}

export default HeaderHome