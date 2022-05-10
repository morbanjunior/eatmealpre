import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../image/footerLogo.png"
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Aside = () => {

 
  return (
    <div>
            <aside className="main-sidebar sidebar-light-primary elevation-4">
        <Link to="/dashboard" className="" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '10px'
                

            }}>
            <img src={logo} alt="One meals Logo" height="40px" width="" style={{}} />
        </Link>
        <div className="sidebar">
            {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={profileLogo} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
             <Link to="/dashboard/profile" className="d-block">Ramon Morban</Link>
            </div>
            </div> */}
            <div className="form-inline">
            {/* <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                </button>
                </div>
            </div> */}
            </div>
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu-open">
                
                </li>
                
               
                <li className="nav-header"></li>
               
                <li className="nav-item">
                <Link to="/dashboard/order" className="nav-link">
                   <AssignmentOutlinedIcon className="nav-icon"/>
                    <p>
                    My orders
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/address" className="nav-link">
                <BadgeOutlinedIcon className="nav-icon" />
                    <p>
                    Adress
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/" className="nav-link">
                <TakeoutDiningOutlinedIcon className="nav-icon" />
                    <p>
                    Book Catering
                    </p>
                </Link>
                </li>

                

                <li className="nav-item">
                <Link to="/dashboard/" className="nav-link">
                <VolunteerActivismOutlinedIcon className="nav-icon" />
                    <p>
                    Donate
                    </p>
                </Link>
                </li>
                
                {/* <li className="nav-item">
                <Link to="/dashboard/cart" className="nav-link">
                    <i className=" nav-icon fa fa-shopping-cart" />
                    <p>
                    Cart
                    </p>
                </Link>
                </li> */}
                <li className="nav-item">
                <a className="nav-link">
                <FastfoodOutlinedIcon className="nav-icon"/>
                    <p>
                    Meal Prep
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Meal Prep Menu`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Meal Prep Menu</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Keto`
                        }} className="nav-link">
                            <i className="far fa-circle nav-icon" />
                        <p>Keto</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/New Menu`
                        }}className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>New Menu</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Groceries`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Groceries</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Reselected Packs`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Reselected Packs</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Bulk Meals`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Paleo Meals</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Bulk Meals`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Bulk Meals</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/$9 menu`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>$9 menu</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Diabetic Meals`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Diabetic Meals</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Gourmet Meals`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Gourmet Meals</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/maelpremenu/Juices`
                        }}className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Juices</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={{
                        pathname:`/dashboard/customMeal`
                        }} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Custom Meal Prep</p>
                    </Link>
                    </li>
                </ul>
                
                </li>

                <li className="nav-item">
                <Link to="/dashboard/wallet" className="nav-link">
                <AccountBalanceWalletOutlinedIcon className="nav-icon" />
                    <p>
                    Digital Wallet
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/dashboard/faqdash" className="nav-link">

                    <QuizOutlinedIcon className="nav-icon" />
                    <p>
                    FAQs
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/gifcard" className="nav-link">
                    <CardGiftcardOutlinedIcon className="nav-icon"/>
                    <p>
                    Gift Card
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/faqdash" className="nav-link">
                    <SpaOutlinedIcon className="nav-icon"/>
                    <p>
                    Nutrition Packages
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/faqdash" className="nav-link">
                    <AirportShuttleOutlinedIcon className="nav-icon"/>
                    <p>
                    Pickup Glasssware
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/referEarn" className="nav-link">
                    <MonetizationOnOutlinedIcon className="nav-icon"/>
                    <p>
                    Refer & Earn
                    </p>
                </Link>
                </li>


                <li className="nav-item">
                <Link to="/dashboard/profile" className="nav-link">
                <PersonOutlinedIcon className="nav-icon"/>
                    <p>
                    Profile
                    </p>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/dashboard/changePassword" className="nav-link">
                    <PasswordOutlinedIcon className="nav-icon"/>
                    <p>
                    Password
                    </p>
                </Link>
                </li>
                

                <li className="nav-item">
                <Link to="/dashboard/contact" className="nav-link">
                    <EmailOutlinedIcon className="nav-icon" />
                    <p>
                    Contact Us
                
                    </p>
                </Link>
                </li>
               
                {/* <li className="nav-header">Account</li> */}
               
               
                {/* Items end here */}
               
            </ul>
            </nav>
        </div>
        </aside>

    </div>
  )
}

export default Aside