import React from 'react'
import styles from '../../styles/WeServe.module.css'
import pinchoMeal from '../../image/pinchoMeal.png'
import {Link} from 'react-router-dom'


const WeServe = () => {
  return (
    <div className={styles.comtainerEathome}>
        <div className={styles.eathWrapper}>
            <img src={pinchoMeal} alt="" className={styles.imageheader}/>
              <div className={styles.containerText}>
                <span className={styles.topsmallText}>EAT MEAL PREP</span>
                <div className={styles.centerRightEat}>
                      <span className={styles.textRightEat}>
                      We Serve the Best
                      </span>
                          <span className={styles.textRightEat}>
                          Custom Meal Prep
                          Options</span>
                  </div>
                  <p className={styles.containerP}>
                  We're proud to share that we are one of the few meal prep
                  companies that make CUSTOM MEAL PREP options available for you.
                   Not just generic meals but custom meal preps as well! </p>
                   <Link to='/categories'><div className={styles.buttomHeader}>Order Now</div></Link>
              </div>
        </div>
    </div>
  )
}

export default WeServe