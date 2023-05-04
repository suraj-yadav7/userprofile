import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assests/userProfile.scss";
import usericon from"../assests/usericon.jpg"
import "../assests/userDetails.scss"


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
                  <p onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} >{userIndex.username} </p> <button onClick={()=>handleNavigate(userIndex.id)} >Show Details</button>
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
            <div className='details'>
  <div className='sub1'>
<table>
  <tr>
    <td><h3>Full Name :  </h3></td>
    <td><p> Srikanth Goud</p> </td>
  </tr>
  <tr>
    <td><h3>Profession :  </h3></td>
    <td><p> Software </p> </td>
  </tr>
  <tr>
    <td><h3>Address :</h3></td>
    <td><p>Madhapur, Hyd 500024</p> </td>
  </tr>
</table>

  </div>
  <div className='sub2'>
    <img src={usericon} alt="userimage"></img>
    <p>srikanth67</p>
    <div className='socialMedia'>
      <p>facebook</p>
      <p>instagram</p>
      <p>twitter</p>
    </div>
  </div>
 </div>
  
        </div>
    </>
  )
}

export default UserProfile
