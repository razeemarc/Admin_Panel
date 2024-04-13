
import React from 'react';
import './Styles/Login.css'; // Import your CSS file
import signupImage from '../images/signup.png'; // Import your login image
import { useNavigate } from 'react-router-dom';

function Resetpassword() {
    const navigate = useNavigate();
  return (
    <>
    
    
    <section className='form-Card' >
      <div className="login-container">
        <div className="login-image">
          <img src={signupImage} height={700} width={700} alt="Login" />
        </div>


        <div className="login-form">
          <h1>RESET PASSWORD</h1>
          <form style={{marginTop:"50px"}}>
          <div className="form-group">
              <label>New Password:</label>
              <input type="password" placeholder="Enter new password" />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" placeholder="confirm password" />
            </div>
            <div >
            <button id='btn-submit' type="submit"  onClick={()=>navigate("/login")}>RESET PASSWORD</button>
            </div>
          </form>
          
         
        </div>
      </div>
    </section>
    </>
  );
}

export default Resetpassword;