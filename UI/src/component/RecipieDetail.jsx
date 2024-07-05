// import React from 'react';
// import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const RecipeDetail = () => {
//   const navigate = useNavigate();
//   const recipe = useLoaderData();
//   const { id } = useParams();

//   const deleteRecipe = async () => {
//     const confirm = window.confirm('Are you sure you want to delete this recipe?')
//     if(!confirm) return;
//     try {
//       const res = await fetch(`/api/recipies/${id}`, {method:'DELETE'})
//       if (res.ok) {
//         toast.success('Recipe deleted successfully')
//         navigate('/home')
//       } else {
//         toast.error('Failed to delete recipe')
//       }
//     } catch (error) {
//       console.error('Error deleting recipe:', error)
//       toast.error('An error occurred while deleting the recipe')
//     }
//   }

//   return (
//     <div className="bg-white text-gray-900 mb-10 pb-10">   
//       <div className="max-w-4xl mx-auto p-5 ">
//         <section>
//           <Link to="/home" className="flex items-center my-5 gap-1 font-medium">Back to Recipes</Link>
//         </section>

//         <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
//           {recipe.image && (
//             <img
//               src={recipe.image}
//               alt="Recipe Thumbnail"
//               className="w-full h-64 object-cover"
//             />
//           )}
//           <div className="p-6">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
//               <h1 className="text-3xl font-bold text-purple-800">
//                 {recipe.item}
//               </h1>
//             </div>
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold text-purple-800 mb-2">
//                 Ingredients
//               </h2>
//               <p>{recipe.ingredients}</p>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold text-purple-800 mb-2">
//                 Instructions
//               </h2>
//               <p>{recipe.instructions}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-row justify-end gap-4 mr-[205px] mt-4">
//         <Link to={`/Edit/${id}`} className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">
//           Edit Recipe
//         </Link>
//         <button onClick={deleteRecipe} className="flex bg-red-500 hover:bg-red-600 text-white font-bold rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">
//           Delete Recipe
//         </button>
//       </div>
//     </div>
//   )
// }

// const recipieLoader = async({ params }) => {
//   try {
//     const res = await fetch(`/api/recipies/${params.id}`)
//     if (!res.ok) {
//       throw new Error('Failed to fetch recipe')
//     }
//     const data = await res.json();
//     console.log('recipe', data)
//     return data;
//   } catch (error) {
//     console.error('Error loading recipe:', error)
//     throw error;
//   }
// };

// export { RecipeDetail as default, recipieLoader }