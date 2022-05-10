import React from 'react'
import styles from '../styles/Footer.module.css'
import LogoEat from '../image/footerLogo.png'
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
      <div className={styles.containerFooter}>
        
        <div className={styles.footerWrapper}>
            <Link to='/' ><img src={LogoEat} alt="" className={styles.link}/></Link>
          <div>Copyright Ⓒ 2020 - Eat Meal Prep</div>
        </div>
    
      </div>
  )
}

export default Footer