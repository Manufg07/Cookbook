import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddNew = () => {

  const [item, setItem] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const navigate = useNavigate()

  const submitForm = (e) =>{
    e.preventDefault()
    const newRecipie = {
      item,
      ingredients,
      instructions
    //   instruction,
    //   price
    }
   const res= AddRecipie(newRecipie)
   toast.success('Recipie added successfully')
   navigate('/home')
  }
  
  const AddRecipie = async(newRecipie) => {
    const res = await fetch('/api/recipie',{
      method : 'POST',
      headers:{
        'Content-Type' : "application/json",
      },
      body:JSON.stringify(newRecipie)
    })
    return res;
  }

  return (
    <>
      {/* <!-- form - adding new course --> */}

      <section className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="container m-auto max-w-2xl py-2">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              
              <form onSubmit={submitForm}>
                <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                  Add Item
                </h2>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Dish Name
                  </label>
                  <input
                    type="text"
                    id="item"
                    name="item"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beef fry"
                    required
                    value={item}
                    onChange={(e)=> setItem(e.target.value)} 
                  />
            </div>
         <div className="mb-4">
                  <label
                    htmlFor="ingredients"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="ingredients for the dish"
                    value={ingredients}
                    onChange={(e)=> setIngredients(e.target.value)} 

                  
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="instruction"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Instructions
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="instruction for preparation"
                    value={instructions}
                    onChange={(e)=> setInstructions(e.target.value)} 

                  
                  ></textarea>
                </div>

                <div>
                  <button
                    className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </>
  )
}

export default AddNew