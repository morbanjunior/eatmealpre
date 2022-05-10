import React from 'react'
import styles from '../../styles/Topbar.module.css'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Topbar = () => {

   const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  return (
      <div className={styles.containerTopbar}>
         <div className={styles.topwrapper}>
            <span>Eat well, live well!</span>
            <div className={styles.ContainerIconstop}>
                  <Link to='/register' className={styles.iconTops}>
                     <PersonAddAltIcon className={styles.iconSpace}/>
                    Sign Up
                  </Link>
               
                  <Link to='/login' className={styles.iconTops}>
                     <LoginIcon className={styles.iconSpace}/>
                    <span>Log In</span>
                  </Link>

                  <Link to='/shopcart'  className={styles.iconTops}>
                     <ShoppingCartOutlinedIcon/>
                     {totalQuantity ? <span className={styles.iconTopsShop}>{totalQuantity}</span> : ""}
                  </Link>
            </div>
         </div>
    </div>
  )
}

export default Topbar