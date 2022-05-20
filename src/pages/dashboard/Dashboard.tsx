import React from 'react'
import Aside from '../../componets/dashboard/Aside'
import NavBar from '../../componets/dashboard/NavBar'
import Footer from '../../componets/Footer'
import { Routes, Route, useNavigate } from "react-router-dom";
import {RequireAuth, NoRequireAuth } from '../../componets/RequireAuth';
import Order from '../../componets/dashboard/Order';
import Allmeals from '../../componets/dashboard/Allmeals';
import Address from '../../componets/dashboard/Address';
import CustomMeal from '../../componets/CustomMeal';
import ShopCart from '../ShopCart';
import Cart from '../Cart';

interface Props{
  viewed: boolean;
  SetViewed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard:React.FC <Props> = ({SetViewed, viewed}) => {
  return (
    <div className='wrapper'>
    <NavBar/>
    <Aside/>
      <div className='content-wrapper'>
        <Routes>
            <Route path="/"  element={<RequireAuth><Allmeals SetViewed={SetViewed} viewed={viewed}/></RequireAuth>}/>
            <Route path="order" element={<RequireAuth><Order/></RequireAuth>} />   
            <Route path="address" element={<RequireAuth><Address/></RequireAuth>} />
            <Route path="customMeal" element={<RequireAuth><CustomMeal/></RequireAuth>} />
            <Route path="cart" element={<RequireAuth><Cart/></RequireAuth>} />
        </Routes>

    {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Dashboard