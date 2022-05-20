import React, {useEffect} from 'react'
import { useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import styles from '../../styles/navbarAdmin.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import user from '../../image/user.png'
import { cartType } from '../../redux/cartSlice';
import { selectcartTotalQuantity } from '../../redux/store';
import { toast } from "react-toastify";


const NavBar = () => {
    const totalQuantity = useSelector(selectcartTotalQuantity);
    const navigate = useNavigate();

const logout =()=>{
  localStorage.removeItem("login");
  navigate('/');
}

useEffect(() => {
  const timer = setTimeout(() => {
    
    localStorage.removeItem("login");
    navigate('/');
    
    toast.success(`Auto logOut`, {
      position: "top-left",
    });
  }, 300000);
  return () => clearTimeout(timer);
}, []);

// const dataUser = JSON.parse(localStorage.getItem('login'));
const dataUser:string = JSON.parse(localStorage.getItem('login') || "");
//  console.log(dataUser);
//  console.log(dataUser.userData.last_name);

const email = 'morbanjunior@gmail.com';
const firstname = 'Ramon';
const lastname = 'Morban';
const fullname = firstname + lastname;

  return (
    <>
<div>
  {/* <div className="preloader flex-column justify-content-center align-items-center">
    <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
  </div> */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      {/* <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li> */}
    </ul>
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
          <i className="fas fa-search" />
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li> */}
      {/* end */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li> */}
      {/*  */}
      <Link to="/wallet"> 
      <li className="nav-item">
      <a className="nav-link" >
      <AccountBalanceWalletOutlinedIcon className='fa '/>
      <span className=""> $724.75</span>
        </a>
      </li></Link>
      {/*  */}
      {/*  */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="fa fa-user" aria-hidden="true"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            <div className="media">
              <img src={user} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                 {fullname}
                
                </h3>
                <p className="text-sm">{email}</p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider" />
          <Link to='/changePassword' className="dropdown-item">
            <i className="fas fa-key mr-2" /> Change password
          </Link>
          <div className="dropdown-divider" />
          <Link to='/Profile' className="dropdown-item">
            <i className="fa fa-cog mr-2" /> User Settings
          </Link>
          <div className="dropdown-divider" />
          <a onClick={logout} className="dropdown-item dropdown-footer">Log Out</a>
        </div>
      </li>
      {/*  */}
      {/*  */}
      <Link to="/cart"> 
      <li className="nav-item">
      <a className="nav-link" >
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        {totalQuantity ? <span className="badge badge-warning navbar-badge">{totalQuantity}</span>: ""}
        </a>
      </li></Link>
      {/*  */}
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
          <i className="fas fa-th-large" />
        </a>
      </li> */}
    </ul>
  </nav>
</div>

    </>
  )
}

export default NavBar