import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Retrieve existing users or initialize an empty array if no users exist
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    const isExistingUser = existingUsers.some(user => user.username === username);
    if (isExistingUser) {
      alert('Username already exists. Please choose a different username.');
      return;
    }

    // Add new user to the existing list
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];

    // Store updated list of users in localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Navigate to the sign-in page after successful sign-up
    navigate('/signin');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
