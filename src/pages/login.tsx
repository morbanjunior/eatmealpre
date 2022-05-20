import React, {useState, useEffect} from 'react'
import styles from '../styles/Login.module.css'
import LogoEat from '../image/footerLogo.png'
import {useLoginUserMutation} from '../redux/api/authApi'
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import loginImg from '../image/loginbackground.png'
import BeatLoader from "react-spinners/ClipLoader";

const Login = () => {

  const [email, SetUserEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const [errorLoing, SetErrorLoing] = useState<string>('');

  const navigate = useNavigate()

  const [loginUser,{data, isError, error, isLoading}] = useLoginUserMutation();
  
    
  useEffect(() => {

    if(data && data.data.access_token){
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: data.data.access_token,
          userData: data.data.user
          
        })
      );
      // SetErrorLoing('');
      SetUserEmail('');
      SetUserEmail('');
      navigate('/dashboard')
      // SetIsLogin(true)
    }
   if(isError){
   
    // if(JSON.stringify(error.status) == '401'){
      // SetErrorLoing(JSON.stringify(error.data.error.message));
    //   toast.error(JSON.stringify(error.data.error.message), {
    //     position: "top-left",
    //   });
    // }

    if (error) {
      if ('status' in error) {
        // you can access all properties of `FetchBaseQueryError` here
        toast.error(JSON.stringify(error.data.error.message), {
              position: "top-left",
            });
      }
    }
  
   }
  
   
},[data, isError])

  const sign_in= {
            "login": email,
          "password": password
       }

  const HandlerLogin = async (e: React.FormEvent) =>{
        e.preventDefault();
  
       if(email=='' || password==''){
        // SetErrorLoing('Email or password are required')
        toast.error('Email or password are required', {
          position: "top-left",
        });
       }
       else{
        await loginUser({sign_in})
         
       }
       
    }

    if(data){
      console.log(JSON.stringify(data.data.access_token));
     }

  return (
    <>
    <Topbar/>
     <Nav home={false}/>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '700px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${loginImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
  
      }}>
      <span className={styles.textHead}>Log In</span>
          <div className={styles.containerBody}>
            <div className={styles.containerinput}>
              <input placeholder='User or Email' type='text' className={styles.input}
                  value={email} onChange={ (event) => {
                    SetUserEmail(event.target.value) 
                    SetErrorLoing('')
                    }}
              />
              
            </div>
            {/*  */}
            <div className={styles.containerinput}>
               <input placeholder='password' type='password' className={styles.input}
                  value={password} onChange={ (event) => {
                    SetPassword(event.target.value)
                    SetErrorLoing('')
                   }}
               />  
            </div>
            <BeatLoader loading={isLoading}  size={35} />
            {/* <div className={styles.errorLogin}> {errorLoing} </div> */}
            <div className={styles.buttonContact} onClick={HandlerLogin}>Log In</div>
            
            <span className={styles.registerLink}>Not yet a member? <Link to='/register' className={styles.registerLink2}> Register here</Link></span>
            <Link to='/forgotpassword' className={styles.registerLink2}> Forgot Password</Link>
          </div>
      </div>
      </>
  )
}

export default Login

