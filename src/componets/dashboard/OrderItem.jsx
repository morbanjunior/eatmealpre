import React from 'react'
import styles from '../../styles/order.module.css'
import meal3 from "../../image/meal3.png"

const OrderItem = () => {
  return (
    <div className='d-flex flex-wrap'>
    <div className={styles.itemContainer}>
       <div className={styles.OrderItem}>
         
         <div className='container-details'>
           <div><img src={meal3} className="img-fluid img-Container" title="One Meal Prep"  /></div>
             <div className="container-Subdetails">
               <h6>Order Number:</h6>
                 <div className='container-id'>
                   <p className="container-p">CD9D30</p>
                   <p className="container-p food-id">Food</p>
                   <p className="container-p admin-id">Admin</p>
                 </div>
               <p className="container-p deliver-id">Deliver</p>
               <div className="container-p renew-id">Renew Order</div>
             </div>
             <div className="container-Subdetails">
               <h6>Total Amount</h6>
               <p className="container-p">$0.00</p>
               <div className='container-id'>
                   <p className="container-p admin-id">Neworder</p>
                   <p className="container-p food-id">One Time</p>
                 </div>
                 <p className="container-p paidBy-id">Paid By Manually</p>
             </div>
             <div className="container-Subdetails">
               <h6>Ship To</h6>
               <p className="container-p">Ramon Morban</p>
               <p className="container-p">morbanjunior@gmail.com</p>
               <p className="container-p">Ph: +1 (809) 526-9313 </p>
               </div>
             <div className="container-Subdetails">
               <h6>Quantity</h6>
               <p className="container-p">Food: 4</p>
               <p className="container-p">Combo: 0</p>
               <p className="container-p">Grocery: 0</p>
              </div>
              <div className="container-SubdetailsEnd">
               <h6>Order Placed</h6>
               <p className="container-p">03-Mar-2022</p>
               <p className="container-p">08:51 AM</p>
               <p className="container-p renew-id">Order Details</p>
               <p className="container-p">Exp Delivery Date:</p>
               <p className="container-p admin-id">Mar 06, 2022</p>
              </div>

          
           </div>
         </div>
    </div>
  
 </div>
  )
}

export default OrderItem;
