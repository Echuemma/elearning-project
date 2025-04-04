import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import { Eye, EyeOff } from 'lucide-react';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const mockUser = {
    email: 'test@example.com',
    password: 'password123'
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: ''
    }));
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = { email: '', password: '' };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    
    if (valid) {
      if (formData.email === mockUser.email && formData.password === mockUser.password) {
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className="login-form">
      <div className="logo-container">
        <div className="logo">Logo</div>
      </div>
      
      <h1 className="form-heading">Welcome Back</h1>
      
      <p className="form-description">
        Enter your credentials to access your account
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FormInput 
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        
        <div className="input-container">
          <div className="custom-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`custom-input ${errors.password ? 'input-error' : ''}`}
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={handleTogglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        
        <div className="form-actions">
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </div>
        
        <div className="form-links">
          <a href="/Fpassword" className="forgot-password">
            Forgot your password?
          </a>
          <div className="signup-link">
            No account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
