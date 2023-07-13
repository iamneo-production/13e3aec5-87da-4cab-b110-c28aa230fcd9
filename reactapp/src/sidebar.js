import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../src/sidebar.css';
function Sidebar() {
    return ( 
        <>
        <div className='main3'>
          <div className='sub1'>
              <div style={{height: '100%',position:'fixed',width: '25%',paddingleft: '2%',backgroundcolor: 'blue'}}>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <Link className="nav-link">Personal Details</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link">Professional Details</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">Educational Details</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">Key Skills</Link>
                  </li>
                </ul>
                <div className='dbtn'>
                  <button type='button' className='btn btn-danger' id="btn1">Submit</button>
                  {/* <button type='submit' className='btn btn-primary w-50 ' style={{marginTop:  '50px',width:'1px',justifyContent:'center',marginLeft:'60px'}}>SUBMIT</button> */}
                </div>
              </div>
            </div>
          <div className='sub2'>
            
          </div>
          <div className='sub3'>

          </div>
        </div>

       
</>
     );
}

export default Sidebar;