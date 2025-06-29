import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import ShowCart from './Components/ShowCart'
import Navbar from './Components/Navbar'
import Blogs from './Components/Blogs'
import Contactus from './Components/Contactus'
import Orderpage from './Components/Orderpage'
import MyOrderpage from './Components/MyOrderpage'



function App() {
  

  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        
        <Route path='/Productpage/:productId' element={<ProductPage/>}></Route>
        <Route path='/ShowCart' element={<ShowCart/>}/>
        <Route path='/Orderpage' element={<Orderpage/>}/>
          
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/contactus' element={<Contactus/>}/>
           <Route path='/Myorder' element={<MyOrderpage/>}/>
           
           
           
           </Routes>
 
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
