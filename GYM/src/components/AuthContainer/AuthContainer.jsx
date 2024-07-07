import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/SignUp';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/bg.png')`,  // Adjust the path accordingly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-md w-full p-8 rounded-xl overflow-hidden relative bg-gradient-to-r from-orange-400 to-red-500 opacity-95">
        <div className={`transition-transform duration-500 ease-in-out transform ${isLogin ? '' : '-translate-x-full'}`}>
          <Login toggleForm={toggleForm} />
        </div>
        <div className={`transition-transform duration-500 ease-in-out transform ${isLogin ? 'translate-x-full' : ''} absolute top-0 left-0 w-full h-full bg-transparent`}>
          <Signup toggleForm={toggleForm} />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
