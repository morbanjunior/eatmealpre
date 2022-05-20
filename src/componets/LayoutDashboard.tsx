import React from 'react'
import Aside from './dashboard/Aside'
import NavBar from './dashboard/NavBar'
import Footer from './Footer'

interface Props{
  children:JSX.Element,
}

const LayoutDashboard: React.FC<Props> = ({children}) => {
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