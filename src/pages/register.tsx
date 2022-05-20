import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../styles/Register.module.css'
import LogoEat from '../image/footerLogo.png'
import Topbar from '../componets/home/Topbar'
import Nav from '../componets/home/Nav'
import {useRegisterUserMutation} from '../redux/api/authApi'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/ClipLoader";
import loginImg from '../image/loginbackground.png'
import { SignupModel } from '../model/UserModel'


const Register = () => {
  const [firstName, SetFirstName] = useState<string>('')
  const [lastName, SetLastName] = useState<string>('')
  const [startDate, setStartDate] = useState<Date | string>();
  const [email, SetEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, SetconfirmPassword] = useState<string>('');
  const [promo, SetPromo] = useState<string>('');
  const [emptyInput, SetEmptyInput] = useState<string>(''); 
  

  const navigate = useNavigate();

  const [registerUser,{data, isError, error, isLoading}] = useRegisterUserMutation();

  useEffect(() => {
    if(data ){
    //   localStorage.setItem(
    //     "login",
    //     JSON.stringify({
    //       userLogin: true,
    //       token: data.access_token,
    //     })
    //   );
      SetEmptyInput('');
          SetFirstName('');
          SetLastName('');
          SetEmail('');
          setPassword('');
          SetconfirmPassword('');
          setPhoneNumber('');
          SetPromo('');
    //   navigate('/dashboard');
    //   SetIsLogin(true)
    // console.log(data.message)
    toast.success(data.message, {
      position: "top-left",
    });
    }

    if(isError){
      // if(JSON.stringify(error.status) === '500'){
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
     
     
      // if(JSON.stringify(error.status) === '422'){
      //   toast.error(JSON.stringify(error.data.error.message), {
      //     position: "top-left",
      //   });
      // }
      console.log(error)

     }
  
   
},[data, isError])

const sign_up = {
  "first_name": firstName,
  "last_name": lastName,
  "email": email,
  "password": password,
  "username": firstName + lastName
}

function isValiEmail(val: string) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(val)) {
    return true;
  }
}
  
  const handlerRegister = async (e: React.FormEvent) =>{
    e.preventDefault();

    const emailCheck = isValiEmail(email)

      if(!firstName){
          // SetEmptyInput("Please fill out the First Name field" )
          toast.error("Please fill out the First Name field", {
            position: "top-left",
          });
      } else if(!lastName ){
          // SetEmptyInput("Please fill out the Last Name field" )
          toast.error("Please fill out the Last Name field", {
            position: "top-left",
          });
      }else if(!email){
          // SetEmptyInput("Please fill out the Email field" )
          toast.error("Please fill out the Email field", {
            position: "top-left",
          });
      }else if(emailCheck){
        toast.error("Please fill out a valid Email", {
          position: "top-left",
        });
      }
      else if(!password){
          // SetEmptyInput("Please fill out the Password field" )
          toast.error("Please fill out the Password field", {
            position: "top-left",
          });
      }else if(!confirmPassword){
          // SetEmptyInput("Please fill out the Confirm Password field" )
          toast.error("Please fill out the Confirm Password field", {
            position: "top-left",
          });
      }
      else if(password !== confirmPassword){
          // SetEmptyInput("Password and Confirm Password doesn't match" )
          toast.error("Password and Confirm Password doesn't match", {
            position: "top-left",
          });
      }else if(password.length <= 5){
        toast.error("Password is too short (minimum is 6 characters", {
          position: "top-left",
        });
      }
      else{
        await registerUser({sign_up}) 
      }
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
      <span className={styles.textHead}>Register</span>
          <div className={styles.containerBody}>
            <div className={styles.containerinput}>
              <input placeholder='Firt Name *' type='text' className={styles.input} 
                value={firstName}
                onChange={(event) => {
                SetFirstName(event.target.value)
                 SetEmptyInput('')}}
              />
              <input placeholder='Last Name *' type='text' className={styles.input}
                value={lastName}
                onChange={(event) => {SetLastName(event.target.value)
                  SetEmptyInput('')}}
              />
            </div>
            {/*  */}
            <div className={styles.containerinput}>
              <input placeholder='Email *' type='email' className={styles.inputSecound}
              value={email}
              onChange={(event) => {SetEmail(event.target.value)
                SetEmptyInput('')}}
              />
            </div>
            {/*  */}
            <div className={styles.containerinput}>
              <input placeholder='Password *' type='password' className={styles.input}
              value={password}
              onChange={(event) => {setPassword(event.target.value)
                SetEmptyInput('')}}
              />
              <input placeholder='Confirm Password *' type='password' className={styles.input}
              value={confirmPassword}
              onChange={(event) => {SetconfirmPassword(event.target.value)
                SetEmptyInput('')}}
              />
            </div>
             {/*  */}
             <div className={styles.bottomInputs}>
              <input placeholder='Phone Number' type='phone' className={styles.inputtree}
              value={phoneNumber}
              onChange={(event) => {setPhoneNumber(event.target.value)
                SetEmptyInput('')}}
              />
              <input placeholder='Promo Code (Optional)' type='text' className={styles.inputtree}
              value={promo}
              onChange={(event) => {SetPromo(event.target.value)
                SetEmptyInput('')}}
              />
              <input type='date' className={styles.inputtree}
              //  value={startDate}
               onChange={(event) => {setStartDate(event.target.value)
                 SetEmptyInput('')}}
                 placeholder=''
              />
            </div>
            <div className={styles.errorContainer}>
              <BeatLoader loading={isLoading}  size={35} />
                {/* {emptyInput} */}
            </div>
             
            <div className={styles.buttonContact} onClick={handlerRegister}>Submit</div>

            <span className={styles.registerLink}>Are you a member? <Link to='/login' className={styles.loginLink}> Log in here</Link></span>
          </div>
      </div>
      </>
  )
}

export default Register