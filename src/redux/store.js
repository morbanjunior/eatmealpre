import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";

export default configureStore({
    reducer: { 
      cart: cartReducer,
      [authApi.reducerPath]: authApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>{
      return  getDefaultMiddleware().concat(authApi.middleware);
     },
     middleware: (getDefaultMiddleware) =>{
      return  getDefaultMiddleware().concat(categoriesApi.middleware);
     },
  });