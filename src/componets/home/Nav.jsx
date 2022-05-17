import React, { useState } from 'react'
import styles from '../../styles/Nav.module.css'
import LogoEat from '../../image/footerLogo.png'
import LogoEatWhite from '../../image/LogoEat.png'
import backgroundImag from '../../image/backgroundImag.png'
import { Link } from 'react-router-dom';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// className={home ? styles.navcontainerActive : styles.navcontainer}
const Nav = ({home}) => {

  const [menuActive, setMenuActive ] = useState(false)

  return (

    <>

     <di className={menuActive ? styles.menuMobilActive : styles.menuMobil}>
        <div className={styles.menuMobilBody}>
          <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/categories">menu</Link>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li> 
              </ul>
            </div>
        </di>

    <nav style={{
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${home && backgroundImag})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fixed',
    }}>
        <div className={styles.wrappNav}>
           <div className={styles.rightNav}>
             <Link to='/'>
                <img src={home ? LogoEatWhite : LogoEat} alt="" className={styles.imageLogo}/>
             </Link>
           </div>
           <div className={styles.navigationmenu}>
              <ul>
                <li >
                  <Link to="/">Home</Link>
                </li>
                <li >
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/categories">menu</Link>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                  <div>
                    <FormatAlignRightIcon className={styles.menuIcon} />
                    <FormatAlignRightIcon className={home ? styles.menuIconActive : styles.menuIconActiveOther } onClick={()=>setMenuActive(!menuActive)}/>
                  </div>
                  
              </ul>
              
           </div>
        </div>
       
        
    </nav>
    </>
  )
}

export default Nav