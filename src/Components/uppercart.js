import React from 'react'
import './Uppercart.css'
import { Link } from 'react-router-dom'

function uppercart() {
  return (
    <>

    <img  className ="best5" src='Image/best5.webp' alt="" />
    
    <div className="container midleblog">
<div className="rightblog">
  A cataract is a cloudiness of the lens in the eye. The lens bends incoming light rays and focuses them onto the retina. Human lenses must be clear to transmit the light without any scattering and loss. Lenses gradually get cloudy after age 30, and by your 60s and 70s, cloudiness decreases the amount of light penetrance into the eye and scatters the incoming light. For this reason, people with cataracts have dim and fuzzy vision. Aging is the most common cause of cataracts, but UVB accelerates cataract formation. In people who are exposed to UVB over a long period of time, lens opacities usually develop in the parts exposed directly to sunlight. It is estimated that cataract formation can be reduced by roughly 5% with appropriate UV protection. 
  
  <br />
  <Link href="/home"><button className='blogbutton'>Shop Now</button></Link>
  
</div>
  </div>
  <div className="container mainbox">
    <div className="boxleft1"><img className='boxleftimg' src= 'Image/best4.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link> </div>
    <div className="boxleft1"><img className='boxleftimg' src='Image/best2.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link></div>
    <div className="boxleft1"><img  className='boxleftimg' src='Image/best3.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link></div>
  </div>
  
    </>
  )
}

export default uppercart
