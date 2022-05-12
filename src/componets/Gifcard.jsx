import React from 'react'
import styles from '../styles/gifcard.module.css'
import AddIcon from '@mui/icons-material/Add';
import ModalGiftcard from './ModalGiftcard';

const Gifcard = () => {
  return (
    <div >
        <div className={styles.contaienrGif}>
            <div className={styles.headertop}>
                <input placeholder='Search by Name or email' className={styles.inputSearchGif}/>
                <div className={styles.buttomGift} data-toggle="modal" data-target="#exampleModalCenter">
                    <span>NEW GIFT CART</span>
                    <AddIcon style={{ marginLeft: 10}}/>
                </div>
                <ModalGiftcard/>
            </div>
            <div className={styles.itemGiftWrap}>
                {/* Body Items header*/}  

                <div className={styles.gifContainerTop} style={{backgroundColor: '#1EAD5E'}}>
                     <div className={styles.customGif}>
                         <div>
                         <span style={{color: '#fff', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '20px', marginRight: 10}}>Gifted to:</span>
                          <span style={{color: 'black', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '18px'}}>Ramon Morban</span>
                         </div>
                        
                        <div className={styles.itemsGif}>
                          <di className={styles.gifTableItems}  style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>S No:</span>
                          <span className=''>001</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Email:</span>
                           <span className=''>morbanjunior@gmail.com</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Gifted Amount:</span>
                          <span className=''>$100</span>
                          </di>
                        
                        </div>
                        </div>
                </div>

                {/* Body Items header*/}

                <div className={styles.gifContainerTop} style={{backgroundColor: '#1EAD5E'}}>
                     <div className={styles.customGif}>
                         <div>
                         <span style={{color: '#fff', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '20px', marginRight: 10}}>Gifted to:</span>
                          <span style={{color: 'black', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '18px'}}>Hans Alberto</span>
                         </div>
                        
                        <div className={styles.itemsGif}>
                          <di className={styles.gifTableItems}  style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>S No:</span>
                          <span className=''>002</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Email:</span>
                           <span className=''>hans@gmail.com</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Gifted Amount:</span>
                          <span className=''>$300</span>
                          </di>
                        
                        </div>
                        </div>
                </div>

                {/* Body Items header*/}

                <div className={styles.gifContainerTop} style={{backgroundColor: '#1EAD5E'}}>
                     <div className={styles.customGif}>
                         <div>
                         <span style={{color: '#fff', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '20px', marginRight: 10}}>Gifted to:</span>
                          <span style={{color: 'black', fontFamily: 'Poppins',fontStyle: 'normal',
                         fontWeight: '700',fontSize: '18px'}}>Wally Hesmaira</span>
                         </div>
                        
                        <div className={styles.itemsGif}>
                          <di className={styles.gifTableItems}  style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>S No:</span>
                          <span className=''>003</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Email:</span>
                           <span className=''>wally@gmail.com</span>
                          </di>

                          <di className={styles.gifTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorGif}>Gifted Amount:</span>
                          <span className=''>$100</span>
                          </di>
                        
                        </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Gifcard