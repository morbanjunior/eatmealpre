import React from 'react'
import styles from '../../styles/Testimonial.module.css'
import testimonioalProfile from '../../image/testimonioalProfile.png'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import backgroundTestimonio from '../../image/backgroundTestimonio.png'
import quotes from '../../image/quotes.png'
const Testimonial = () => {
  return (
      // <div style={{
      //   display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     backgroundImage: `url(${ backgroundTestimonio}), url(${ quotes})`,
      //     backgroundRepeat: 'no-repeat, no-repeat',
      //     backgroundPosition: 'left , right' ,
      //     height:'683px',
      //     marginTop: '20px',
      //     marginBottom: '20px',
      // }}>
        <div className={styles.containerTestimonial}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.rightTestimonial}>
                <div className={styles.rightTestimonialItems}>
                      <div className={styles.bodyTestimonialItems}>
                        <div className={styles.imagenHeaderTestimonial}>
                        <img src={testimonioalProfile} alt="" className={styles.imageTestimonail}/>
                          <div className={styles.headerTestimonialDatails}>
                              <span className={styles.headerTestimonialname}>Clara Montez</span>
                              <span className={styles.headerTestimonialtipe}>Customer</span>
                              <div>
                                  <StarOutlinedIcon className={styles.iconsStart}/>
                                  <StarOutlinedIcon className={styles.iconsStart}/>
                                  <StarOutlinedIcon className={styles.iconsStart}/>
                                  <StarOutlinedIcon className={styles.iconsStart}/>
                                  <StarOutlinedIcon className={styles.iconsStart}/>
                                  
                                  
                              </div>
                          </div>
                          </div>
                          <span className={styles.bottomTestimonialtipe}>Absolutely Perfect!I would highly reccomend Eat Meal Prep To Everyone.Nice Experience, Customer Support is Perfect.</span>
                      </div>
                  </div>
              </div>
            <div className={styles.leftTestimonial}>
                <div className={styles.leftTestimonialBody}> 
                  <span className={styles.leftTextTestimonialSpan1}>TESTIMONIALS</span>
                  <span className={styles.leftTextTestimonialSpan2}>What Others
                          Say About
                          Eat Meal Prep
                  </span>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Testimonial