import React, { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";

const UserProfile = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    
    const handleNavigate = ()=>{
      navigate("/userdetails")
    }

    useEffect(()=>{
      const users = async()=>{
        const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await fetchUser.json()
      }
      users()
    },[])
    
    console.log(data)
  return (
    <>

      <div className='userprofile'>
            <h2>User Details</h2>
            <div className='userList'>
                   <p onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>Srikanth Goud</p> <button onClick={handleNavigate} >Show Details</button>
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
