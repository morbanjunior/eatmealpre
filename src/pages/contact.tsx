import React from 'react'
import styles from '../styles/Contact.module.css'
import LogoEat from '../image/footerLogo.png'
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import contactImag from '../image/contactImag.png'

const ContactUs = () => {
  return (
    <>
     <Topbar />
     <Nav home={false}/>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '700px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${contactImag})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
  
      }}>
        <div className={styles.wrapperContat}>
          <span className={styles.textHead}>Contact Us</span>
            <div className={styles.containerBody}>
              <div className={styles.containerinput}>
                <input placeholder='Name' type='text' className={styles.input}/>
                <input placeholder='Email' type='email' className={styles.input}/>
              </div>
              {/*  */}
              <div className={styles.containerinput}>
                <input placeholder='Phone' type='text' className={styles.input}/>
                <input placeholder='Subject' type='text' className={styles.input}/>
              </div>
              {/*  */}
              <div className={styles.containerinput}>
                <textarea placeholder='Message'
                cols={34 }
                rows={5}
                className={styles.textarea}
                  />
              </div>
              <div className={styles.buttonContact}>Submit</div>
            </div>
        </div>
      
      </div>
      </>
  )
}

export default ContactUs