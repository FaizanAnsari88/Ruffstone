import {ToastContainer,toast} from "react-toastify"
import CartContext from './context'
import  { useContext } from 'react'
import { Link } from 'react-router-dom';




function MyOrderpage(record){
  const onremove=()=>{
        toast.error('Item Remove Successfully')
      }
 const{dispatch,state}=useContext(CartContext);
    const addToCart=(product)=>{
    
dispatch({
  type:'ADD_TO_CART',payload:product
})
}
const removetocart=(product)=>{
dispatch({
  type:'REMOVE_TO_CART',payload:product
})
}
 



  return (
    <>

    






      <div className=' container showcartupper '>
      {
        state.cart.length > 0 ?
        <div>
        {state.cart.map(item=>
        
          <div>
    
    
<h2 className='onlyone'>You can order Only one Product at the same time</h2>
<table className="table  ">
  
  <tbody >
  
  <th className='line'>Product</th>
  <th className='line'>Description</th>
  <th className='line'>Price</th>
  <th className='line'>Remark</th>
    <tr className='line'>
      
      <td><img src={item.icon} className=" Cartshowimage" alt="..."/></td>
      <td className='line'><p class="card-text">{item.name}</p>
      <span className='star-rating '>
                
                <i className="bi bi-star-fill float-start star " ></i>
                <i className="bi bi-star-fill float-start star" ></i>
                <i className="bi bi-star-fill float-start star" ></i>
                <i className="bi bi-star-fill float-start star" ></i>
                <i className="bi bi-star-fill float-start star" ></i>
                </span>
      </td>
      
      <td className='line'><p className="card-text"><small className="text-body-dark">{item.paragraph}</small></p></td>
      <td className='line'><button className='remove' onClick={()=>{removetocart(item.id)
      onremove()}}>remove</button></td>
    </tr>
    </tbody>
</table>


    </div>)}
    <div className="total">
    <div className="leftsideclas">
  <Link to="/"><button id='homepage'>Back</button></Link>
    </div>
    <div className="leftsideclas">
          
         
     <Link to="/Orderpage"> <button className='payments'>proceed payments</button></Link>
        </div>
    

  
     
</div>

        </div>
        : 
        
        <h3 className='text-center add '> please Book your Order</h3>
        
      }
    </div>
    </>
  )
}

export default MyOrderpage;