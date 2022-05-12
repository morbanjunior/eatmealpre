import React, { useState } from 'react'
import styles from '../../styles/wallet.module.css'
import CreditCardForm from './creditCard/CreditCardForm'
import Transactions from './walletTransactions/Transactions'

const transactionsHistorial =[
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
                                <spen className={styles.textDigitalWallet }>Digital Wallet</spen>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <spen className={styles.totalBalance}>Total Balance</spen>
                            </div>
                           
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.TotalContainerWalle}>
                            <i className="fa fa- fa-wallet IconWalletTotal"/>
                            <spen className={styles.TotalTextwallet}> $724.75</spen>
                        </div>

                        <div className={styles.walletContainerId}>
                            <spen className={styles.textIdWallet}>Wallet ID: </spen>
                            <spen className={styles.textId}>14F2BEB807073AC5D1171543CCAE49</spen>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={styles.walletItem}>
                    <div className={styles.walletContainer}>
                        <div className={styles.headerTextLeft}>
                            <div className={styles.ContainerDecoration}>
                            <i className="fas fa-coins" />
                                <spen className={styles.textDigitalWallet}>Add AMP Bucks</spen>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <spen className={styles.totalBalance}>Add AMP Bucks to Wallet</spen>
                            </div>
                          
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.addAmp}>
                           <spen className={styles.lableAmp}>Enter Amount of dollars you want to convert($)</spen>
                           <spen className={styles.redspen}>*</spen>
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
                                <spen className={styles.textDigitalWallet}>Send AMP Bucks</spen>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <spen className={styles.totalBalance}>Send AMP Bucks to User</spen>
                            </div>
                           
                        </div>
                        <div className={styles.centerTotal}>
                        <div className={styles.addAmp}>
                           <spen className={styles.lableAmp}>Receiver Wallet ID </spen>
                           <spen className={styles.redspen}>*</spen>
                        </div>

                        <div className={styles.inputWalletContainer}>
                           <input className={styles.inputWallet} type='number'/>
                        </div>

                        <div className={styles.addAmp}>
                           <spen className={styles.lableAmp}>Enter Amount of dollars you want to convert ($) </spen>
                           <spen className={styles.redspen}>*</spen>
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
                                <spen className={styles.textDigitalWallet }>Transactions</spen>
                            </div>
                            <div className={styles.totalBalanceContainer}>
                                <spen className={styles.totalBalance}>All Transactions</spen>
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