import React from 'react'
import styles from '../../styles/Header.module.css'
import fresaPlate from '../../image/fresaPlate.png'
import facebook from '../../image/facebook.png'
import instagram from '../../image/instagram.png'
import twitter from '../../image/twitter.png'
import yelp from '../../image/yelp.png'
import backgroundImag from '../../image/backgroundImag.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div style={{
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${ backgroundImag})`,
        backgroundRepeat: 'no-repeat',
    }}>
      <div className={styles.headerWrapper}>
        <img src={fresaPlate} alt="" className={styles.imageheader}/>
        
          <div>
            <div className={styles.centerRightHeader}>
                  <span className={styles.textRightHeader}>
                     Meal Prep  Delivery </span>
                      <span className={styles.textRightHeader}>
                    
                      for <span style={{color: '#FF4646'}}>Everyone</span>
                        </span>
              </div>
              <p className={styles.containerP}>
              Healthy Meal Prep Chicago  </p>
              <Link to='/categories'><div className={styles.buttomHeader}>Order Now</div></Link>
          </div>
           
        <div className={styles.rightHeader}>
          <div className={styles.containerLeftsocial}>
            <div className={styles.socialContainer}>
              <span className={styles.followus}>FOLLOW US</span>
              <img src={facebook} alt="" className={styles.clickSocial}/>
              <img src={instagram} alt="" className={styles.clickSocial}/>
              <img src={twitter} alt="" className={styles.clickSocial}/>
              <img src={yelp} alt="" className={styles.clickSocial}/>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header