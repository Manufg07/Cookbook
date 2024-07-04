
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import HeaderHome from '../component/HeaderHome'

const MainLayout = () => {
  return (
    <>
    <HeaderHome/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout