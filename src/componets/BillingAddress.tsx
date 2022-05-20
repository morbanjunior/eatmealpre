import React from 'react'
import styles from '../styles/BillingAddress.module.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcon from '@mui/icons-material/Add';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Checkbox from '@mui/material/Checkbox';


const BillingAddress = () => {
  return (
     <>
   <div className={styles.locationAddContainer}>
     <div className={styles.ContainerBillingIcon}>
        <LocationOnOutlinedIcon className={styles.BillingTextIcom}/>
        <span className={styles.BillingTextHeader}>Billing Address</span>
     </div>
     <div>
       <div className={styles.bottomAddNewBilling}>
       <span>Add NEW</span>
       <AddIcon/>
       </div>
     </div>
   </div>
   {/* billing */}

   <div className={styles.addressContainerCart}>
      <div className={styles.wrapAddress}>
         <div className={styles.IncomMotoconatiner}>
            <MopedOutlinedIcon className={styles.IncomMoto}/>
            <span className={styles.ShiptoText}>Ship to</span>
         </div>
         <div className={styles.IncomMotoconatinerTwo}>
            <div className={styles.IncomMotoconatiner}>
               <PersonIcon className={styles.IncomMoto}/>
               <span className={styles.ShiptoTextUsuario}>Michael williams</span>
            </div>
            <div className={styles.IncomMotoconatiner}>
               <LocationOnOutlinedIcon className={styles.IncomMoto}/>
               <span className={styles.ShiptoTextUsuario}>833 West Haines Street,
                   Chicago, Ilinois, United States</span>
            </div>
            <div className={styles.IncomMotoconatiner}>
               <LocalPhoneIcon className={styles.IncomMoto}/>
               <span className={styles.ShiptoTextUsuario}>312-634-6118</span>
            </div>

         </div>
         <div className={styles.IncomMotoconatinerBottom}>
         <div className={styles.IncomMotoconatiner}>
            <MopedOutlinedIcon className={styles.IncomMoto}/>
            <span className={styles.ShiptoText}>Deliver Address</span>
         </div>
         <div>
         <Checkbox
                            defaultChecked
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
            <span className={styles.ShiptoTextSameBilling}>Same as Billing Address</span>
         </div>
         </div>
      </div>
            
   </div>

   </>
  )
}

export default BillingAddress

