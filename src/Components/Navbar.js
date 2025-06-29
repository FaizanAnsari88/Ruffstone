
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Offcanvas } from 'bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Bottomnavbar from './Bottomnavbar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function Navbar() {
  return (
    <>
    
     
    <nav class="navbar navbar-dark bg-dark fixed-top ">
    
  <div class="container-fluid ">
    <a class="navbar-brand Rufstone" href="#">RufStone</a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
      

    </button>
  
    
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">RUFSTONE</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link"  to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/blogs">Blogs</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contactus">Contact us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Myorder">My Order</Link>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
<FloatingWhatsApp
phoneNumber='+918856969964'
accountName='Rufstone'
notification="true"
avatar='https://victgoal.com/cdn/shop/products/polarized-photochromic-cycling-glasses-men-women-running-outdoors-sports-sunglasses-goggles-victgoal-adultshelmets-eyewears-helmets-570279.jpg?v=1696720364&width=1445'
style={{
  position:"relative",
  bottom:"20px",
  right:"10px",
  zIndex:"10"
  
}}
/>
    <Bottomnavbar/>
    </>
  )
}

export default Navbar
