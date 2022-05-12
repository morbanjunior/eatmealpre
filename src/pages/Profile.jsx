import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../styles/profile.module.css'
// import DatePicker from "react-datepicker";
// import Select from 'react-select'


const Profile = () => {


    const [firstName, SetFirstName] = useState()
    const [lastName, SetLastName] = useState()
    const [startDate, setStartDate] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [secondPhoneNumber, setSecondPhoneNumber] = useState();
    const [feet, setFeet] = useState();
    const [inches, setInches] = useState();
    const [weight, setWeight] = useState();
    const [weightGoal, setWeightGoal] = useState();
    const [loose, setLoose] = useState();
    const [referralEmail, setReferralEmail] = useState();


  return (
    <div >
      <div className={styles.profileContainer}>
        <div className={styles.profileSupContainer}>
            <div className={styles.ProfileHeader}>
                <h6 className={styles.headerText}>Basic Details</h6>

                <div className={styles.namesContainerProfile}>  
                  <input placeholder='* First Name' className={styles.inputConstainerProfile} type='text'
                  value={firstName}
                  onChange={(event) => SetFirstName(event.target.value)}
                   />
                  <input placeholder='* Last Name'className={styles.inputConstainerProfile} type='text'
                  value={lastName}
                  onChange={(event) => SetLastName(event.target.value)}
                  />
                </div>
                <h6 className={styles.headerText}>Date of Birth</h6>
                <div className={styles.namesContainerProfile}>  
                  <input type='date' placeholderText="Date of Birth" className={styles.inputConstainerData}/>
                  
                  <div onChange={'onChangeValue'} className={styles.containerRdioProfile}>
                  <div className={styles.containerRadio}>
                    <input type="radio" id="Male " value="Male " name="type_container" className={styles.radioInput} />
                    <span className={styles.radioLabel} for="Male " >Male</span>
                    
                  </div>
                  <div className={styles.containerRadio}>
                    <input type="radio" id="Female" value="Female" name="type_container" className={styles.radioInput} />
                    <span className={styles.radioLabel} for="Female"  >Female</span>
                  
                  </div>
                  <div className={styles.containerRadio}>
                    <input type="radio" id="Other" value="Other" name="type_container" className={styles.radioInput} />
                    <span className={styles.radioLabel} for="Other" >Other</span>
                 
                  </div>
                  </div>
                </div>
                <div className={styles.namesContainerProfile}>  
                  <input placeholder='* Phone Number' className={styles.inputConstainerProfile} type='tel'
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                   />
                  <input placeholder=' Secondary Phone Number'className={styles.inputConstainerProfile} type='tel'
                  value={secondPhoneNumber}
                  onChange={(event) => setSecondPhoneNumber(event.target.value)}
                  />
                </div>
                <h6 className={styles.headerText}>How did you know about us?</h6>
               
                <div className={styles.namesContainerProfile}>  
                    <div className={styles.listConstainerData}>

                    <select name="howdidyouknow" id="howdidyouknow" className={styles.selectProfile}>
                      <option value="Friend">Friend</option>
                      <option value="Family">Family</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Bing">Bing</option>
                      <option value="Another website">Another website</option>
                      <option value="Bilboard">Bilboard</option>
                      <option value="Radio">Radio</option>
                      <option value="Xsport">Xsport</option>
                      <option value="Personal Trainer">Personal Trainer</option>
                    </select>

                    </div>
                    <input placeholder='Referral Email'className={styles.inputConstainerProfile} type='text'
                    value={referralEmail}
                    onChange={(event) => setReferralEmail(event.target.value)}
                    />
                </div>
                <h6 className={styles.headerText}>Let's talk about your goal</h6>
                <div className={styles.namesContainerProfile}>  
                  <div className={styles.namesSubContainerProfile}>
                  <input placeholder='Feet' className={styles.inputConstainerProfile} type='number' min="-0" 
                  value={feet}
                  onChange={(event) => setFeet(event.target.value)}
                   />
                   <input placeholder='Inches' className={styles.inputConstainerProfile} type='number' min="-0" 
                  value={inches}
                  onChange={(event) => setInches(event.target.value)}
                   />
                  </div>
                  <input placeholder='Weight'className={styles.inputConstainerProfile} type='number' min="-0" 
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  />
                </div>
                <div className={styles.headerText}></div>
                <div className={styles.namesContainerProfile}>  
                    <div className={styles.listConstainerData}>

                   <select name="lifactive" id="lifactive" className={styles.selectProfile}>
                      <option value="Lightly Active">Lightly Active</option>
                      <option value="Moderately Active">Moderately Active</option>
                      <option value="Very Active">Very Active</option>
                      <option value="Extra Active">Extra Active</option>
                   </select>

                    </div>
                    <input placeholder='Weight Goal - In Pounds Please'className={styles.inputConstainerProfile} type='number' min="-0" 
                    value={weightGoal}
                    onChange={(event) => setWeightGoal(event.target.value)}
                    />
                </div>
                <div className={styles.itemContainerProfile}>  
                    <input placeholder='Loose 20lbs in the next 2 months'className={styles.inputItemConstainerProfile} type='text'  
                    value={loose}
                    onChange={(event) => setLoose(event.target.value)}
                    />
                </div>
                <div className={styles.saveProfile}>Save</div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Profile