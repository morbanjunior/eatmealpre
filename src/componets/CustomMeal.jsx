import React, { useState } from 'react'
import styles from '../styles/customMeal.module.css'
import {useDispatch} from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {addToCart, getTotals} from '../redux/cartSlice';
import { toast } from "react-toastify";

const CustomMeal = ({isLogin}) => {
//JSON.stringify("Select Protein")
  const [selectProtein, SetselectProtein] = useState('Select Protein');
  const [selectSideOne, SetsSideOne] = useState('Select Side 1');
  const [selectTwo, SetselectTwo] = useState('Select Side 2');
  const [selectPriceProtein, SetselectPriceProtein] = useState(0);
  const [selectPriceSideOne, SetselectPriceSideOne] = useState(0);
  const [selectPriceSideTwo, SetselectPriceSideTwo] = useState(0);
  const [multipleProtein, SetmultipleProtein] = useState(0)
  const [multipleSideOne, SetmultipleSideOne] = useState(0)
  const [multipleSideTwo, SetmultipleSideTwo] = useState(0)
  const [selectColorProtein, SetselectColorProtein] = useState(0);
  const [selectColorideOne, SetselectColorideOne] = useState(0);
  const [selectColorSideTwo, SetselectColorSideTwo] = useState(0);
  const [totalPrice, SetTotalPrice] = useState(0);

  const [quantity, SetQuantity] = useState(0);
 

  const dispatch = useDispatch();

  const item = 
      {name: selectProtein + ", " + selectSideOne + ", " + selectTwo,
      description: 'Protein: '+ multipleProtein + ", " + 'Side 1: ' + multipleSideOne + ', ' + 'Side 2: ' + multipleSideTwo ,
      imgen_url: '',
      price: parseFloat(selectPriceProtein + selectPriceSideOne + selectPriceSideTwo).toFixed(2),
      id_category: 'Custom Meal',
    }


  

  const selectedItems = () => {
  
    if(!quantity ){
      toast.error(`Please add quantity`, {
        position: "bottom-left",
      });
    } else if(!multipleProtein ){
       toast.error(`Please select size on Protein`, {
        position: "bottom-left",
      });
    }else if(!multipleSideOne ){
      toast.error(`Please select size on Side 1 `, {
        position: "bottom-left",
      });

    }else if(!multipleSideTwo){
      toast.error(`Please select size on Side 1 `, {
        position: "bottom-left",
      });
    }
    
    else{
      dispatch(addToCart({...item, quantity} ))
      dispatch(getTotals())
      SetQuantity(0);
      SetselectProtein('Select Protein');
      SetsSideOne('Select Side 1');
      SetselectTwo('Select Side 2');
      
      SetselectPriceProtein(0);  
      SetmultipleProtein(0);
      SetselectColorProtein(0);
     
      SetselectPriceSideOne(0);
      SetmultipleSideOne(0);
      SetselectColorideOne(0);
     
      
      SetselectPriceSideTwo(0); 
      SetmultipleSideTwo(0);
      SetselectColorSideTwo(0)

    }
    
  }

    const optionsSelectProtein = [
        { value: 'Select Protein', label: 'Select Protein' },
        { value: 'Asian Chicken', label: 'Asian Chicken', 
        size: [4, 6 , 8 , 10 , 16],
        price: [5.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75
      },
        { value: 'Blackened Chicken', label: 'Blackened Chicken', 
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},

        { value: 'Blackened Shrimp', label: 'Blackened Shrimp',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75
      },
        { value: 'Blackened Tilapia', label: 'Blackened Tilapia',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75
      },
        { value: 'Blackened Wild Salmon', label: 'Blackened Wild Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Chicken Adobo', label: 'Chicken Adobo',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Chicken Teriyaki', label: 'Chicken Teriyaki',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Grilled Chicken', label: 'Grilled Chicken',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Ground Beef 90% Lean', label: 'Ground Beef 90% Lean',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Ground Turkey 90% Lean', label: 'Ground Beef 90% Lean',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Lemon Garlic Chicken', label: 'Lemon Garlic Chicken',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Lemon Garlic Shrimop', label: 'Lemon Garlic Shrimop',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Lemon Garlic Tilapia', label: 'Lemon Garlic Tilapia',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Miso Chicken', label: 'Miso Chicken',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Miso Salmon', label: 'Miso Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Miso Chicken', label: 'Miso Chicken',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Mojo Salmon', label: 'Mojo Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Mojo Shrimp', label: 'Mojo Shrimp',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Oven Baked Salmon', label: 'Oven Baked Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Oven Baked Shrimp', label: 'Oven Baked Shrimp',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Peanut Coconut Chicken', label: 'Peanut Coconut Chicken',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Peanut Coconut Salmon', label: 'Peanut Coconut Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Peanut Coconut Shrimp', label: 'Peanut Coconut Shrimp',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Salmon Adobo', label: 'Salmon Adobo',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Salmon Teriyaki', label: 'Salmon Teriyaki',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Seared Salmon', label: 'Seared Salmon',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Teriyaki Ground Beef 90% Lean', label: 'Teriyaki Ground Beef 90% Lean',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Tilapia', label: 'Tilapia',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Tilapia Adobo', label: 'Tilapia Adobo',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
        { value: 'Top Sirloin Steak', label: 'Top Sirloin Steak',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75},
    ]

      const optionsSideOne = [
        { value: 'Select Side 1', label: 'Select Side 1'},
        { value: 'Asparagus', label: 'Asparagus',
        size: [4, 6 , 8 , 10 , 16],
        price: [4.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Basmati Rice', label: 'Basmati Rice',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Gluten Free Pasta', label: 'Gluten Free Pasta',
      size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Quinoa', label: 'Quinoa',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Seasonal Veggies (squash, zucchini, eggplant, peppers)', label: 'Seasonal Veggies (squash, zucchini, eggplant, peppers)',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'White Rice', label: 'White Rice',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Wild Quinoa', label: 'Wild Quinoa',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        
    ]

      const optionsSideTwo = [
        { value: 'Select Side 2', label: 'Select Side 2'},
        { value: 'Blended Veggies', label: 'Blended Veggies',
        size: [4, 6 , 8 , 10 , 16],
        price: [3.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Broccoli', label: 'Broccoli',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Mashed Potaotes', label: 'Mashed Potaotes',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Mashed Sweet Potaotes', label: 'Mashed Potaotes',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Red Potaotes', label: 'Red Potaotes',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        { value: 'Sweet Potatoes', label: 'Sweet Potatoes',
        size: [4, 6 , 8 , 10 , 16],
        price: [8.24, 9.75, 10.75, 12.75, 14.99],
        calories: 44,
        protein: 8.75,
        carbs: 0,
        fat: 1,
        sodium: 96.75 },
        
    ]
//Funcion set price


    const handlePrice = (item, index, selector) =>{
      if(selector=='protein'){
        SetselectPriceProtein(item.price[index])  
        SetmultipleProtein(item.size[index]);
        SetselectColorProtein(item.size[index])
      }
      if(selector=='sideOne'){
        SetselectPriceSideOne(item.price[index])  
        SetmultipleSideOne(item.size[index]);
        SetselectColorideOne(item.size[index])
      }
      if(selector=='sideTwo'){
        SetselectPriceSideTwo(item.price[index])  
        SetmultipleSideTwo(item.size[index]);
        SetselectColorSideTwo(item.size[index])
      }
      
    }

    const MenosControl = () =>{
      if(quantity >=1){
        SetQuantity(quantity -1)
      }
    }

    ///Subtotal table
    let proteincalories=0;
    let proteinprotein=0;
    let proteincarbs= 0;
    let proteinfat= 0;
    let proteinsodium=0;
    

    let sideOnecalories=0;
    let sideOneprotein=0;
    let sideOnecarbs= 0;
    let sideOnefat= 0;
    let sideOnesodium=0;

    let sideTwocalories=0;
    let sideTwosideTwo=0;
    let sideTwocarbs= 0;
    let sideTwofat= 0;
    let sideTwosodium=0;

  return (
    
    <div>
       <div className={styles.containerCustom}> 
       <div className={styles.customContainerLeft}>
           <div className={styles.leftCustom}>
               <div className={styles.proteinHeader}>
                    <span>Protein</span>
                    <span className={styles.asterico}>*</span>
               </div>
                <div className={styles.listDataCustom}>
                <select className='custom-select' onChange={(e)=>SetselectProtein(e.target.value)}>
                    {
                      optionsSelectProtein.map((data, index)=>(
                        <option value={data.value} key={index}>{data.label}</option>
                      ))
                    }
                </select>
                </div>
                <div className={styles.spanConstainerOz}>
                  {
                     selectProtein == "Select Protein" ? (
                      <></>
                    ) : (<>
                    {
                      optionsSelectProtein.map((item)=>(
                        item.value === selectProtein ? 
                        item.size.map((sizeItem, index)=>
                        (<span className={selectColorProtein == sizeItem ? styles.selectOz : styles.spanOz} onClick={()=>handlePrice(item, index, "protein" )} key={index}>{sizeItem + " oz"}</span>)) : <></>
                        
                      ))
                      
                    }
                  </>)
                  }
                  
                </div>

                <div className={styles.proteinHeader}>
                    <span>Side 1 </span>
                    <span className={styles.asterico}>*</span>
               </div>
                <div className={styles.listDataCustom}>
                <select className='custom-select' onChange={(e)=>SetsSideOne(e.target.value)}>
                    {
                      optionsSideOne.map((data, index)=>(
                        <option value={data.value} key={index}>{data.label}</option>
                      ))
                    }
                </select>
                </div>
                <div className={styles.spanConstainerOz}>
                     {
                     selectSideOne === "Select Side 1" ? (
                      <></>
                    ) : (<>
                       {
                      optionsSideOne.map((item)=>(
                        item.value === selectSideOne ? 
                        item.size.map((sizeItem, index)=>
                        (<span className={selectColorideOne === sizeItem ? styles.selectOz : styles.spanOz} onClick={()=>handlePrice(item, index, "sideOne" )} key={index}>{sizeItem + " oz"}</span>)) : <></>
                        
                      ))
                      
                    }
                  </>)
                  }
                </div>

                <div className={styles.proteinHeader}>
                    <span>Side 2</span>
                    <span className={styles.asterico}>*</span>
               </div>
                <div className={styles.listDataCustom}>
                  <select className='custom-select' onChange={(e)=>SetselectTwo(e.target.value)}>
                      {
                        optionsSideTwo.map((data, index)=>(
                          <option value={data.value} key={index}>{data.label}</option>
                        ))
                      }
                  </select>
                </div>
                <div className={styles.spanConstainerOz}>
                     {
                     selectTwo === "Select Side 2" ? (
                      <></>
                    ) : (<>
                      {
                      optionsSideTwo.map((item)=>(
                        item.value === selectTwo ? 
                        item.size.map((sizeItem, index)=>
                        (<span className={selectColorSideTwo == sizeItem ? styles.selectOz : styles.spanOz} onClick={()=>handlePrice(item, index, "sideTwo" )} key={index}>{sizeItem + " oz"}</span>)) : <></>
                        
                      ))
                      
                    }
                  </>)
                  }
                </div>
                 {/* Start */}
                 <div className={styles.totalCustomContainer}>
                    <div className={styles.totalCustomContainerTotal}>
                      <span className={styles.totalCustomSpace}>Total</span>
                      <span className={styles.totalCustom}>${parseFloat(selectPriceProtein + selectPriceSideOne + selectPriceSideTwo).toFixed(2)}</span>
      
                    </div>
                   <div className={styles.buttonControl}>
                       
                       <RemoveIcon className={styles.controlCustom} onClick={() =>MenosControl()} /> 
                      
                       <span onChange={(e) => SetQuantity(e.target.value)} className={styles.inputCustom}>{quantity}</span>
                     
                       <AddIcon className={styles.controlCustom} onClick={() => SetQuantity(quantity + 1)} />
                   </div>
                 </div>
                
                <div className={styles.controlsBottom} onClick={() =>selectedItems()}>
                    <div className={styles.addTocarCustom}>
                        <span className={styles.textSpan} >Add to cart</span>
                    </div>
                </div>

                {/* end button */}
                
           </div>
        </div>
           {/* End Left */}
           <div className=''>
         
                {  selectProtein === "Select Protein" ? (<></>) : (
                      optionsSelectProtein.filter(filter => filter.value==selectProtein).map((item, index)=>(
                       <>
                  <div className={styles.customContainerRight}>
                     <div className={styles.rightCustom}>
                        <span style={{ fontFamily: 'Poppins',fontStyle: 'normal', fontWeight: '700',fontSize: '18px'}}>{item.value}</span>
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{proteincalories=item.calories * multipleProtein } g</span>
                          <span>Calories</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{proteinprotein=item.protein * multipleProtein} g</span>
                          <span>Protein(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{proteincarbs=item.carbs * multipleProtein} g</span>
                          <span>Carbs(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{proteinfat=item.fat * multipleProtein} g</span>
                          <span>Fat(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{proteinsodium=item.sodium * multipleProtein} g</span>
                          <span>Sodium(mg)</span>
                          </di>
                        
                        </div>
                        </div>
                    </div>
                       </>
                       
                      ))
                    )
                      }

              {  selectSideOne === "Select Side 1" ? (<></>) : (
                      optionsSideOne.filter(filter => filter.value==selectSideOne).map((item, index)=>(
                       <>
                  <div className={styles.customContainerRight}>
                     <div className={styles.rightCustom}>
                        <span style={{ fontFamily: 'Poppins',fontStyle: 'normal', fontWeight: '700',fontSize: '18px'}}>{item.value}</span>
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideOnecalories = item.calories * multipleSideOne} g</span>
                          <span>Calories</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideOneprotein = item.protein * multipleSideOne} g</span>
                          <span>Protein(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideOnecarbs=item.carbs * multipleSideOne} g</span>
                          <span>Carbs(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideOnefat=item.fat * multipleSideOne} g</span>
                          <span>Fat(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideOnesodium=item.sodium * multipleSideOne} g</span>
                          <span>Sodium(mg)</span>
                          </di>
                        
                        </div>
                        </div>
                    </div>
                       </>
                       
                      ))
                    )
                      }

              {  selectTwo === "Select Side 2" ? (<></>) : (
                      optionsSideTwo.filter(filter => filter.value==selectTwo).map((item, index)=>(
                       <>
                  <div className={styles.customContainerRight}>
                     <div className={styles.rightCustom}>
                        <span style={{ fontFamily: 'Poppins',fontStyle: 'normal', fontWeight: '700',fontSize: '18px'}}>{item.value}</span>
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideTwocalories=item.calories * multipleSideTwo} g</span>
                          <span>Calories</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideTwosideTwo=item.protein * multipleSideTwo} g</span>
                          <span>Protein(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideTwocarbs=item.carbs  * multipleSideTwo} g</span>
                          <span>Carbs(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideTwofat=item.fat  * multipleSideTwo} g</span>
                          <span>Fat(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems}>
                          <span className={styles.colorProtein}>{sideTwosodium=item.sodium  * multipleSideTwo} g</span>
                          <span>Sodium(mg)</span>
                          </di>
                        
                        </div>
                        </div>
                    </div>
                       </>
                       
                      ))
                    )
                      }

<>
                  <div className={styles.customContainerRight} style={{backgroundColor: '#1EAD5E'}}>
                     <div className={styles.rightCustom}>
                        <span style={{color: '#fff', fontFamily: 'Poppins',fontStyle: 'normal', fontWeight: '700',fontSize: '18px'}}>TOTAL</span>
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                          <di className={styles.categoriesTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorProtein}>{proteincalories + sideOnecalories + sideTwocalories} g</span>
                          <span>Calories</span>
                          </di>

                          <di className={styles.categoriesTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorProtein}>{proteinprotein + sideOneprotein + sideTwosideTwo} g</span>
                          <span>Protein(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorProtein}>{proteincarbs + sideOnecarbs + sideTwocarbs} g</span>
                          <span>Carbs(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorProtein}>{proteinfat+sideOnefat+sideTwofat} g</span>
                          <span>Fat(g)</span>
                          </di>

                          <di className={styles.categoriesTableItems} style={{backgroundColor: '#fff'}}>
                          <span className={styles.colorProtein}>{proteinsodium+sideOnesodium+sideTwosodium} g</span>
                          <span>Sodium(mg)</span>
                          </di>
                        
                        </div>
                        </div>
                    </div>
                       </>
           </div>

        {/* <div className='customContainerRight'>

          
           <div className='rightCustom/'>
                
               

                {  selectProtein == "Select Protein" ? (<></>) : (
                      optionsSelectProtein.filter(filter => filter.value==selectProtein).map((item, index)=>(
                      
                         <table className="table table-bordered table-striped tableSize ">
                         <thead className='table-success'>
                           <tr>
                             <th scope="col">Item</th>
                             <td scope="col">{item.value}</td>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <th scope="row">Calories</th>
                             <td>{proteincalories=item.calories * multipleProtein}</td>
                             
                           </tr>
                           <tr>
                             <th scope="row">Protein(g)</th>
                             <td>{proteinprotein=item.protein * multipleProtein}</td>
                             
                           </tr>
                           <tr>
                             <th scope="row">Carbs(g)</th>
                             <td>{proteincarbs=item.carbs  * multipleProtein}</td>
                             
                           </tr>
                           <tr>
                             <th scope="row">Fat(g)</th>
                             <td>{proteinfat=item.fat  * multipleProtein}</td>
                             
                           </tr>
                           <tr>
                             <th scope="row">Sodium(mg)</th>
                             <td>{proteinsodium=item.sodium  * multipleProtein}</td>
                             
                           </tr>
                         </tbody>
                       </table>
                      ))
                    )
                      }


                {  selectSideOne == "Select Side 1" ? (<></>) : (
                      optionsSideOne.filter(filter => filter.value==selectSideOne).map((item, index)=>(
                       
                        <table class="table table-bordered table-striped tableSize">
                        <thead className='table-success'>
                          <tr>
                            <th scope="col">Item</th>
                            <td scope="col">{item.value}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Calories</th>
                            <td>{sideOnecalories=item.calories * multipleProtein }</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Protein(g)</th>
                            <td>{sideOneprotein=item.protein * multipleProtein}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Carbs(g)</th>
                            <td>{sideOnecarbs=item.carbs * multipleProtein}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Fat(g)</th>
                            <td>{sideOnefat=item.fat * multipleProtein}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Sodium(mg)</th>
                            <td>{sideOnesodium=item.sodium * multipleProtein}</td>
                            
                          </tr>
                        </tbody>
                      </table>

                      ))
                    )
                      }


                   {  selectTwo == "Select Side 2" ? (<></>) : (
                      optionsSideTwo.filter(filter => filter.value==selectTwo).map((item, index)=>(
                        <table class="table table-bordered table-striped tableSize">
                        <thead className='table-success'>
                          <tr>
                            <th scope="col">Item</th>
                            <td scope="col">{item.value}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Calories</th>
                            <td>{sideTwocalories=item.calories * multipleSideTwo}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Protein(g)</th>
                            <td>{sideTwosideTwo=item.protein * multipleSideTwo}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Carbs(g)</th>
                            <td>{sideTwocarbs=item.carbs  * multipleSideTwo}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Fat(g)</th>
                            <td>{sideTwofat=item.fat  * multipleSideTwo}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">Sodium(mg)</th>
                            <td>{sideTwosodium=item.sodium  * multipleSideTwo}</td>
                            
                          </tr>
                        </tbody>
                      </table>
                      ))
                    )
                      }

                        <table class="table table-bordered table-striped tableSize"> 
                         <thead className='thead-dark'>
                           <tr>
                             <th scope="col">Item</th>
                             <th scope="col">Total</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td scope="row">Calories</td>
                             <th></th>
                             
                           </tr>
                           <tr>
                             <td scope="row">Protein(g)</td>
                             <th></th>
                             
                           </tr>
                           <tr>
                             <td scope="row">Carbs(g)</td>
                             <th></th>
                             
                           </tr>
                           <tr>
                             <td scope="row">Fat(g)</td>
                             <th></th>
                             
                           </tr>
                           <tr>
                             <td scope="row">Sodium(mg)</td>
                             <th></th>
                             
                           </tr>
                         </tbody>
                       </table>
           </div>
       </div> */}
           
       </div>
    </div>
  )
}

export default CustomMeal