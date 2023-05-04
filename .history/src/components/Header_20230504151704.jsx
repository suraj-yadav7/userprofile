import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
  <>
  <nav>
<h1>TripFriday</h1>
<div>
    <ul style={{listStyleType:"none"}}>
        <li ><Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link></li>
        <li>Plans</li>
        <li>About us</li>
        <li>Contact us</li>
    </ul>
</div>
</nav>
  </>
  )
}

export default Header


