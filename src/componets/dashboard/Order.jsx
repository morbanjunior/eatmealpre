import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../../styles/order.module.css'
// import {FilterList} from "@material-ui/icons";
// import Select from 'react-select'
// import BottomBar from '../../../../componets/bottomBar/BottomBar';
import Orderitem from './OrderItem'


const orderList = [{name:"1"}, {name:"2"}, {name:"3"}, {name:"4"},]

const Order = () => {


  const options = [
    { value: 'all', label: 'All' },
    { value: 'newOrder', label: 'New Order' },
    { value: 'preparing', label: 'Preparing' },
    { value: 'parking', label: 'Parking' },
    { value: 'outofDelivery', label: 'Out of Delivery' },
    { value: 'delivered', label: 'Delivered' }
  ]


  return (
    <div>
      <div >
        <div className={styles.inputContainer}>
          <input className={styles.inputProp} type="text" placeholder='Search by Order # / Mobile Number'/>
               <select name="lifactive" id="lifactive" className={styles.inputFilter}>
                   <option value="Lightly Active">Lightly Active</option>
                   <option value="Moderately Active">Moderately Active</option>
                   <option value="Very Active">Very Active</option>
                   <option value="Extra Active">Extra Active</option>
               </select>
                  
         
        </div>
      
        {
          orderList.map((item, index)=>(

            <Orderitem item={item} key={index}/>
          ))
        
          }
         
        </div>
      </div>
  )
}

export default Order