import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Index from "./component/Index"
import Home from "./component/Home"
import Favorite from "./component/Favorite"
import Showrecipie from "./component/Showrecipie"
import AuthLayout from "./Layout/AuthLayout"
import MainLayout from "./Layout/MainLayout"
import NotFoundPage from "./component/NotFoundPage"
import AddNew from "./component/AddNew"
// import RecipieDetail, { recipieLoader } from './component/RecipieDetail'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

      <Route path="/" element={<AuthLayout/>}>
          <Route index element ={<Index/>}/>
          {/* <Route path="/sign-up" element ={<Signup/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
      </Route>
      

      <Route path="/" element={<MainLayout/>}>
          {/* <Route path="/index" element={<Index/>} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/add" element={<AddNew/>} />
          <Route path="/favourites" element={<Favorite/>} />
          <Route path="/showrecipie" element={<Showrecipie/>} />
          {/*  <Route path="/recipe/:id" element={<RecipieDetail />} loader={recipieLoader}/> */}
      {/* </Routes> /> */}
          <Route path="/*" element={<NotFoundPage/>} />
      </Route>
      </>
    )
  )

  return (
    <>

        <RouterProvider router={router}/>

    </>
  )
}


export default App
