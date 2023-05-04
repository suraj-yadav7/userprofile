import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";
import usericon from"../assests/usericon.jpg"


const UserProfile = () => {
  const [show, setShow] = useState(false)
  const [userData, setUserData] = useState("")
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/userdetails")
  }


  useEffect(() => {
    const Users = async () => {
      try {
        const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await fetchUser.json()
      setUserData(data)
        
      }
      catch (error) {
        console.log("Error while fetching user data from api")
      }
    }
    Users()
  }, [])
  console.log(userData)
  return (
    <>
      <div className='userprofile'>
        <h2>User Details</h2>
        <div className='userList'>
          {
            Array.isArray(userData) && userData.map((userIndex) => {
            
              return (
                <div key={userIndex.id} className='fetchList'>
                  <p onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} value={userIndex.id} >{userIndex.username} </p> <button onClick={handleNavigate(userIndex.id)} >Show Details</button>
                </div>
              )
            })}

        </div>
        {show ?
          (<div className='hoverItem'>
            <p>Username: username435</p>
            <p>Email: username435@gmail.com</p>
          </div>) : null
        }
      </div>
       
    </>
  )
}

export default UserProfile
