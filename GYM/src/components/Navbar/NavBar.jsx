import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MembershipModal from '../MemebershipModal/MembershipModal';

const NavBar = () => {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isWorkoutFormOpen, setIsWorkoutFormOpen] = useState(false); // State for controlling WorkoutForm visibility

  const openMembershipModal = () => {
    setIsMembershipModalOpen(true);
  };

  const closeMembershipModal = () => {
    setIsMembershipModalOpen(false);
  };
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 mt-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.png" alt="GymFit Logo" className="h-12 mr-2" />
          </Link>
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li onClick={openMembershipModal} className="cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Membership</li>
          <li><Link to="/workouts" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Workouts</Link></li>
          <li><Link to="/calories" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Calories Count</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Home</Link></li>
        </ul>
        <MembershipModal isOpen={isMembershipModalOpen} onClose={closeMembershipModal} />

        {/* Mobile Menu Button (hidden on larger screens) */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu */}
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
