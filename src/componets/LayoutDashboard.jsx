import React from 'react'
import Aside from './dashboard/Aside'
import NavBar from './dashboard/NavBar'
import Footer from './Footer'

const LayoutDashboard = ({children}) => {
  return (
    <div className='wrapper'>
        <NavBar/>
        <Aside/>
        <div className='content-wrapper'>
          {children}
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default LayoutDashboard