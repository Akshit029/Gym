import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import monkey1 from '../../assets/monkey.png'; // Import your monkey images
import monkey2 from '../../assets/monkey2.png';
import monkey3 from '../../assets/monkey3.png';

const Signup = ({ toggleForm }) => {
  const navigate = useNavigate();

  // State to manage form data (name, email, and password)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to manage monkey image based on user interaction
  const [monkeyImage, setMonkeyImage] = useState(monkey1);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

    // Change monkey image based on showPassword state
    if (!showPassword) {
      setMonkeyImage(monkey2);
    } else {
      setMonkeyImage(monkey3);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Set monkey image based on input field
    if (name === 'email') {
      setMonkeyImage(monkey1);
    } else if (name === 'password') {
      // Show monkey2 if not showing password, otherwise monkey3
      if (!showPassword) {
        setMonkeyImage(monkey2);
      } else {
        setMonkeyImage(monkey3);
      }
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulating API call (replace with actual signup logic)
    // Assuming signup is successful if all fields are filled
    console.log('Signup form submitted:', formData);

    // Navigate to the home page upon successful signup
    navigate('/');
  };

  return (
    <div className="transition-opacity duration-500 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">SIGN UP</h2>
      <div className="flex justify-center mb-4">
        <img
          src={monkeyImage}
          alt="Monkey"
          className="w-24 h-24 rounded-full border-2 border-gray-500 transition-transform duration-500 ease-in-out"
        />
      </div>
      <form onSubmit={handleSignup} className="rounded-full px-10 pt-3 pb-3 mb-3 bg-transparent border-none outline-none">
        {/* Signup form fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2 text-center">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setMonkeyImage(monkey1)}
            onBlur={() => setMonkeyImage(monkey1)}
            required // Required field
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-center"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-bold mb-2 text-center">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setMonkeyImage(monkey1)}
            onBlur={() => setMonkeyImage(monkey1)}
            required // Required field
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-center"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-black font-bold mb-2 text-center">Password</label>
          <input
            type={showPassword ? 'text' : 'password'} // Conditional type based on showPassword state
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
            onFocus={() => setMonkeyImage(monkey2)}
            onBlur={() => {
              if (!showPassword) setMonkeyImage(monkey2);
            }}
            required // Required field
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-center"
          />
        </div>
        <div className="mb-6 text-center">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />
          <label htmlFor="showPassword" className="text-black font-bold ml-2">Show Password</label>
        </div>
        <button
          type="submit" // Use submit type for form submission
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
      </form>
      {/* Link to switch to Login form */}
      <p className="text-center text-black mt-4 font-bold">
        Already have an account? <button onClick={toggleForm} className="text-white hover:text-blue-700">Log in</button>
      </p>
    </div>
  );
};

export default Signup;
