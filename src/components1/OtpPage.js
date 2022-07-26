import React,{useState} from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom";

const OtpPage=()=> {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
        element.nextSibling.focus();
    }
};
    
  return (
    <>
      <Navbar/>
      

            <div className="container">
                <div className="text-center p-2">
                    <h2>Welcome to the Uber Driver App!!!</h2>
                    <p>Enter the OTP sent to you on nunber given</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className=" btn-dark"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <Link className=" btn-dark"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            } to={"/signup"}>Verify OTP </Link>
                        
                    </p>
                </div>
                <Link to={"/login1"} className='button prev'>Prev</Link>
            </div>
    </>

   
  )
}

export default OtpPage


