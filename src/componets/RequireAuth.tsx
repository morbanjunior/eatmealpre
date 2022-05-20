import React from 'react'
import { Navigate } from 'react-router-dom';

interface Props{
  children:JSX.Element,
}

export const RequireAuth: React.FC<Props> = ({ children }) =>{
   
    const currentUser = localStorage["login"];
    
    return (currentUser ? children : <Navigate to="/login" />)
  }

  export const NoRequireAuth: React.FC<Props> = ({ children }) =>{
   
    const currentUser = localStorage["login"];
    
    return (!currentUser ? children : <Navigate to="/dashboard" />)
  }