import React, {useState} from 'react'
import styles from '../../styles/Amounts.module.css'
import ensalada from '../../image/ensalada.png'


const Amounts = () => {
  return (
     <div className={styles.containerAmount}>
         <div className={styles.amountWrapper}>
            <div className={styles.containerAmountBody}>
               <span>50+</span>
               <span>MEALS</span>
            </div>
            <div className={styles.containerAmountBody}>
               <span>4</span>
               <span>CHEFS</span>
            </div>
            <div className={styles.containerAmountBody}>
               <span>1000+</span>
               <span>CUSTOMERS</span>
            </div>
            <div className={styles.containerAmountBody}>
               <span>25</span>
               <span>RESTAURANTS</span>
            </div>
         </div>
      </div>
  )
}

export default Amounts