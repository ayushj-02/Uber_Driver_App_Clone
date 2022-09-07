import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
const Home = () => {
  return (
    <>
    <section className='main'>
      
      <div className='left'>
        <h1>Welcome to the Uber Driver App</h1>
        <Link to={"/login1"} className='button btn-home'>Continue</Link>
        <hr/>
        
        <a className='uber_ride' href='https://www.uber.com'>or ride with Uber</a>
      </div>

      <div className='right'>
        <h1>Uber</h1>
      </div>
    </section>
      
      
    </>
  )
}

export default Home