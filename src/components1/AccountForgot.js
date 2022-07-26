import React from 'react'
import {Link} from "react-router-dom"
function AccountForgot() {
  return (
    <>
      <section className='p-2'>
      <h3>We cannot found account associated with your device</h3>
      <p>Please login again</p>
  
        
        <Link to={"/login1"} className='button prev'>Prev</Link>
      </section>
  
      </>
  )
}

export default AccountForgot