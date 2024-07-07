import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MembershipModal from '../MemebershipModal/MembershipModal';
import WorkoutsPage from '../WorkoutPage/WorkoutsPage';

const HomePage = () => {
  const [dailyQuote, setDailyQuote] = useState({
    content: "Stay committed to your goals. It's okay to have a bad day, but don't let it stop you from reaching your dreams.",
    author: "Unknown"
  });

  useEffect(() => {
    const fetchDailyQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        const { content, author } = response.data;
        console.log('Fetched quote:', response.data); // Log the fetched quote
        setDailyQuote({ content, author });
      } catch (error) {
        console.error('Error fetching daily quote:', error);
      }
    };

    fetchDailyQuote();

    // Update the quote every day (86400000 milliseconds = 1 day)
    const interval = setInterval(fetchDailyQuote, 86400000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isWorkoutFormOpen, setIsWorkoutFormOpen] = useState(false);

  const openMembershipModal = () => {
    setIsMembershipModalOpen(true);
  };

  const closeMembershipModal = () => {
    setIsMembershipModalOpen(false);
  };

  const openWorkoutForm = () => {
    setIsWorkoutFormOpen(true);
  };

  const closeWorkoutForm = () => {
    setIsWorkoutFormOpen(false);
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/logowhite.png" alt="Logo" className="h-12 mr-2 ml-6" />
            </Link>
          </div>

          {/* Navigation links */}
          <ul className="hidden md:flex space-x-4 items-center">
            <li onClick={openMembershipModal} className="cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Membership</li>
            <li><Link to="/workouts" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Workouts</Link></li>
            <li><Link to="/calories" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">Calories Count</Link></li>
            
            {/* Scroll to CTA Section */}
            <li>
              <button onClick={scrollToCTA} className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">
                Features
              </button>
            </li>
            <li>
              <Link to="/auth/login" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105">
                Join Now
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button (hidden on larger screens) */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Membership Modal */}
      <MembershipModal isOpen={isMembershipModalOpen} onClose={closeMembershipModal} />

      {/* Workouts Page Component */}
      {isWorkoutFormOpen && <WorkoutsPage />}

      {/* Hero Section with Background Video */}
      <section className="relative bg-gray-900 min-h-screen overflow-hidden">
  {/* Video Background */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-70"
    autoPlay
    loop
    muted
  >
    <source src={`${process.env.PUBLIC_URL}/assets/hero_bg.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content Overlay */}
  <div className="relative z-20 flex flex-col items-center justify-center top-80 h-full max-w-7xl mx-auto px-6 bg-gray-900 bg-opacity-0 py-10">
    <div className="text-center items-center">
      <h1 className="text-4xl md:text-8xl font-bold text-center mb-6 animate-fade-in-down text-orange-400">
        WELCOME TO GYMFIT
      </h1>
      <p className="text-lg text-center mb-8 font-semibold animate-fade-in-up text-red-500">
        Your pathway to fitness and well-being.
      </p>
      <div className="flex justify-center">
        <Link
          to="/auth/login"
          className="bg-orange-400 hover:bg-red-500 text-white px-8 py-3 rounded-full mr-4 transition duration-300 transform hover:scale-105"
        >
          Join Now
        </Link>
      </div>
    </div>
  </div>
</section>


      <div className="py-16" />

      {/* Daily Motivation Section */}
      <section className="container mx-auto size-1/2 p-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-2">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Daily Motivation</h2>
          <p className="text-lg mb-8 animate-fade-in-up">{dailyQuote.content}</p>
          <p className="text-base font-semibold mb-4">- {dailyQuote.author}</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Why Choose GymFit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg transition duration-300 transform hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">Expert Trainers</h3>
              <p className="text-lg text-black">
                Our experienced trainers are dedicated to helping you achieve your fitness goals with personalized training programs.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">State-of-the-art Facilities</h3>
              <p className="text-lg text-black">
                Enjoy access to top-notch gym equipment and modern facilities that support your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Start Your Fitness Journey Today</h2>
          <p className="text-lg mb-8 animate-fade-in-up">
            Join GymFit today and take the first step towards a healthier lifestyle.
          </p>
          <Link to="/auth/login" className='bg-blue-500 hover:bg-indigo-700 text-white pl-8 pr-8 px-8 py-3 rounded-full mr-4 transition duration-300 transform hover:scale-105'>
            Join Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; 2024 GymFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
