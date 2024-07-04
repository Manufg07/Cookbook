import React from 'react'
import HeaderIndex from '../component/HeaderIndex'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
    <HeaderIndex/>
    <Outlet/>
    </>
  )
}

export default AuthLayout