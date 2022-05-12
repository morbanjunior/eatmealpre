import React from 'react'
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) =>{
   
    const currentUser = localStorage["login"];
    
    return (currentUser ? children : <Navigate to="/login" />)
  }

  export const NoRequireAuth = ({ children }) =>{
   
    const currentUser = localStorage["login"];
    
    return (!currentUser ? children : <Navigate to="/dashboard" />)
  }