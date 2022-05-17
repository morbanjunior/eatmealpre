import React, { useEffect, useState } from 'react'
import styles from '../../styles/Categories.module.css'
import categorieImag from '../../image/categoriesImag.png'
import { Link } from 'react-router-dom';
import Topbar from '../../componets/home/Topbar';
import Nav from '../../componets/home/Nav';
import Headerpages from '../../componets/Headerpages'
import BeatLoader from "react-spinners/ClipLoader";


const Categories = ({categorylist, isLoading, error}) => {

  return (

    <>
    <Topbar />
    <Nav/>
    
 <div className={styles.containertCategories}>
  <Headerpages name='Categories'/>
  <div style={{ display:'flex', justifyContent:'center', alignItems: 'center',  marginTop: '10px'}}>
      <BeatLoader loading={isLoading}  size={35} />
        {error && <h2>Something went wrong</h2>}
      </div>
    <div className={styles.wrapCategories}>
     { categorylist.map((category, index)=>(
        <>
       
         {/* Item */}
       <Link to={`/category/${category.slug}`} key={index}><div style={{
               display: 'flex' ,
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               width: '250px',
               height: '230px',
               backgroundImage: `url(${categorieImag})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               marginBottom: "30px",
               marginRight: "15px",
               marginLeft: "15px",
               cursor: 'pointer'

        }}>
            <div className={styles.textCategoriesHeader}>{category.name}</div>
            <div className={styles.categoriessubText}>6 items</div>
        </div></Link>
        {/* Ent Item */}
        </>
     ))}
         
       </div>
    </div>
    </>
  )
}

export default Categories