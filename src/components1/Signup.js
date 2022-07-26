import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
const Signup = () => {
  return (
    <>
      <Navbar/> 
      <div className='p-2 container'>
        <h2>Sign-in Details Required</h2>
        <p>To set up your driver account, we need to collect your email address and password</p>

        <div className='form-group'>
          <label className='form-label' for='email'>Email Address</label>
          <input type='email' name='email' id='email' className='text-bg' placeholder='Email Address'/>
        </div>
        <div className='form-group'>
          <label className='form-label' for='pass'>Password</label>
          <input type='pass' name='pass' id='pass' className='text-bg'placeholder='Password'/>
        </div>
      </div>

      <div className='continue-btn'>
        <Link to={"/signupcity"} className='button ctn' >Continue </Link>
      </div>
    </>
  )
}

export default Signup