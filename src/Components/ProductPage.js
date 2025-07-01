import React from 'react'
import { useParams } from 'react-router-dom'
import list from './Productdata'
import Footer from './Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import  { useContext } from 'react'
import CartContext from './context'
import { Link } from 'react-router-dom'
import './ProductPage.css'
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CART_ITEMS } from './CartProvider'

function ProductPage({}) {

// Toast function strted
  const onclickhandler=()=>{
    toast.info('Item Added Successfully')
  }
  // Toast function end

  const{dispatch}= useContext(CartContext)
  const addToCart=(product)=>{
    
dispatch({
  type:'ADD_TO_CART',payload:product
  
}
)






}
// 



  const {productId}=useParams()
  const p =list.find((p)=>p.id ==productId)




  return (
    <>
    
    <div className="card">
  <div className="row ">
    <div className="col-md-4">
      <img src={p.icon} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div className="card-body ">
        
        <h2 className="card-text1">{p.name}</h2>
        <br />
        <p>Warranty: 6 months warranty</p>
        <p>In Stock: 25 units sold this week</p>
        <p className="card-text1"><small className="text-body-secondary">{p.paragraph}</small></p>
        <span className='star-rating '>
                
                <i className="bi bi-star-fill float-start  " ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                <i className="bi bi-star-fill float-start" ></i>
                </span>
        
      </div>
    <br />
    <Link className="btn btn-outline-primary d-grid mb-3 "  role='button' onClick={()=>{addToCart(p)
    onclickhandler() } } >Add To Cart</Link>              
    </div>
  </div>
</div>
<ToastContainer position="top-right" theme='colored'/>
    
    <Footer/>
    
    </>
  )
}

export default ProductPage
