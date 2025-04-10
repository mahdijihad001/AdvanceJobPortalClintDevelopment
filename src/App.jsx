import React from 'react'
import Navber from './Components/Navber'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navber />
      <div className='pt-[60px]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App