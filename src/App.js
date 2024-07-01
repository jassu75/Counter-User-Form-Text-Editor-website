import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Counter from './Counter';
import UserForm from './UserForm';
import RichTextEditor from './RichTextEditor';
import SignUp from './signup'; 
import SignIn from './signin';
import './App.css';
import logo from './images/upliance.png';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [navigate]);

  return children;
};

const App = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/signin');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><Link to="/">Counter</Link></li>
            <li><Link to="/form">User Form</Link></li>
            <li><Link to="/editor">Rich Text Editor</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link to="/signin" className="sign-in-button">Sign In</Link>
            <Link to="/signup" className="sign-up-button">Sign Up</Link>
            <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<ProtectedRoute><Counter /></ProtectedRoute>} />
          <Route path="/form" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
          <Route path="/editor" element={<ProtectedRoute><RichTextEditor /></ProtectedRoute>} />
        </Routes>
      </main>
      <footer>
        <p>This website was created by Tejas V Kangod.</p>
      </footer>
    </div>
  );
};

export default App;
