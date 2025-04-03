import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import './FpassWord.css';

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset request here
    console.log("Password reset requested for:", formData.email);
  };

  return (
    <div className="forgot-password-form">
      <h1 className="form-heading">Forgot Password</h1>
      
      <p className="form-description">
        Please enter your email address below. We will send you a link to reset your password.
      </p>
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;