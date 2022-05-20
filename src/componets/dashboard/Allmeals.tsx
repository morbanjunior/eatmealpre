import React from 'react'
// import FeaturedInfo from '../../../../componets/Dashboard/featuredInfo/FeaturedInfo'
import styles from '../../styles/allmeals.module.css'
import {userData} from '../../datadash'
import Allmealscategories from './Allmealscategories'
// import Allmealscategories from ''

interface Props{
  viewed: boolean;
  SetViewed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Allmeals:React.FC <Props> = ({SetViewed, viewed}) => {
  return (
    // <div className='homeDash'>
    <div>
      <Allmealscategories SetViewed={SetViewed} viewed={viewed} />
    </div>
  )
}

export default Allmeals