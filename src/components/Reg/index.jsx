import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import './style.css';

const AccountRegistrationForm = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    surname: '',
    email: '',
    nationality: ''
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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="registration-form">
      <h1 className="form-heading">New account</h1>
      
      <p className="form-description">
        Welcome, guest learner! Thanks for your interest in registering as a guest learner on our 
        eLearning portal. Please note, for subsequent access, please access the learning portal
        via the login page.
      </p>
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <FormInput 
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <FormInput 
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <div>
          <button 
            type="button" 
            className="more-details-button"
            onClick={() => setShowMoreDetails(!showMoreDetails)}
          >
            More Details
          </button>
        </div>
        
        {showMoreDetails && (
          <div>
            <FormInput 
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
            <FormInput 
              type="text"
              placeholder="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            
            <FormInput 
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <FormInput 
              type="text"
              placeholder="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
        )}
        
        {/* <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
          >
            Create Account
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default AccountRegistrationForm;