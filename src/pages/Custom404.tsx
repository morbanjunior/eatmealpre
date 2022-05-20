import React from 'react'
import styles from '../styles/Custom404.module.css'
import LogoEat from '../image/LogoEat.png'
import notfound from '../image/notfound.png'
import { Link } from 'react-router-dom'


const Custom404 = () => {
  return (
    <div className={styles.container404}>
       <div className={styles.container404Body}> 
         <img src={LogoEat} alt="" className={''}/>
         <h1>Page not found!</h1>
       </div>
       <img src={notfound} alt="" className={''}/>
       <Link to='/contact'><div className={styles.notfoundButtom}>Contact Us</div></Link>
   </div>
  )
}

export default Custom404