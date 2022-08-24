import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import VehicleType from './VehicleType';
import {FaTaxi} from "react-icons/fa"
import {GrBike} from "react-icons/gr"


    const UberVehicle=()=>{
        const[vehicles,setVehicle]=useState([
            {type:'Car Owner',img:<FaTaxi/>},
            {type:'Motor Bike (2 wheelers)',img:<GrBike/>},
            {type:'Commercial Motorbike',img:<GrBike/>},
        ]);
        return (
          <>
              <Navbar/>
              <div className='container'>
                  <h2>Choose how you want to earn with Uber</h2>
                  <VehicleType vehicles={vehicles} />
              </div>
      
              {/* Footer */}
              <div className='continue-btn'>
              <Link to={"/signupcity"} className='button ctn' >Continue </Link>
            </div>
          </>
        )
    }



export default UberVehicle