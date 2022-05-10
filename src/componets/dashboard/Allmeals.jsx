import React from 'react'
// import FeaturedInfo from '../../../../componets/Dashboard/featuredInfo/FeaturedInfo'
import styles from '../../styles/allmeals.module.css'
import {userData} from '../../datadash'
import Allmealscategories from '../dashboard/Allmealscategories'
// import Allmealscategories from ''


const Allmeals = ({SetViewed, viewed}) => {
  return (
    // <div className='homeDash'>
    <div>
      <Allmealscategories SetViewed={SetViewed} viewed={viewed} />
    </div>
  )
}

export default Allmeals