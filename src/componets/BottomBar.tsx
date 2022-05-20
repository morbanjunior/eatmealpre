import React from 'react'
import styles from '../styles/BottomBar.module.css'


const BottomBar = () => {
  return (
    <div className='bottomBarContainer'>
        <div className='right'><p>2022 © All Meal Prep</p></div>
        <div className='leftBotton'>
            <p className='itemsContainer'>About Us</p>
            <p className='itemsContainer'>Help</p>
            <p className='itemsContainer'>Contact Us</p>
        </div>
    </div>
  )
}

export default BottomBar