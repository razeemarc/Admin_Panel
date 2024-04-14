import React, { useState } from 'react';
import './Styles/Login.css';
import illustration from '../images/forgotpassword.png';

import { auth } from "../firebase";

function ForgotPassword() {
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await auth.sendPasswordResetEmail(email);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <section className='form-Card'>
                <div className="login-container">
                    <div className="login-image">
                        <img src={illustration} height={700} width={700} alt="Login" />
                    </div>
                    <div className="login-form">
                        <h1>FORGOT YOUR PASSWORD ?</h1>
                        <form>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <button id='btn-submit' type="submit" onClick={handleResetPassword}>RESET PASSWORD</button>
                            </div>
                        </form>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">Password reset email sent. Check your inbox.</div>}
                        <div className='backTo-login'>
                            <a className='backLogin-link' href='/login'>Back to login</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ForgotPassword;
