import React, { useState } from 'react';
import './Styles/LoginDemo.css';
import signupImage from '../images/signup.png';
import {  useParams } from 'react-router-dom';
import { auth } from "../firebase";

function ResetPassword() {
    
    const { oobCode } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match.");
            }
            await auth.confirmPasswordReset(oobCode, password);
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
                        <img src={signupImage} height={700} width={700} alt="Login" />
                    </div>
                    <div className="login-form">
                        <h1>RESET PASSWORD</h1>
                        <form style={{ marginTop: "50px" }}>
                            <div className="form-group">
                                <label>New Password:</label>
                                <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div>
                                <button id='btn-submit' type="submit" onClick={handleResetPassword}>RESET PASSWORD</button>
                            </div>
                        </form>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">Password successfully reset.</div>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResetPassword;
