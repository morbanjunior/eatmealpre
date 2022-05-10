import React, { useState } from 'react'
import meal2 from "../image/meal2.png"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {useDispatch} from 'react-redux'
import {removeFromCart, decreaseCart, increaseCart,getTotals} from '../redux/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/shopCart.module.css'

const CartComponents = ({item}) => {

  const dispatch = useDispatch();


  const HandlerRemove = (item) =>{
    dispatch(removeFromCart(item));
    dispatch(getTotals());
  }
  const HandlerDecrease = (item) =>{
    dispatch(decreaseCart(item));
    dispatch(getTotals());
  }

   const HandlerIncrease = () => {
    
    dispatch(increaseCart(item));
    dispatch(getTotals());
    
  }

  return (
              <div className={styles.shopCartListItemMeals}>
                <div className={styles.containerCenter}>
                  <div className={styles.headerContainerShop}>
                      <div className={styles.constainerRightHeaderShop}>
                      <img src={meal2} className={styles.ImgShop} title="One Meal Prep" alt  />
                        <div className={styles.titleShopHeader}>
                          <span className={styles.titleShop}>{item.name}</span>
                            <div className={styles.subtotalTitleShop}>
                               <span className={styles.subtotalTitlefirstspan}>Sub-Total:</span>
                               <span className={styles.subtotalTitleTwospan} >${parseFloat(item.price * item.cartQuantity).toFixed(2)}</span>
                            </div>
                            <div className={styles.descShop} >
                             <div className={styles.detailsProteinsShop}>
                             <span className={styles.detailsProteinsShopColor}>50.0 g</span>
                             <span className={styles.detailsProteinsShopColorTwo}>Protein</span>
                             </div>

                             <div className={styles.detailsProteinsShop}>
                             <span className={styles.detailsProteinsShopColor}>6.0 g</span>
                             <span className={styles.detailsProteinsShopColorTwo}>Fat</span>
                             </div>

                             <div className={styles.detailsProteinsShop}>
                             <span className={styles.detailsProteinsShopColor}>6.0 g</span>
                             <span className={styles.detailsProteinsShopColorTwo}>Fat</span>
                             </div>

                             <div className={styles.detailsProteinsShop}>
                             <span className={styles.detailsProteinsShopColor}>50.0 g</span>
                             <span className={styles.detailsProteinsShopColorTwo}>Protein</span>
                             </div>
                            </div>
                        </div>
                      </div>
                      <div>
                      <div className={styles.constainerLeftHeaderShop}>
                        <span className={styles.pricesShop}>${item.price}</span>
                        <div className={styles.buttonContainerShop}>
                        <RemoveIcon className={styles.MasMenoShop} onClick={() =>HandlerDecrease(item)} />
                        <span className={styles.CartQaantityShop}>{item.cartQuantity}</span>
                        <AddIcon className={styles.MasMenoShop} onClick={() =>HandlerIncrease(item)} />
                        </div>
                        </div>
                            <div className={styles.removeBottonShopContainer}>
                              <DeleteIcon className={styles.removeBottonShop} onClick={() =>HandlerRemove(item)}/>
                            </div>
                      </div>
                        
                  </div>
                </div>
                  
              </div>


  )
}

export default CartComponents