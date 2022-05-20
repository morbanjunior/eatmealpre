import React from 'react'
import styles from '../../../styles/wallet.module.css'
import walletAdd from "../../../image/wallet-add.png"
import cart from "../../../image/cart.png"
import { TranHistModel } from '../../../model/TranHistModel';


interface Props{
  walletItem:TranHistModel;
}

const Transactions: React.FC<Props> = ({walletItem}) => {
    const less= '-'
    const add='+'
  return (
    <div className={styles.centerTotalRight}>
            <div className={styles.headerContainerWallet}>
                              <div className={styles.imgContainerWallet}>
                                  <img src={walletItem.transType=== "add" ?  walletAdd : cart} style={{marginTop: '0.6rem'}} width={60} height={60} />
                                  <div className={styles.imgContainerText}>
                                    <span className={styles.headerTextWallet} >{walletItem.name}</span>
                                    <span className={styles.headerTextWalletsub}>{walletItem.date}</span>
                                  </div>

                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span className={walletItem.transType=== "add" ? styles.totalWalletadd : styles.totalWalletless}>{walletItem.transType== "add" ? add : less} ${walletItem.amount}</span>
                              </div>
                              <div className={styles.bottomWalletContainer}>
                                  <span></span>
                                  <span className={styles.headerTextWalletsub}>Trans No: {walletItem.Trans}</span>
                                  <span className={styles.totalWalletBal}>Bal: ${walletItem.bal}</span>
                              </div>
                          </div>
                          </div>
  )
}

export default Transactions