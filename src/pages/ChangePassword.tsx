import React,{useEffect, useState} from 'react'
// import { useChangePasswordMutation } from '../../../../Redux/Reducer/apis/authApi';
import styles from '../styles/changePassword.module.css'
import {useNavigate} from 'react-router-dom'


const ChangePassword = () => {
    const navigate = useNavigate();

const [newPassword, SetNewPassword] = useState('');
const [currentPassword, SetCurrentPassword] = useState('');
const [passwordChangeRepet, SetpasswordChangeRepet] = useState('');
const [errorPasswordChange, SetErrorPasswordChange] = useState('');



//   const [changePassword,{data, isError, error}] = useChangePasswordMutation();

    const handlerChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if(newPassword ===''){
            SetErrorPasswordChange('New Password is required')
        }
        else if(passwordChangeRepet ==='' ){
            SetErrorPasswordChange(' Repet Password is required')
        }
        else if(currentPassword ==='' ){
            SetErrorPasswordChange('Current Password is required')
        }
        else if(newPassword !== passwordChangeRepet){
            SetErrorPasswordChange('New Password and Confirm Password are not the same')
        }
        else{
            console.log('Sussces password');
            SetErrorPasswordChange('');
            SetNewPassword('');
            SetCurrentPassword('');
            SetpasswordChangeRepet('');
            // await changePassword({newPassword, currentPassword})
            // console.log(newPassword, currentPassword)
        
        }
    }

  return (
    <div>
        <div className={styles.contaienrChangePassward}>
            <div className={styles.itemsChangePassword}>
                <div className={styles.changePasswordCenter}>
                    <h4>Change Password</h4>
                    <div className={styles.formContainer}>
                        <div>
                            <input placeholder='New Password *' className={styles.inputChangePassword}
                             value={newPassword} onChange={ (event) => {
                                 SetNewPassword(event.target.value)
                                 SetErrorPasswordChange('');
                                 } }/>
                        </div>
                        <div>
                            <input placeholder='Confirm New Password *' className={styles.inputChangePassword}
                            value={passwordChangeRepet} onChange={ (event) => {
                                SetpasswordChangeRepet(event.target.value)
                                SetErrorPasswordChange('');
                                 }}/>
                        </div>
                        <div>
                            <input placeholder='Current Password *' className={styles.inputChangePassword}
                            value={currentPassword} onChange={ (event) => {
                                SetCurrentPassword(event.target.value)
                                SetErrorPasswordChange('');
                            }}
                            
                            />
                        </div>
                       
                    </div>
                     <span className='errorChangePassword'>{errorPasswordChange}</span>
                    <div className={styles.changePasswordButton} onClick={handlerChangePassword}>Change Password</div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default ChangePassword