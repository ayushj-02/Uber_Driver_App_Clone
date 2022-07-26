import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
    <nav id="navbar">
        <h1 className='logo'>Uber</h1>
        {/* <button className='btn-help'>Help</button> */}
        <Link to = {"/"} className='btn-help'>Help</Link>
    </nav>
    </>
  )
}

export default Navbar