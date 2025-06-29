import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Blogs.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Blogs() {
  return (
    <>
     
<h2 className='mt-3 '>Power Sunglasses: Your Vision, Your Style – Sorted!</h2>
<img className='bestblog2' src='Image/bestblog4.jpeg' alt="" />

<p className='mt-2 p-2'>Ever felt sad when your friend is rocking stylish sunglasses while you’re stuck with boring power glasses because of your eye number? Not the best feeling, right? You end up squinting in the sun, with bad photos, and a headache by noon. And suddenly, your whole trip feels like pizza without cheese.

That’s where power sunglasses step in. Like a superhero who has both style and sight. Whether you’re driving, chilling in Goa, or just taking a walk to the tapri, prescription sunglasses make sure you don’t compromise your vision and look effortlessly cool.

But, we know what you’re thinking, “Are they expensive?”, Will they suit my face?”, “How to choose the right one?”, etc.

Let’s break it all down and solve all your doubts. Because your eyes deserve the best of both worlds.</p>



<div class="main mt-5">
    <img  className = "slideimage" src="Image/slide12.jpg" alt="" />    
    <img  className = "slideimage2" src="Image/slide7.jpg" alt="" />    
</div>  



<div className="container midleblog">
<div className="rightblog">
   Imagine if you power glasses and stylish shades had a baby—that’s what prescription sunglasses are. They are also known as power sunglasses. They’ve lenses that have eye power, customized as per your prescription. They give you complete vision while shielding your eyes from harsh sunlight.

So now, no more switching between glasses and shades like you’re in a magic show. No more layered glasses. Just sleek, stylish frames with clear, UV-protected vision.
  
  <br />
  <Link to="/"><button className='blogbutton'>Shop Now</button></Link>
</div>


<div className="leftblog">
  <img src="Image/midleblog1.jpg" alt="" />
  
</div>

</div>

<div className="container mainbox">
  <div className="boxleft1"><img className='boxleftimg' src= 'Image/best4.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link> </div>
  <div className="boxleft1"><img className='boxleftimg' src='Image/best2.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link></div>
  <div className="boxleft1"><img  className='boxleftimg' src='Image/best3.jpg' alt="" /><Link to="/"><button className="blogmiddlebuton">Shop Now</button></Link></div>
</div>
<Footer/>
    </>
    
  )
}

export default Blogs
