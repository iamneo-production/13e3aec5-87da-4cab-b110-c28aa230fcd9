import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./sidebar";

export default function Nav(){
  const navigate=useNavigate('');
  const resume =()=>{
    navigate('/resume');  }
  return(
    <>
    <div className="backimage">
        <div className="navbar">
          <div className="logo" style={{fontSize:40}}>Future Resumes</div>
           <ul className="nav-links">
              <Link to="/"style={{color:'black',fontSize:'21px'}}>Home</Link>
              <Link to="/signup"style={{color:'black',fontSize:'21px'}}>SignUp</Link>
              <Link to="/login"style={{color:'black',fontSize:'21px'}}>Login</Link>
              <Link to="/about"style={{color:'black',fontSize:'21px'}}>AboutUs</Link>
              <Link to="/details"style={{color:'black',fontSize:'21px'}}>Details</Link>
           </ul>
        </div>
        <div className="home">
          <div id="para">
            <h5>“The goal is to present yourself well and quickly.”</h5>
             <h5>Your resume isn't an autobiography. It's your chance to prove—in 6 seconds,</h5>
             <h5>according to a large eye-tracking study of recruiters—that you'd be a great</h5>
              <h5>fit for a given role. Prioritize quality, relevant words—that is, resume</h5>
               <h5>keywords—over quantity of words.</h5>
          </div>
        <button type='button' className='btn btn-danger' id="btn" onClick={resume}>Create My Resume</button>
        </div>
    </div>
    </>
  );

}