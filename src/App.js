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
         
         <Route path="/dashboard" exact element={<RequireAuth><Dashboard/></RequireAuth>}>
           <Route path="order"  element={<RequireAuth><Order/></RequireAuth>} />   
           <Route path="customMeal" element={<RequireAuth><CustomMeal/></RequireAuth>} />
           <Route path="address" element={<RequireAuth><Address/></RequireAuth>} />
           <Route path="cart" element={<RequireAuth><Cart/></RequireAuth>} />
         </Route>

         <Route path="/contact" exact element={<NoRequireAuth><ContactUs/></NoRequireAuth>} />
         <Route path="/page404" exact element={<Custom404/>} />
         <Route path="*" element={<Navigate to ="/page404" />}/>
       </Routes>  
      </div>
     </BrowserRouter>
    
    </>
  );
}

export default App;
