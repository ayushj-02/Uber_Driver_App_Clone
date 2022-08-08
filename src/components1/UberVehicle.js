import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
function UberVehicle() {
  return (
    <>
        <Navbar/>

    

        {/* Footer */}
        <div className='continue-btn'>
        <Link to={"/signupcity"} className='button ctn' >Continue </Link>
      </div>
    </>
  )
}

export default UberVehicle