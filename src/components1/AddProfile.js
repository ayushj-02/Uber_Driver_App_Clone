import React from 'react'
import Navbar from './Navbar';
import {BiNotepad} from "react-icons/bi"
import {GrFormNext} from "react-icons/gr"
const AddProfile = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <h2>Welcome, Driver</h2>
        <p className='font-bold'>Required Steps</p>
        <p className='font-small'>Here's what you need to do to set up your account</p>
        <div className='card'>
          <div className='content'>
            <div className="Img">
                <BiNotepad/>
            </div> 
            <div className='welcome-content'>
              <p className='lead-l'>Profile picture</p>
              <p className='lead-s'>Recommended Next Step</p>
            </div>
          </div>
          <div className='Img'>
            <a href='#'><GrFormNext /></a>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default AddProfile