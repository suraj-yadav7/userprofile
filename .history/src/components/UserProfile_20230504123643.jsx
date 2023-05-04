import React, { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";

const UserProfile = () => {
    const [show, setShow] = useState(false)
    const[userData , setUserData] = useState("")
    const navigate = useNavigate()
    
    const handleNavigate = ()=>{
      navigate("/userdetails")
    }

    useEffect(()=>{
      const Users = async()=>{
        const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await fetchUser.json()
        return data
      }
      let r_data=Users()
      // setUserData(r_data)
    },[])
    
  return (
    <>

      <div className='userprofile'>
            <h2>User Details</h2>
            <div className='userList'>
                {
                  userData.map((userIndex)=>{
                    return(
                      <div>
                      <p onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>{userData.username}</p> <button onClick={handleNavigate} >Show Details</button>
                      </div>
                      ) 
                })}
                
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
