import React, { useState } from 'react'
import { TranHistModel } from '../../model/TranModel'
import styles from '../../styles/wallet.module.css'
import CreditCardForm from './creditCard/CreditCardForm'
import Transactions from './walletTransactions/Transactions'

const transactionsHistorial:TranHistModel[] =[
    {
        transType: 'add',
        name: 'Earned from Order (CD9D30)',
        date: '03-Mar-2022',
        Trans: '65B51487FE',
        amount: 2.00,
        bal: 724.75,
    },

    {
        transType: 'less',
        name: 'Earned from Order (CD9D30)',
        date: '03-Mar-2022',
        Trans: '65B51487FE',
        amount: 2.00,
        bal: 724.75,
    },
    {
        transType: 'add',
        name: 'Earned from Order (CD9D30)',
        date: '03-Mar-2022',
        Trans: '65B51487FE',
        amount: 2.00,
        bal: 724.75,
    },

    {
        transType: 'less',
        name: 'Earned from Order (CD9D30)',
        date: '03-Mar-2022',
        Trans: '65B51487FE',
        amount: 2.00,
        bal: 724.75,
    },
]


const Wallet = () => {


  return (
    <div >
        <div className={styles.constainerItemsWallet}>
            <div className={styles.sideWalletLeft}>
                <div className={styles.walletItem}>
                    <div className={styles.walletContainer}>
                        <div className={styles.headerTextLeft}>
                            <div className={styles.ContainerDecoration}>
                                <i className="fa fa- fa-wallet "/>
                                <span className={styles.textDigitalWallet }>Digital Wallet</span>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <span className={styles.totalBalance}>Total Balance</span>
                            </div>
                           
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.TotalContainerWalle}>
                            <i className="fa fa- fa-wallet IconWalletTotal"/>
                            <span className={styles.TotalTextwallet}> $724.75</span>
                        </div>

                        <div className={styles.walletContainerId}>
                            <span className={styles.textIdWallet}>Wallet ID: </span>
                            <span className={styles.textId}>14F2BEB807073AC5D1171543CCAE49</span>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={styles.walletItem}>
                    <div className={styles.walletContainer}>
                        <div className={styles.headerTextLeft}>
                            <div className={styles.ContainerDecoration}>
                            <i className="fas fa-coins" />
                                <span className={styles.textDigitalWallet}>Add AMP Bucks</span>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <span className={styles.totalBalance}>Add AMP Bucks to Wallet</span>
                            </div>
                          
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.addAmp}>
                           <span className={styles.lableAmp}>Enter Amount of dollars you want to convert($)</span>
                           <span className={styles.redspen}>*</span>
                           <i className="fas fa-info-circle iconInfo" />
                        </div>

                        <div className={styles.inputWalletContainer}>
                           <input className={styles.inputWallet} type='number'/>

                           <div>
                           <CreditCardForm />
                           </div>
                          
                           <div className={styles.addAMPButtom}>Add AMP bucks</div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={styles.walletItem}>
                    <div className={styles.walletContainer}>
                        <div className={styles.headerTextLeft}>
                            <div className={styles.ContainerDecoration}>
                              <i className="fas fa-coins" />
                                <span className={styles.textDigitalWallet}>Send AMP Bucks</span>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <span className={styles.totalBalance}>Send AMP Bucks to User</span>
                            </div>
                           
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.addAmp}>
                           <span className={styles.lableAmp}>Receiver Wallet ID </span>
                           <span className={styles.redspen}>*</span>
                        </div>

                        <div className={styles.inputWalletContainer}>
                           <input className={styles.inputWallet} type='number'/>
                        </div>

                        <div className={styles.addAmp}>
                           <span className={styles.lableAmp}>Enter Amount of dollars you want to convert ($) </span>
                           <span className={styles.redspen}>*</span>
                        </div>

                        <div className={styles.inputWalletContainer}>
                           <input className={styles.inputWallet} type='number'/>
                        </div>

                           <div className={styles.addAMPButtom}>Send AMP Bucks</div>
                        </div>
                    </div>
                </div>

            </div>

            
            {/* Left */}
            <div className={styles.sideWalletRight}>
            <div className={styles.walletItem}>
                    <div className={styles.walletContainer}>
                        <div className={styles.headerTextLeft}>
                            <div className={styles.ContainerDecoration}>
                               <i className="fas fa-coins" />
                                <span className={styles.textDigitalWallet }>Transactions</span>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <span className={styles.totalBalance}>All Transactions</span>
                            </div>
                           
                        </div>
                       
                          {
                             transactionsHistorial.map((walletItem, index)=>(
                             <Transactions walletItem={walletItem} key={index}/>
                             ))
                               }
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Wallet