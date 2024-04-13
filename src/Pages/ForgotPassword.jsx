
import React from 'react';
import './Styles/Login.css';
import illustration from '../images/forgotpassword.png';

import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

  return (
    <>
    
     
    <section className='form-Card' >
      <div className="login-container">
        <div className="login-image">
          <img src={illustration} height={700} width={700} alt="Login" />
        </div>


        <div className="login-form">
          <h1>FORGOT YOUR PASSWORD ?</h1>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email"  />
            </div>
           
            <div >
            <button id='btn-submit' type="submit"   onClick={()=>navigate("/resetpassword")}>RESET PASSWORD</button>
            </div>
          </form>
          
          <div className='backTo-login'>
          <a className='backLogin-link' href='/login'>Back to login</a>  </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Login;