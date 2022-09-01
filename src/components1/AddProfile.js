import React, {useState} from 'react'
import Navbar from './Navbar';
import  AddProfileComp from './AddProfileComp';

const AddProfile = () => {
  const[profiles,setProfile]=useState([
    {text:'Profile Photo', textsmall:'Recommended Next Step'},
    {text:'Driving Licence - Front', textsmall:'Ready to begin'},
    {text:'Driving Licence - Back', textsmall:'Ready to begin'},
    {text:'Registrartion Certificate (RC)', textsmall:'Ready to begin'},
  ])
  return (
    <>
      <Navbar/>
      <div className='container'>
        <h2>Welcome, Driver</h2>
        <p className='font-bold'>Required Steps</p>
        <p className='font-small'>Here's what you need to do to set up your account</p>
        <AddProfileComp profiles={profiles}/>
        
      </div>
    </>
  )
}

export default AddProfile