import React from 'react'
import styles from  '../styles/faq.module.css'
const Faq = () => {
  return (
    <>
       <section className={styles.faqContainerItems}>
  <div className="inner">
    <div className="row">
      <div className="col-12 text-center">
        <p>Frequently Asked Questions</p>
        <h2 className="sub-heading">FAQ</h2>
      </div>
    </div>
    <div className="row">
      {/*  */}
      <div className={styles.containershadow}>
      <div className="col-12 faq-box backgroundFaq">
        <div className="row">
          <div className="col-12.col-lg-1.col-md-1 mx-auto my-auto">
            <i className="fas fa-question fa-3x" style={{color: '#30475E'}} />
          </div>
          <div className="col-12 col-lg-11 col-md-11 mx-auto my-auto">
            <h5>What is One Meal Prep</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.</p>
          </div>
        </div>
      </div>
      </div>
      {/*  */}
      <div className={styles.containershadow}>
      <div className="col-12 faq-box backgroundFaq">
        <div className="row">
          <div className="col-12.col-lg-1.col-md-1 mx-auto my-auto">
            <i className="fas fa-question fa-3x" style={{color: '#30475E'}} />
          </div>
          <div className="col-12 col-lg-11 col-md-11 mx-auto my-auto">
            <h5>What is One Meal Prep</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.</p>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.containershadow}>
      <div className="col-12 faq-box backgroundFaq">
        <div className="row">
          <div className="col-12.col-lg-1.col-md-1 mx-auto my-auto">
            <i className="fas fa-question fa-3x" style={{color: '#30475E'}} />
          </div>
          <div className="col-12 col-lg-11 col-md-11 mx-auto my-auto">
            <h5>What is One Meal Prep</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Faq