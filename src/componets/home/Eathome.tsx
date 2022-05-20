import React from 'react'
import styles from '../../styles/Eathome.module.css'
import hamburguesa from '../../image/hamburguesa.png'
import {Link} from 'react-router-dom'

const Eathome = () => {
  return (
    <div className={styles.comtainerEathome}>
          <div className={styles.eathomeWrapper}>
                <div className={styles.rightEat}>
                  <span className={styles.topsmallText}>EAT MEAL PREP</span>
                  <div className={styles.centerRightEat}>
                        <span className={styles.textRightEat}>
                        We Serve the Best
                         </span>
                            <span className={styles.textRightEat}>
                            Newest Breakfast</span>
                    </div>
                    <p className={styles.containerP}>
                    Our classic breakfast items are both traditional and modern, 
ranging from our traditional All American Breakfast to our more modern overnight oats. These healthy
 breakfast items are what allows you to succeed when you're meal prepping! </p>
     <Link to='/categories'><div className={styles.buttomHeader}>Explore Food</div></Link>
                </div>

                <img src={hamburguesa} alt="" className={styles.imageheader}/>
              
              
          </div>
      </div>
  )
}

export default Eathome