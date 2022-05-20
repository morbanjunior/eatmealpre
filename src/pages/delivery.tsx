import React from 'react'
import styles from '../styles/Delivery.module.css'
import aboutImag from '../image/aboutImag.png'
import stepOne from '../image/stepOne.png'
import stepTwo from '../image/stepTwo.png'
import stepThree from '../image/stepThree.png'
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import Headerpages from '../componets/Headerpages'


const Delivery = () => {
  return (
      <>
       <Topbar />
       <Nav home={false}/>
       <Headerpages name='How it works'/>
            <div className={styles.comtainerEathome}>
                <div className={styles.deliveywrapper}>
                        <div>
                        <div className={styles.centerRightEat}>
                                <span className={styles.textRightEat}>
                                Step </span><span className={styles.textRight}>One</span>
                            </div>
                            <p className={styles.containerP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            
                        </div>

                    <img src={stepOne} alt="" className={styles.imageheader}/>
                </div>

                <div className={styles.deliveywrapper}>


                    <img src={stepTwo} alt="" className={styles.imageheader}/>
                        <div>
                        <div className={styles.centerRightEat}>
                                <span className={styles.textRightEat}>
                                Step </span><span className={styles.textRight}>Two</span>
                            </div>
                            <p className={styles.containerP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            
                        </div>
                </div>

                <div className={styles.deliveywrapper}>
                        <div>
                        <div className={styles.centerRightEat}>
                                <span className={styles.textRightEat}>
                                Step </span><span className={styles.textRight}>Three</span>
                            </div>
                            <p className={styles.containerP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            
                        </div>

                    <img src={stepThree} alt="" className={styles.imageheader}/>
                </div>
         </div>
      </>
    
  )
}

export default Delivery