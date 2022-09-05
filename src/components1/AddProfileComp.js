import React from 'react';
import {Link} from "react-router-dom";
import {BiNotepad} from "react-icons/bi"
import {GrFormNext} from "react-icons/gr"

const AddProfileComp = (props) => {
    const profiles=props.profiles;
  return (
    <>
        {profiles.map((profile)=>(

    <div className='card'>
        <div className='content'>
        <div className="Img">
            <BiNotepad/>
        </div> 
        <div className='welcome-content'>
            <p className='lead-l'>{profile.text}</p>
            <p className='lead-s'>{profile.textsmall}</p>
        </div>
        </div>
        <div className='Img'>
        {/* <a href='#'><GrFormNext /></a> */}
        <Link to={profile.link}> <GrFormNext /> </Link>
        </div>
    </div>
        ))}
    </>
  )
}
export default AddProfileComp