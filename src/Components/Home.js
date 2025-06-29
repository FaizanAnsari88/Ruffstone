import React from 'react'
// import { Products } from './Products'
import Cart from './Cart'
import Slide from './Slide'
import Uppercart from './uppercart'
import products from './Productdata'
import Footer from './Footer'




function Home() {
  return (
    <div>
      
    
      <Slide />
       
      <Cart Products={products}/>
      <Uppercart/> 
      
      {/* <Products/> */}
      <Footer/>

      
    </div>
  )
}

export default Home
