import React from 'react'
import styles from '../styles/About.module.css'
import aboutImag from '../image/aboutImag.png'
import SomeFeatures from '../componets/home/SomeFeatures'
import plate from '../image/plate.png'
import { Link } from 'react-router-dom'
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import Headerpages from '../componets/Headerpages'



const About = () => {

  const foods = [1,2];
  
  const id = Math.floor(Math.random() * 10);

  return (
      <>
    <Topbar />
    <Nav/>
    
        <Headerpages name='About Us'/>
        <div className={styles.comtainerEathome}>
        <div className={styles.aboutWrapper}>
            <div >
              <div className={styles.centerRightEat}>
                    <span className={styles.textRightEat}>
                    About </span><span className={styles.textRight}>Us</span>
                </div>
                <p className={styles.containerP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className={styles.buttomHeader}>Our Meals</div>
            </div>

            <img src={aboutImag} alt="" className={styles.imageheader}/>
          </div>
      
      </div>
 <SomeFeatures/>


    {/* Related Products */}

    <div className={styles.relatedText}>
      <span className={styles.relatedTextSpan}>Featured Meals</span>
    </div>

 {/* Items Related */}

 <div className={styles.wrapContainer}>
      {foods.map((food, index)=>(
        <>
      {/* Items */}
        <div className={styles.itemCategoryContainer} key={index}>
            <img src={plate} alt="" />
            <div className={styles.imageMealtext}>
              <span className={styles.headerMealtext}>Asian Chicken Fried Rice Combo</span>
              <span className={styles.spanp}>A delicious twist on a classical favorite 
                packed with lean protein and delicious carrots 
                and celery. A smart low fat and high protein meal 
                option.</span>
                <div>
                 <Link to={`/food/${id}`}><span className={styles.bottonCategory}>Order Now</span></Link> 
                  <span className={styles.textPrice}>$10.99</span>
                </div>
            </div>
        </div>
      {/* End Items */}
      </>
      ))}
    </div>
</>
  )
}

export default About