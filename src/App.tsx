import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './componets/Footer';
import About from './pages/about';
import Custom404 from './pages/Custom404';
import Categories from './pages/categories/Categories';
import Category from './pages/categories/Category';
import Home from './pages/home/Home'
import Food from './pages/Food';
import Delivery from './pages/delivery';
import ContactUs from './pages/contact';
import Login from './pages/login';
import Dashboard from './pages/dashboard/Dashboard';
import { RequireAuth, NoRequireAuth } from './componets/RequireAuth';
import Register from './pages/register';
import { ToastContainer } from 'react-toastify';
import ShopCart from './pages/ShopCart';
import {useGetAllCategoriesQuery} from './redux/api/categoriesApi'
import Order from './componets/dashboard/Order';
import Address from './componets/dashboard/Address';
import Allmeals from './componets/dashboard/Allmeals';
import CustomMeal from './componets/CustomMeal';
import Cart from './pages/Cart';
import LayoutDashboard from './componets/LayoutDashboard'
import Gifcard from './componets/Gifcard';
import Wallet from './pages/wallet/Wallet';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';
import Faq from './pages/Faq';
import ContacDash from './pages/ContacDash';
import { CategoryModel, Food_types } from './model/CategoryModel';


const App = () => {


  const {data, isError, error, isLoading, isSuccess} = useGetAllCategoriesQuery('bulbasaur');
  const [categorylist, SetCategorylist] = useState<string[]>([]);
  const [foodTypes, SetfoodTypes] = useState<Food_types[]>([]);
  const [viewed, SetViewed] = useState<boolean>(true);
 
  useEffect(() => {
    if(data){
      // SetCategorylist(data.data.food_types);
      SetfoodTypes(data.data.food_types);
      
      console.log(foodTypes)
    }
  },[data])

  return (
    <>
    
     <BrowserRouter>
     <ToastContainer/>
     <div className="fl-page">
       <Routes> 
         <Route path="/"  element={<NoRequireAuth><Home/></NoRequireAuth>} />
         <Route path="/about"  element={<NoRequireAuth><About/></NoRequireAuth>} />
         <Route path="/categories"  element={<NoRequireAuth><Categories foodTypes={foodTypes} error={error} isLoading={isLoading}/></NoRequireAuth>} />
         <Route path="/category/:slug"  element={<NoRequireAuth><Category foodTypes={foodTypes} /></NoRequireAuth>} />
         <Route path="/:slug/:id"  element={<NoRequireAuth><Food/></NoRequireAuth>} />
         <Route path="/delivery"  element={<NoRequireAuth><Delivery/></NoRequireAuth>} />
         <Route path="/login"  element={<NoRequireAuth><Login/></NoRequireAuth>} />
         <Route path="/register"  element={<NoRequireAuth><Register/></NoRequireAuth>} />
         <Route path="/shopcart"  element={<NoRequireAuth><ShopCart/></NoRequireAuth>} />
         <Route path="/forgotpassword"  element={<NoRequireAuth><ForgotPassword/></NoRequireAuth>} />
         {/* <Route path="/faq"  element={<NoRequireAuth><Faq/></NoRequireAuth>} /> */}
         

            <Route path="/dashboard"  element={<RequireAuth><LayoutDashboard><Allmeals SetViewed={SetViewed} viewed={viewed}/></LayoutDashboard></RequireAuth>}/>
            <Route path="/order"  element={<RequireAuth><LayoutDashboard><Order/></LayoutDashboard></RequireAuth>} />   
            <Route path="/customMeal"  element={<RequireAuth><LayoutDashboard><CustomMeal/></LayoutDashboard></RequireAuth>} />
            <Route path="/address"  element={<RequireAuth><LayoutDashboard><Address/></LayoutDashboard></RequireAuth>} />
            <Route path="/cart"  element={<RequireAuth><LayoutDashboard><Cart/></LayoutDashboard></RequireAuth>} />
            <Route path="/gifcard"  element={<RequireAuth><LayoutDashboard><Gifcard/></LayoutDashboard></RequireAuth>} />
            <Route path="/wallet"  element={<RequireAuth><LayoutDashboard><Wallet/></LayoutDashboard></RequireAuth>} />
            <Route path="/changePassword"  element={<RequireAuth><LayoutDashboard><ChangePassword/></LayoutDashboard></RequireAuth>} />
            <Route path="/Profile"  element={<RequireAuth><LayoutDashboard><Profile/></LayoutDashboard></RequireAuth>} />
            <Route path="/faq"  element={<RequireAuth><LayoutDashboard><Faq/></LayoutDashboard></RequireAuth>} />
            <Route path="/contacdash"  element={<RequireAuth><LayoutDashboard><ContacDash/></LayoutDashboard></RequireAuth>} />
          

         <Route path="/contact"  element={<NoRequireAuth><ContactUs/></NoRequireAuth>} />
         <Route path="/page404"  element={<Custom404/>} />
         <Route path="*" element={<Navigate to ="/page404" />}/>
       </Routes> 
        
       <Footer/>
      </div>
     </BrowserRouter>
    
    </>
  );
}

export default App;
