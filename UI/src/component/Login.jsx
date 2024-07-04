import React from 'react'

const Login = () => {
  return (
    <>
     {/* <!-- Login Form --> */}
     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form action="/login" method="POST">
        {/* <!-- <form action="/"> --> */}
            <div className="mb-4">
                <label for="username" className="block text-gray-700 mb-2">Username</label>
                <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
        </form>
        <p className="mt-6 text-center text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
    </div>
    </>
  )
}

export default Login