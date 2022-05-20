import React, {useEffect, useState} from 'react'
import styles from '../../styles/allmealscategories.module.css'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
// import WelcomeModal from '../../modal/WelcomeModal';

interface Props{
  viewed: boolean;
  SetViewed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Allmealscategories:React.FC <Props> = ({SetViewed, viewed}) => {
  const [modalIsOpen, SetModalIsOpen] = useState(false);
  


  useEffect(() => {
    if(viewed===false){
      SetModalIsOpen(true)
      SetViewed(true)
    }
  })

  function CloseModal() {
    SetModalIsOpen(false);
  
  }

  return (
    <div className={styles.featuredallmeals}>
      
      <Link to='/dashboard/order'><a>
    <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>Orders</span>
    <AssignmentTurnedInIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>0</span>
    </div>
  </div></a>
  </Link>

  <Link to='/dashboard/maelpremenu/Meal Prep Menu'><a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>MAEL PREP MENU</span>
    <FastfoodIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>356</span>
    </div>
  </div>
  </a></Link>

  <Link to='/dashboard/maelpremenu/Bulk Meals'><a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>BULK MEAL PREP MENU</span>
    <FastfoodIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>24</span>
    </div>
  </div>
  </a></Link>

  <Link to='/dashboard/maelpremenu/$9 menu'><a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>$9 Menu</span>
    <FastfoodIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>11</span>
    </div>
  </div>
  </a></Link>

  <Link to='/dashboard/'><a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>PRESELECTED MEALS</span>
    <RestaurantIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>17</span>
    </div>
  </div>
  </a></Link>

  <a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>WASTAGE SAVED</span>
    <FastfoodIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>4944.05Lbs</span>
    </div>
  </div>
  </a>

  <Link to='/dashboard/maelpremenu'><a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>DELIVERED ORDERS</span>
    <AssignmentTurnedInIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>4020</span>
    </div>
  </div>
  </a></Link>

  <a>
  <div className={styles.featuredItemmeals}>
    <span className={styles.featuredTitlemeails}>AVAILABLE REWARD POINTS</span>
    <AssignmentTurnedInIcon  className={styles.featuredIconmeails}/>
    <div className={styles.featuredamountContainermeails}>
      <span className={styles.featuredAmount}>4020</span>
    </div>
  </div>
  </a>
  {/* <WelcomeModal modalIsOpen={modalIsOpen} CloseModal={CloseModal}/> */}
</div>
  )
}

export default Allmealscategories