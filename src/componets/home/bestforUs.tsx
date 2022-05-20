import React, {useState} from 'react'
import styles from '../../styles/BestforUs.module.css'
import ensalada from '../../image/ensalada.png'
import backgroundImag from '../../image/maskGroup.png'


const BestforUs = () => {

const [selectedChoose, SetselectedChoose]=useState(true);

  return (
      <>
    <div style={{
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${ backgroundImag})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        // marginTop:' 140px',
        height:'auto'
    }}>
            <div className={styles.bestwrapper}>
                <h1>Choose The Best from Us</h1>
                <div className={styles.containerHeaderChoose}>
                    <div className={styles.topchoose}>
                        <div className={styles.itemschooseContainer}>
                            <span className={styles.dividchoose}>
                                MEAL PREP MENU</span>
                            <div>|</div>
                            <span className={selectedChoose ? styles.itemschooseContainerActivo : styles.dividchoose}>NEW MENU FOOD</span>
                            <div>|</div>
                            <span className={styles.dividchoose}>KETO MEALS</span>
                            <div>|</div>
                            <span className={styles.dividchoose}>DIABETIC MEALS</span>
                            <div>|</div>
                            <span className={styles.dividchoose}>BREAKFAST</span>
                            
                        </div>
                    </div>
                    <div className={styles.bootomchoose}>
                       <div className={styles.bootomItemsChoose}>
                            <div className={styles.containerItemsChoose}>
                                {/* itmem */}
                              <div className={styles.itemschooseBody}>
                              <img src={ensalada} alt="" className={styles.imageLogo}/>
                              <div className={styles.decoration}></div>
                              <span>Fried Broccoli with
                                Garlic and Shrimp</span>
                                <h2>$8.25</h2>
                              </div>
                              {/* end Items */}

                                {/* itmem */}
                                <div className={styles.itemschooseBody}>
                              <img src={ensalada} alt="" className={styles.imageLogo}/>
                              <div className={styles.decoration}></div>
                              <span>Fried Broccoli with
                                Garlic and Shrimp</span>
                                <h2>$8.25</h2>
                              </div>
                              {/* end Items */}

                                {/* itmem */}
                                <div className={styles.itemschooseBody}>
                              <img src={ensalada} alt="" className={styles.imageLogo}/>
                              <div className={styles.decoration}></div>
                              <span>Fried Broccoli with
                                Garlic and Shrimp</span>
                                <h2>$8.25</h2>
                              </div>
                              {/* end Items */}
                       
                            </div>
                       
                       
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
   
      </>
    )
}

export default BestforUs