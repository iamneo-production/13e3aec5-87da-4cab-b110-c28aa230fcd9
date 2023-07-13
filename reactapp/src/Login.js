import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate('');
  const hello=()=>{
    navigate('/signup');  }
    return ( 
        <>
        <section class="vh-100" style={{backgroundcolor: "#9A616D"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderradius: "1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtub3dsZWRnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="login form" class="img-fluid" style={{borderradius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>
                  <center>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterspacing: "1px"}}>Log into your account</h5>
                  </center>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example17">UserName</label>
                    <input type="email" id="form2Example17" class="form-control form-control-lg" required/>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27">Password</label>
                    <input type="password" id="form2Example27" class="form-control form-control-lg" required/>
                  </div>
                  <center>
                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>
                  </center>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? 
                  <a href="#!" sstyle={{color: "#393f81"}} onClick={hello}>Register here</a>
                  </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
     );
}

export default Login;