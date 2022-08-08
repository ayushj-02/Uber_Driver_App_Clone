import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';

function SignCity() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>Earn with Uber</h1>
      <p>Decide when, where and how you want to earn.</p>
      <div className='form-group'>
          <label className='form-label small' for='place'>Where would you like to earn?</label>
          <input type='place' name='place' id='place' className='text-bg' placeholder='Enter City'/>
        </div>
        <div className='form-group'>
          <label className='form-label small' for='refcode'>Referral code (optional)</label>
          <input type='refcode' name='refcode' id='refcode' className='text-bg'/>
        </div>
        
        <Link to = {"/uber_vehicle"} className='button next'>Next</Link>
    </div>
    </>
    
  )
}

export default SignCity