import React from 'react'
import "../assests/userDetails.scss"
import usericon from"../assests/usericon.jpg"

const UserDetails = () => {
  return (
  <>
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
  </>
  )
}

export default UserDetails
