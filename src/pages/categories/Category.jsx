import React from 'react'
import styles from '../../styles/category.module.css'
import plate from '../../image/plate.png'
import { Link, useParams } from 'react-router-dom'
import Topbar from '../../componets/home/Topbar'
import Nav from '../../componets/home/Nav'
import Headerpages from '../../componets/Headerpages'


const Category = ({categorylist}) => {

 
  const id = Math.floor(Math.random() * 10);
  
  const param = useParams();
  const sdata = categorylist.filter(item=>item.slug.includes(param.slug))
  const dataS = sdata.map((slub)=>slub.name);
  const categoryName = dataS[0];

  

  const foods =[
    {
      id: 1,
      cat_id:1,
      name: 'Asian Chicken Fried Rice Combo',
      prices: 10.20,
      desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
      nuticion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
      ingredients: 'A delicious twist on a classical favorite packed with lean protein'

    },
    {
      id: 2,
      cat_id:1,
      name: 'Chicken Fried Rice Combo',
      prices: 8.20,
      desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
      nuticion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
      ingredients: 'A delicious twist on a classical favorite packed with lean protein'

    },
    {
      id: 3,
      cat_id:1,
      name: 'Fried Rice Combo',
      prices: 9.20,
      desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
      nuticion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
      ingredients: 'A delicious twist on a classical favorite packed with lean protein'

    },
    {
      id: 4,
      cat_id:1,
      name: 'Rice Combo',
      prices: 12.20,
      desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
      nuticion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
      ingredients: 'A delicious twist on a classical favorite packed with lean protein'

    },
  ]

  return (
    <>
    <Topbar />
    <Nav/>
    <Headerpages name={categoryName}/>
    <div className={styles.wrapContainer}>
      {foods.map((food, index)=>(
        <>
      {/* Items */}
        <div className={styles.itemCategory} key={index}>
            <img src={plate} alt="" />
            <div className={styles.imageMealtext}>
              <span className={styles.headerMealtext}>{food.name}</span>
              <span className={styles.spanp}>{food.desc}</span>
                <div>
                 <Link to={`/${param.slug}/${food.id}`}><span className={styles.bottonCategory}>Order Now</span></Link> 
                  <span className={styles.textPrice}>${food.prices}</span>
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

export default Category