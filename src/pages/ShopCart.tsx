import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import styles from '../styles/shopCart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import meal2 from "../image/meal2.png";
import bagImg from "../image/bag.png"
import CartComponents from '../componets/CartComponents';
import BillingAddress from '../componets/BillingAddress';
import { useNavigate } from "react-router-dom";
import BottomBar from '../componets/BottomBar';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Topbar from '../componets/home/Topbar';
import Nav from '../componets/home/Nav';
import { selectcartItems, selectTotalAmount, selectcartTotalQuantity } from '../redux/store';



const ShopCart = () => {

  const itemMeals = useSelector(selectcartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectcartTotalQuantity);
  // const totalQuantity = true;

  const dispatch = useDispatch;

  const [choiceContainer,SetChoiceContainer] = useState(1.00);
  const [choiceContainerOptions,SetChoiceContainerOptions] = useState('glasswares');
  const [checkedRadioG, SetCheckedRadioG] = useState(false);
  const [checkedRadioP, SetCheckedRadioP] = useState(true);

  const [useExisting,SetUseExisting] = useState(false);
  const [useExistingContainer,SetUseExistingContainer] = useState(0);
 

  const [bag,SetBag] = useState(10.00);
  const [bagOptions,SetbagOptions] = useState(false);

  const [pMembership,SetPmembreship] = useState(139.99);
  const [pMembershipChoice,SetMembershipChoice] = useState(false);

  const [noDelivery, SetNodelivery] = useState(false);
  const [useDigitalWallet, SetUseDigitalWallet] = useState(false);
  const [digitalWallet, SetDigitalWallet] = useState(0);

  const [gift, SetGift] = useState(false);
  const [giftVoucher, SetVoucher] = useState();
  const [couponDis, SetCouponDis] = useState();

  const [howHearUs, SetHowHearUs] = useState();
  

  const [deliveryDate, SetDeliveryDate] = useState();

  const [deliveryCharge, SetDeliveryCharge] = useState(9.99);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  // datate state
  const [valueDate, setValueDate] = useState(
    new Date()
  );


  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value=="plastic"){
      SetCheckedRadioG(!checkedRadioG);
      SetCheckedRadioP(!checkedRadioP);
      SetChoiceContainerOptions("glasswares");
    }else if(event.target.value=="glasswares"){
      SetCheckedRadioG(!checkedRadioG);
      SetCheckedRadioP(!checkedRadioP);
      SetChoiceContainerOptions('plastic');
    }
    
    console.log(choiceContainerOptions);
  }

  const navigate = useNavigate();

  const handlerSignUn =()=>{
    navigate('/register');
  }
  const handlerSign =()=>{
    navigate('/login');
  }

  // const handleChangeDate = (newValue) => {
  //   setValueDate(newValue);
  // };
  
  const isLogin = localStorage["login"];

  return (
    <>
    <Topbar/>
    <Nav home={false}/>
    <div className={ ''}>
      <div className={styles.shopCartwrap}>
        <div className={styles.rightShop}>
          <>
          {
            totalQuantity ? (

              itemMeals.map((item, index) => (
                <CartComponents item={item} key={index}/>
              ))
              
            ) 
            : 
            (<div className={styles.shopCartListItem}><div className={styles.noItemConstrainer}><h3>No items in your cart</h3></div></div>)
            
          }
    <div>
      
    {
        totalQuantity && isLogin ? (
        <BillingAddress/>
        ) : <></>
      }
    </div>
           </>
        </div>

     { totalQuantity ? (
       <>
          <div className={styles.leftShop}>
          
           <div className={styles.shopSubItem}>
            
            <div className={styles.containerCenter}>

                  <div className={styles.iconshopLeftSideContainer}> 
                   <TakeoutDiningOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Choice Of Container</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                  <div className={styles.imgshopLeftSideContainer}>
                    <div className={styles.bodyleftContainerShop}>
                    <img src={meal2}  alt=''  className={styles.ImgShop}/>
                       <div onChange={onChangeValue}>
                         <Radio defaultChecked
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}/>
                          <label className={styles.checkLabel}  >Plastic</label>
                        </div>
                    </div>
                          <div className={styles.bodyRightContainerShop}>
                            <span>8x $1.00</span>
                            <div className={styles.bottomText}>${choiceContainer}</div>
                          </div>
                  </div>
                </div>

                {/* Icon 2 */}

                <div className={styles.iconshopLeftSideContainer}> 
                   <BackpackOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Bag</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                  <div className={styles.imgshopLeftSideContainer}>
                    <div className={styles.bodyleftContainerShop}>
                    <img src={bagImg}  alt=''  className={styles.ImgShop}/>
                    <div className={styles.bagContainertBody}>
                    <span className={styles.checkLabelP}>
                       No. of foods Per Bag: 10
                      Bag Price: $10.00
                      Total Foods Count: 8
                       </span>
                       <div onChange={onChangeValue}>
                       <Checkbox 
                            defaultChecked
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
                          <label className={styles.checkLabel}  >Use Existing Bag</label>
                        </div>
                    </div>
                       
                    </div>
                          <div className={styles.bodyRightContainerShop}>
                            <span>1X $10.00</span>
                            <div className={styles.bottomText}>${choiceContainer}</div>
                          </div>
                  </div>
                </div>

                 {/* Icon end */}

                 <div className={styles.iconshopLeftSideContainer}> 
                   <BackpackOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Prime Membership ($139.99)</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                 <div className={styles.bagmembershipBody}>
                 <Checkbox 
                            
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
                      <div className={styles.bagContainertBody}>
                          <label className={styles.checkLabel}  >Activate Prime Membership</label>
                           <span className={styles.checkLabel}>
                            Free delivery for 1 Year
                                </span>
                          </div>
                          
                    </div>
                </div>
                 {/* End 3 */}

                 <div className={styles.iconshopLeftSideContainer}> 
                   <CalendarTodayOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Expected Delivery Date</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                 <div className={styles.bagmembershipBody}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {/* <DesktopDatePicker
                          label="Select Date"
                          inputFormat="MM/dd/yyyy"
                          value={valueDate}
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField {...params} />}/> */}
                    <input type='date' />
                </LocalizationProvider>
                    </div>
                    <div className={styles.imgshoDigitalWtSideContainer}>
                      <div>
                      <div>
                      <Checkbox 
                            
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
                        <label className={styles.checkLabel}>Use Digital Wallet</label>
                      </div>
                      <span className={styles.checkLabel} >Balance: $100.25</span>
                      </div>
                      <div>
                      <div>
                      <Checkbox 
                            defaultChecked
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
                        <label className={styles.checkLabel}>Use Digital Wallet</label>
                      </div>
                      </div>
                    
                      </div>
                </div>
                {/* End Date */}
                <div className={styles.iconshopLeftSideContainer}> 
                   <CalendarTodayOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Expected Delivery Date</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                 <div className={styles.bagmembershipBody}>
                 
                    </div>
                    <div className={styles.imgshopLeftSideContainer}>
                      <div>
                      <div>
                      <LoyaltyOutlinedIcon style={{marginRight: '10px' }}/>
                        <label className={styles.checkLabel}>Gift</label>
                        <HelpOutlineOutlinedIcon style={{marginLeft: '10px' , color:'#FF4646'}}/>
                      </div>
                      
                      </div>
                      <div>
                      <div>
                      <Checkbox 
                            
                            sx={{
                              color: '#FF4646',
                              '&.Mui-checked': {
                                color:'#FF4646',
                              },
                            }}
                          />
                        <span className={styles.checkLabel}>Send as gift</span>
                      </div>
                      </div>
                    
                      </div>
                </div>

                {/* gif cart */}
                <div className={styles.iconshopLeftSideContainer}> 
                   <LocalOfferOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Coupon/Discount</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                   
                      <div className={styles.containerButtonCoupon}>
                        <input type="text" placeholder='Apply coupon' className={styles.inputContainerCupon}/>
                        <div className={styles.couponButton}><span>Apply </span>
                        <CheckOutlinedIcon />
                        </div>
                      
                    </div>
                </div>
                

                {/* Cupot */}

                {/* gif Voucher */}
                <div className={styles.iconshopLeftSideContainer}> 
                   <CardGiftcardOutlinedIcon style={{marginRight: '10px'}}/>
                   <h4 className={styles.titleShop}>Gift Voucher</h4>
                  </div>
                 <div className={styles.itemContainerShop}>
                   
                      <div className={styles.containerButtonCoupon}>
                        <input type="text" placeholder='Apply Gift Voucher' className={styles.inputContainerCupon}/>
                        <div className={styles.couponButton}><span>Apply </span>
                        <CheckOutlinedIcon />
                        </div>
                      
                    </div>
                </div>
                

                {/* viycger */}
             </div>
             
            </div>
            <div>
            </div>
            {/* Inica aqui */}

             <div className={styles.shopSubItem}>
               <div style={{padding: '20px'}}>
               <div className={styles.summaryContainer}>
                 <ReceiptLongOutlinedIcon style={{marginRight: '10px'}}/>
                    <span className={styles.titleShop}>Order Summary</span> 
                  </div>
                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Total Meal Amount</span> 
                  <span className={styles.detailsSummaryTotal}>$ {totalAmount}</span>
                  </div>
                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Glassware / Plasting Container Amount</span> 
                  <span className={styles.detailsSummaryTotal}>$ {totalAmount * choiceContainer}</span>
                  </div>
                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Existing Reusable Glassware Amount(0)</span> 
                  <span className={styles.detailsSummaryTotal}><h6 className={styles.detailsSub}>$0.00</h6></span>
                  </div>

                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Bag Amount</span> 
                  <span className={styles.detailsSummaryTotal}>$10.00</span>
                  </div>

                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Existing Reusable Bag Amount(0)</span> 
                  <span className={styles.detailsSummaryTotal}><h6 className={styles.detailsSub}>$0.00</h6></span>
                  </div>

                  <div className={styles.subSummaryTotal}>
                  <span className={styles.detailsSummary}>Sub Total Amount</span> 
                  <span className={styles.detailsSummaryTotal}>$27.99</span>
                  </div>
                

                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Tax</span> 
                  <span className={styles.detailsSummaryTotal}>$0.32</span>
                  </div>

                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>Delivery Charge</span> 
                  <span className={styles.detailsSummaryTotal}>$9.99</span>
                  </div>

                  <div className={styles.SummarygranTotal}>
                  <span className={styles.detailsSummary}>Grand Total</span> 
                  <span className={styles.detailsSummaryTotal}>$ 200</span>
                  </div>
                 
                  <div className={styles.subSummary}>
                  <span className={styles.detailsSummary}>All Meal Prep Bucks in your Digital Wallet</span> 
                  <span className={styles.detailsSummary}><span className={styles.detailsdigital}>$0.60</span></span>
                  </div>

                  <div className={styles.subSummaryRadio}>
                  <span className={styles.detailsSummaryDelivery}>Delivery Frequency</span> 
                 
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      '& .MuiSvgIcon-root': {
                        // fontSize: 20,
                        color: '#FF4646',
                      },
                    }}
                  >
                    <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
                    <FormControlLabel value="One Time" control={<Radio />} label="One Time" />
                  </RadioGroup>

                  </div>

                  {!isLogin ? ( <div className={styles.buttonSign}>
                  <div className={styles.buttonSignUn} onClick={handlerSignUn}><h6 className={styles.buttonText}>Signup to Proceed</h6></div>
                    <h6>Or</h6>
                   <div className={styles.buttonSignIn} onClick={handlerSign}> <h6 className={styles.buttonText}>Signin to Proceed</h6></div>
                    </div>) : (<> 
                    
                    <div className={styles.newButtonProceed}>
                    <ShoppingCartCheckoutOutlinedIcon style={{marginRight: '5px'}}/>
                      <div>Proceed to Checkout</div>
                    </div>
                    
                    </>)
                   
                  }
                 </div>
                 
            </div>
           
          </div>
         
          </>

     ) : <></>}
      </div>
    </div>
    </>
  )
}

export default ShopCart
