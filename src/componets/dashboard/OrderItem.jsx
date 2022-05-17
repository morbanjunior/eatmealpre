import React from 'react'
import styles from '../../styles/order.module.css'
import meal3 from "../../image/meal3.png"

const OrderItem = () => {
  return (
    <div >
    <div className={styles.ordercontainer}>
       <div className={styles.OrderItem}>
         
         <div className={styles.containerdetails}>
           <div><img src={meal3} className={styles.imgContainer} title="One Meal Prep"  /></div>
             <div className={styles.containerSubdetails}>
               <h6>Order Number:</h6>
                 <div className={styles.containerid}>
                   <p className={styles.containerp}>CD9D30</p>
                   <p className={styles.containerFood}>Food</p>
                   <p className={styles.containerAdmin}>Admin</p>
                 </div>
               <p className={styles.containerdeliverid}>Deliver</p>
               <div className={styles.Containerrenewid}>Renew Order</div>
             </div>
             <div className={styles.containerSubdetails}>
               <h6>Total Amount</h6>
               <p className={styles.containerp}>$0.00</p>
               <div className={styles.containerid}>
                   <p className={styles.containerAdmin}>Neworder</p>
                   <p className={styles.containerFood}>One Time</p>
                 </div>
                 <p className={styles.containerpaidByid}>Paid By Manually</p>
             </div>
             <div className={styles.containerSubdetails}>
               <h6>Ship To</h6>
               <p className={styles.containerp}>Ramon Morban</p>
               <p className={styles.containerp}>morbanjunior@gmail.com</p>
               <p className={styles.containerp}>Ph: +1 (809) 526-9313 </p>
               </div>
             <div className={styles.containerSubdetails}>
               <h6>Quantity</h6>
               <p className={styles.containerp}>Food: 4</p>
               <p className={styles.containerp}>Combo: 0</p>
               <p className={styles.containerp}>Grocery: 0</p>
              </div>
              <div className={styles.containerSubdetailsEnd}>
               <h6>Order Placed</h6>
               <p className={styles.containerp}>03-Mar-2022</p>
               <p className={styles.containerp}>08:51 AM</p>
               <p className={styles.Containerrenewid}>Order Details</p>
               <p className={styles.containerp}>Exp Delivery Date:</p>
               <p className={styles.containerAdmin}>Mar 06, 2022</p>
              </div>

          
           </div>
         </div>
    </div>
  
 </div>
  )
}

export default OrderItem;
