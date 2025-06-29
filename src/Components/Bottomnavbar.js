import React from 'react'
import './Bottomnavbar.css'
import { Link } from 'react-router-dom'

function Bottomnavbar() {
  return (
    <div className="discout">
      <div className='leftdiscout '><p className='offer pt-2'>All new products have an offer with 5% hurry up</p></div>
      <div className='rightdiscount px-1 py-2'>
      <Link to="/showcart"><button className='btn btn-dark '><i class="bi bi-cart4 fs-4"></i></button></Link>
      </div>
    </div>
  )
}

export default Bottomnavbar
