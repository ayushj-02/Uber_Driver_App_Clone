import {FaUsers} from "react-icons/fa"

const VehicleType=(props) =>{

    const vehicles=props.vehicles;
  return (
    <div >
        {vehicles.map((vehicle)=>(
            <p className='vehicleType'>
                <div className="vehType">
                  <span className='badge'><FaUsers/> Trips</span>
                  <strong>{vehicle.type}</strong>
                </div>
                <div className="vehImg">
                    {vehicle.img}
                </div>
                
            </p>
        ))}
    </div>
  );
}

export default VehicleType