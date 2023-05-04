import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";

const UserProfile = () => {
  const [show, setShow] = useState(false)
  const [userData, setUserData] = useState("")
  const navigate = useNavigate()

  //Navigate to userDetials page
  const handleNavigate = () => {
    navigate("/userdetails")
  }

  //Fetching api & updating useState
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
  return (
    <>
      <div className='userprofile'>
        <h2>User Details</h2>
        <div className='main'>
        <div className='userList'>
          {/* fetching user data by map */}
          {
            Array.isArray(userData) && userData.map((userIndex) => {
              return (
                <div className='fetchList'>
                  <p onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>{userIndex.username}</p> <button onClick={handleNavigate} >Show Details</button>
                </div>
              )
            })}

        </div>
        {/* To show userbasic details when hover */}
        {show ?
          (<div className='hoverItem'>
            <p>Username: srikanth67</p>
            <p>Email: srikanth@gmail.com</p>
          </div>) : null
        }
        </div>
      </div>
    </>
  )
}

export default UserProfile
