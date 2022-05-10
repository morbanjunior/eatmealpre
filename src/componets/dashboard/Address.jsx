import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AddButton from './AddButton';
import styles from '../../styles/address.module.css'
import AddressItem from './AddressItem';
// import ModalAddAddres from './ModalAddAddres';

const Address = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //   if(!isLogin){
    //     navigate('/signin');
    //      }
    // })
    const [toggleStata, SettoggleStata] = useState(1);
    const [addresData, SetAddresData] = useState(true);
    const [deliveryData, SetDeliveryData] = useState(false);

    const [modalIsOpen, SetIsOpen] = useState(false);

    const [emptyInput, SetEmptyInput] = useState("")

    const TogleTab = (index) =>{
     SettoggleStata(index);
    }

    function CloseModal() {
        SetIsOpen(false);
        SetEmptyInput('');
      }

  return (
    <div >
        <div className={styles.addressContainer}>
        <ul className="nav nav-tabs">
            <li className="nav-item ">
                <a className={toggleStata ===1 ? "nav-link active liContainer " : "nav-link liContainer"} onClick={()=>TogleTab(1)}>Billing Address</a>
            </li>
            <li className="nav-item ">
                <a className={toggleStata ===2 ? "nav-link active liContainer" : "nav-link liContainer"} onClick={()=>TogleTab(2)}>Delivery Address</a>
            </li>
       </ul>
       {/* Componente  */}
        { toggleStata ===1 ? 
        ( <>
            <AddButton SetIsOpen={SetIsOpen} name="Billing"/>
        <div className={styles.tapContainer}>
           {
               addresData ? (
               <>
                <AddressItem/>
                <AddressItem/>
                <AddressItem/>
               </>
               ) : (<div className={styles.nodataContainer}>No Billing Address Added</div>)
           } 
           {/* <ModalAddAddres modalIsOpen={modalIsOpen} CloseModal={CloseModal} name="Billing" emptyInput={emptyInput} SetEmptyInput={SetEmptyInput}/> */}
         </div>
         </>
         ) : (
             <>
              <AddButton SetIsOpen={SetIsOpen} name="Delivery"/>
         <div className={styles.tapContainer}>
         {
               deliveryData ? (
               <>
                <AddressItem/>
                <AddressItem/>
                <AddressItem/>
               </>
               ) : (<div className={styles.nodataContainer}>No Deliveries Addres Added</div>)
           } 
        </div>  
          {/* <ModalAddAddres modalIsOpen={modalIsOpen} CloseModal={CloseModal} name="Delivery" emptyInput={emptyInput} SetEmptyInput={SetEmptyInput}/> */}
        </>
        )     
        }
       </div>
    </div>
  )
}

export default Address