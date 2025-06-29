import React, { useState } from 'react'
import './Orderpage.css'
import { Link } from 'react-router-dom'
import CartContext from './context'
import  { useContext } from 'react'
import {ToastContainer,} from "react-toastify";





function Orderpage(cart) {
    const{dispatch,state}=useContext(CartContext);
    const addToCart=(product)=>{
dispatch({
  type:'ADD_TO_CART',payload:product
  
})

}


// Toast function strted
// new try something start



  
  
//   // end

    // add new
    const [showmodal,setshowmodal]=useState(false)
    // end
    
    


  return (

    
    <>

{/* new line add */}





  <>
  <div className='modalpage'>

    
    {
      showmodal && <div className='modalpage1'><p className='are'>Are You Sure ?</p>
<p className='sure'>Are You sure you want to Confirm your order
<br />




</p>


</div>

    }
    
  </div>
    
  </>



     <div className="container" >
      <div className="form">
        <h3 className='ADD'>Add Delivery address & payment</h3>
        <form action="https://formsubmit.co/naziaf421302@gmail.com" method="post">
          <label className='labels'>Full Name  </label>
          <br />
          
            <input className="buy" type="text" name="Name"  placeholder='Name' autoComplete="off"  required/>
            <br/>
            <label className='labels'>Email Address  </label>
            <br />
            <input className="buy" type="email" name="email" placeholder="Email Address"/>
             <br />
            <label className='labels'>Mobile Number  </label>
            <br />
           <input className="buy"  type="text" name=" MobNumber" placeholder='Number1'  autoComplete="off" />
           <br />
           <label className='labels'>Alternative Mobile number  </label>
           <br />
           <input className="buy"  type="text" name=" Alternative Number" placeholder='Number2' autoComplete="off" required/>
           <br />
            <label className='labels'>Permanent Address  </label>
            <br />
            <input className="buy" type="address" name="address" placeholder='Address'  autoComplete="off" required/>
            <br/>
            


            
            {state.cart.map(item =>{
                return(
                    <tr className='customer' >
                    <label htmlFor="">Customer Order</label>
                    <input className='customerorder' type="text" name='CustomerOrder 1' value={item.name}  />
                    
                    </tr>
                )
                    
                
            })}
        
            <br/><br/>
            <img  className ="orderimage" src="Image/barcodee.jpeg" alt="" />
            <br /><br />
            <label className='labels'>Please share transition number (security perpose)  </label>
            <br /><br />
            <input  className="buy" type="text" name='Transiction Id' placeholder='Transiction Id' />
            <br/><br/>
            <button className="ordersubmit" type="submit"  >submit</button>
            <Link to="/ShowCart"><button className="orderback" type="submit">Back</button></Link>
        </form>
      
     
    </div> 
    
    </div> 
    <ToastContainer position="top-right" theme='colored'/>
    
    </>
    
    
  );
 
 

};



export default Orderpage
