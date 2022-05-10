import React from 'react'
import styles from '../../styles/SomeFeatures.module.css'
import locationIcon from '../../image/locationIcon.png'
import flor from '../../image/flor.png'
import realfood from '../../image/realfood.png'

const SomeFeatures = () => {
  return (
        <div className={styles.containerSomeFeatures}>
          <div className={styles.someWrapper}>
              <span className={styles.textspan}>SOME FEATURES</span>
              <span className={styles.textH1}>What We Offer</span>

              <div className={styles.ItemsContainerFeatures}>
                  <div className={styles.itemFeatures}>
                    <img src={locationIcon} alt="" className={styles.imageheader}/>
                      <h1><span>Earn</span> & Save</h1>
                  </div>

                  <div className={styles.itemFeatures}>
                    <img src={flor} alt="" className={styles.imageheader}/>
                      <h1><span>Cooked with</span> Love</h1>
                  </div>

                  <div className={styles.itemFeatures}>
                    <img src={realfood} alt="" className={styles.imageheader}/>
                      <h1><span>100%</span> Fresh</h1>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default SomeFeatures