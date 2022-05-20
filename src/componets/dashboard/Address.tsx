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
    const [toggleStata, SettoggleStata] = useState<number>(1);
    const [addresData, SetAddresData] = useState<boolean>(true);
    const [deliveryData, SetDeliveryData] = useState<boolean>(false);

    const [modalIsOpen, SetIsOpen] = useState<boolean>(false);

    const [emptyInput, SetEmptyInput] = useState<string>("")

    const TogleTab = (index:number) =>{
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