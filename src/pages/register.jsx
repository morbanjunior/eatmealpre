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


const Register = () => {
  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [startDate, setStartDate] = useState();
  const [email, SetEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, SetconfirmPassword] = useState('');
  const [promo, SetPromo] = useState('');
  const [emptyInput, SetEmptyInput] = useState(''); 
  

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
      // console.log(JSON.stringify(error.status))
      if(JSON.stringify(error.status) === '500'){
        // SetEmptyInput(JSON.stringify(error.data.error.message))
        toast.error(JSON.stringify(error.data.error.message), {
          position: "top-left",
        });
      }
      
     
     
      if(JSON.stringify(error.status) === '422'){
        // SetEmptyInput(JSON.stringify(error.data.error.message))
        toast.error(JSON.stringify(error.data.error.message), {
          position: "top-left",
        });
      }
      console.log(error)

     }
  
   
},[data, isError])

const sign_up = {
  "first_name": firstName,
  "last_name": lastName,
  "email": email,
  "password": password,
  "password_confirmation": password,
  "username": firstName + lastName
}
  
  const handlerRegister = async (e) =>{
    e.preventDefault();
      
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
      }
      else{
        await registerUser({sign_up}) 
      }
  }

  return (
    <>
     <Topbar/>
     <Nav/>

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
               value={startDate}
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