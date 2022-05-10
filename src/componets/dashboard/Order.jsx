import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../../styles/order.module.css'
// import {FilterList} from "@material-ui/icons";
// import Select from 'react-select'
// import BottomBar from '../../../../componets/bottomBar/BottomBar';
import Orderitem from './OrderItem'


const orderList = [{name:"1"}, {name:"2"}, {name:"3"}, {name:"4"},]

const Order = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!isLogin){
  //     navigate('/signin');
  //      }
  // })

  const options = [
    { value: 'all', label: 'All' },
    { value: 'newOrder', label: 'New Order' },
    { value: 'preparing', label: 'Preparing' },
    { value: 'parking', label: 'Parking' },
    { value: 'outofDelivery', label: 'Out of Delivery' },
    { value: 'delivered', label: 'Delivered' }
  ]
  // const MyComponent = () => (
    // <Select 
    // options={options}
    // defaultValue={options[0]} 
    // theme={(theme) => ({
    //   ...theme,
    //   borderRadius: 0,
    //   colors: {
    //     ...theme.colors,
    //     primary25: 'green',
    //     primary: 'green',
    //   },
      
    // })}
    // />
  // )
  return (
    <div>
      <div className='order-container'>
        <div className={styles.inputContainer}>
          <input className={styles.inputProp} type="text" placeholder='Search by Order # / Mobile Number'/>
                        <div className={styles.inputFilter}>
                        {/* <MyComponent/> */}
                        </div>
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