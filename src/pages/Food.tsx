import React, { useState }  from 'react'
import styles from '../styles/Food.module.css'
import foodImag from '../image/foodImag.png'
import plate from '../image/plate.png'
import { Link, useParams } from 'react-router-dom'
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import Headerpages from '../componets/Headerpages'
import {addToCart, getTotals} from '../redux/cartSlice';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import { CartModel} from '../model/CartModel'



const Food = () => {
    const [activoTabN, SetactivoTabN] = useState<boolean>(true);
    const [activoTabI, SetactivoTabI] = useState<boolean>(false);
    const [quantity, SetQuantity] = useState<number>(0);

    const foods = [1,2];
    const id = Math.floor(Math.random() * 10);

   const params = useParams();

   const dispatch = useDispatch();

  const selectedItems = () => {
  
    if(quantity){
      dispatch(addToCart({...singleFood} ))
      dispatch(getTotals())
      SetQuantity(0);
    } else{
      toast.error(`Please add quantity on ${singleFood.name}`, {
        position: "bottom-left",
      });
    }
    
  }

  const singleFood:CartModel =
  {
    id: id,
    cartQuantity:quantity,
    quantity:quantity,
    name: 'Asian Chicken Fried Rice Combo',
    price: 10.20,
    desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
    nutricion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
    ingredients: 'A delicious twist on a classical favorite packed with lean protein'

  };

  console.log(quantity)

  const MenosControl = () =>{
    if(quantity >=1){
      SetQuantity(quantity -1)
    }
  }

  const handlerActive=(name:string)=>{
      if(name==="nutrition"){
        SetactivoTabN(true);
        SetactivoTabI(false);
      }else{
        SetactivoTabI(true);
        SetactivoTabN(false);
      }
  }

 

  return (
      <>
       <Topbar />
       <Nav home={false}/>
       <Headerpages name='Food'/>
    <div className={styles.containertFood}>
       <img src={foodImag} alt="" />
       <div className={styles.detailsContainer}>
           <span className={styles.detailsHeader}>Asian Chicken Fried Rice Combo</span>
           <span className={styles.prices}>$10.99</span>
           <span className={styles.detailesP}>A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery.
                A smart low fat and high protein meal option.</span>
           {/*  */}
           <div className={styles.bottomContainer}>
              <div className={styles.inputContainer}>
                    <span onClick={() =>MenosControl()}>-</span>
                    <input placeholder='0' type='number' 
                    className={styles.input} 
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                     ): void => SetQuantity(parseInt(e.target.value))}
                    value={quantity}
                    max={100}
                    min={0}
                    />
                    <span onClick={() => SetQuantity(quantity + 1)}>+</span>

                </div>

                <div className={styles.bottomAdd} onClick={() =>selectedItems()}>Add to Cart</div>
           </div>
           
            {/*  */}
       </div>
    </div>

    {/* second sesion */}

      <div className={styles.secondSesionContainer}>
        <div className={styles.containerSecondNI}>
            <span
            onClick={()=>handlerActive('nutrition')}
            className={activoTabN ? 
                styles.secondContainerActive : 
                styles.secondContainerNoActive}>Nutrition</span>
            <span 
            onClick={()=>handlerActive('ingredients')}
            className={activoTabI ? 
                styles.secondContainerActive : 
                styles.secondContainerNoActive}>Ingredients</span>
        </div>

        {/* details nutricion */}
       {activoTabN && (<div className={styles.spanDetail}>
            <span>Calories 656</span>
            <span>Carbs 656</span>
            <span>Protein 656</span>
            <span>Fat 656</span>
            <span>Fiber 653</span>
            <span>Sodium 656</span>
        </div>)
        }


      {/* Ingridentes */}

      {activoTabI && (<div className={styles.spanDetail}>
            <span>Potatoes (oz)</span>
            <span>Green Onions (oz)</span>
            <span>Eggs</span>
            <span>Breakfast Sausages</span>
        </div>)}
      </div>

    {/* Related Products */}

    <div className={styles.relatedText}>
      <span className={styles.relatedTextSpan}>Related Products</span>
    </div>
    {/* Items Related */}

    <div className={styles.wrapContainer}>
      {foods.map((food, index)=>(
        <>
      
        <div className={styles.itemCategoryContainer} key={index}>
            <img src={plate} alt="" />
            <div className={styles.imageMealtext}>
              <span className={styles.headerMealtext}>Asian Chicken Fried Rice Combo</span>
              <span className={styles.spanp}>A delicious twist on a classical favorite 
                packed with lean protein and delicious carrots 
                and celery. A smart low fat and high protein meal 
                option.</span>
                <div>
                 <Link to={`/${params.slug}/${id}`}><span className={styles.bottonCategory}>Order Now</span></Link> 
                  <span className={styles.textPrice}>$10.99</span>
                </div>
            </div>
        </div>
      
      </>
      ))}
    </div>

    </>
  )
}

export default Food