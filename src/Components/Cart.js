import React from 'react'
import list from './Productdata'
import './Cart.css'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react'
import CartContext from './context'
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { CART_ITEMS } from './CartProvider'



function Cart( product) {

  // Toast function strted
  const onclickhandler=()=>{
    toast.info('Item Added Successfully')
  }
  // Toast function end

  const{dispatch,state}= useContext(CartContext)
  const addToCart=(product)=>{
dispatch({
  type:'ADD_TO_CART',payload:product
  
})
}


 const {productId}=useParams()
  const p =list.find((p)=>p.id ==productId)

  return (
   
    <>
        
<>

<div className="container blogmain mb-5">
  <div className="box1">
    <h2 className='blogh1'>Get up 30% off</h2>
    <p className='blogp1'>HURRY UP THIS IS LIMITED</p>
  </div>
  <div className="box2">
  <h2 className='blogh1'>super sale</h2>
  <p className='blogp1'>SAVE 50 % ON ANY ORDER</p>
  </div>
  <div className="box3">
  <h2 className='blogh1'>FREE SHIPPING </h2>
  <p className='blogp1'>ON ORDER OVER RS-1000</p>
  </div>
</div>



<div className="container-fluid cart-item text-center" id="section1">
<div className="row maincart d-flex ">
    
          
          {
      list.map(record=>{

        return(

          <>
          <div className="container-fluid col-lg-4 col-md-6 py-2  maincarts ">
              <Link to={`/productpage/${record.id}`}><img src={record.icon} className="card-img-top cart-image" alt="..."/></Link>
              <div className="card-body  ">
                <h6 className="card-title cart-tittle  ">{record.name}</h6>
                <h5 className="card-text cart-tittle1 ">{record.paragraph}</h5>
                <span className='star-rating'>
                
                <i className="bi bi-star-fill float-start " ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                </span>
                <br />
                <br />
                

                <Link className="btn btn-outline-primary d-grid " href='#' role='button'  onClick={()=>{addToCart(record) 
                onclickhandler()}} >Add To Cart</Link>
              </div>  
              </div>
              
              
              
          </>
        )
      })  
    }  
    </div>
    </div> 
    <ToastContainer position='top-right' theme='colored'/>
    
</>

    </>
  )
}

export default Cart
