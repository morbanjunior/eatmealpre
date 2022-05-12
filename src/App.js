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


const App = () => {


  const {data, isError, error, isLoading, isSuccess} = useGetAllCategoriesQuery();
  const [categorylist, SetCategorylist] = useState([]);
 
  useEffect(() => {
    if(data){
      SetCategorylist(data.data.food_types);
    }
    
  },[data])

  
  return (
    <>
    
     <BrowserRouter>
     <ToastContainer/>
     <div className="fl-page">
       <Routes> 
         <Route path="/" exact element={<NoRequireAuth><Home/></NoRequireAuth>} />
         <Route path="/about" exact element={<NoRequireAuth><About/></NoRequireAuth>} />
         <Route path="/categories" exact element={<NoRequireAuth><Categories categorylist={categorylist} error={error} isLoading={isLoading}/></NoRequireAuth>} />
         <Route path="/category/:slug" exact element={<NoRequireAuth><Category categorylist={categorylist}/></NoRequireAuth>} />
         <Route path="/:slug/:id" exact element={<NoRequireAuth><Food/></NoRequireAuth>} />
         <Route path="/delivery" exact element={<NoRequireAuth><Delivery/></NoRequireAuth>} />
         <Route path="/login" exact element={<NoRequireAuth><Login/></NoRequireAuth>} />
         <Route path="/register" exact element={<NoRequireAuth><Register/></NoRequireAuth>} />
         <Route path="/shopcart" exact element={<NoRequireAuth><ShopCart/></NoRequireAuth>} />
         <Route path="/forgotpassword" exact element={<NoRequireAuth><ForgotPassword/></NoRequireAuth>} />
         {/* <Route path="/faq" exact element={<NoRequireAuth><Faq/></NoRequireAuth>} /> */}
         

            <Route path="/dashboard" exact element={<RequireAuth><LayoutDashboard><Allmeals/></LayoutDashboard></RequireAuth>}/>
            <Route path="/order" exact element={<RequireAuth><LayoutDashboard><Order/></LayoutDashboard></RequireAuth>} />   
            <Route path="/customMeal" exact element={<RequireAuth><LayoutDashboard><CustomMeal/></LayoutDashboard></RequireAuth>} />
            <Route path="/address" exact element={<RequireAuth><LayoutDashboard><Address/></LayoutDashboard></RequireAuth>} />
            <Route path="/cart" exact element={<RequireAuth><LayoutDashboard><Cart/></LayoutDashboard></RequireAuth>} />
            <Route path="/gifcard" exact element={<RequireAuth><LayoutDashboard><Gifcard/></LayoutDashboard></RequireAuth>} />
            <Route path="/wallet" exact element={<RequireAuth><LayoutDashboard><Wallet/></LayoutDashboard></RequireAuth>} />
            <Route path="/changePassword" exact element={<RequireAuth><LayoutDashboard><ChangePassword/></LayoutDashboard></RequireAuth>} />
            <Route path="/Profile" exact element={<RequireAuth><LayoutDashboard><Profile/></LayoutDashboard></RequireAuth>} />
            <Route path="/faq" exact element={<RequireAuth><LayoutDashboard><Faq/></LayoutDashboard></RequireAuth>} />
          

         <Route path="/contact" exact element={<NoRequireAuth><ContactUs/></NoRequireAuth>} />
         <Route path="/page404" exact element={<Custom404/>} />
         <Route path="*" element={<Navigate to ="/page404" />}/>
       </Routes> 
        
       <Footer/>
      </div>
     </BrowserRouter>
    
    </>
  );
}

export default App;
