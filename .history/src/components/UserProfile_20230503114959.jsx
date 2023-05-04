import React, { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";

const UserProfile = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleNavigate = ()=>{
      navigate("/userdetails")
    }
  return (
    <>
        <nav>
            <h1>TripFriday</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Plans</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </nav>
      <div className='userprofile'>
            <h2>User Details</h2>
            <div className='userList'>
                   <p onClick={handleNavigate} onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>Srikanth Goud</p>
            </div>
            {show?
            (<div className='hoverItem'>
                <p>Username: srikanth67</p>
                <p>Email: srikanth@gmail.com</p>
            </div>):null
                }
      </div>
    </>
  )
}

export default UserProfile
