import React from 'react'
import Topbar from '../../componets/home/Topbar'
import Nav from '../../componets/home/Nav'
import BestforUs from '../../componets/home/bestforUs'
import Header from '../../componets/home/Header'
import Amounts from '../../componets/home/Amounts'
import Eathome from '../../componets/home/Eathome'
import SomeFeatures from '../../componets/home/SomeFeatures'
import WeServe from '../../componets/home/WeServe'
import Testimonial from '../../componets/home/Testimonial'
import Footer from '../../componets/Footer'

const Home = () => {
  return (
    <>
    <Topbar/>
    <Nav home={true}/>
     <Header/>
    <BestforUs/>
    <Amounts/>
    <Eathome/>
    <SomeFeatures/>
    <WeServe/>
    <Testimonial/>
    </>
  )
}

export default Home