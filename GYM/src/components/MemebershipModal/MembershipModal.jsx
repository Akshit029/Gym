import React, { useState } from 'react';

const MembershipModal = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState('single');
  const [singleTab, setSingleTab] = useState('monthly');
  const [couplesTab, setCouplesTab] = useState('monthly');

  if (!isOpen) return null;

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleSingleTabChange = (tab) => {
    setSingleTab(tab);
  };

  const handleCouplesTabChange = (tab) => {
    setCouplesTab(tab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-700 bg-opacity-75">
      <div className="relative w-full max-w-3xl mx-auto my-6 h-auto">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl shadow-lg p-6">
          <button
            className="absolute top-4 right-4 text-black hover:text-gray-600 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h1 className="text-2xl font-bold mb-4 text-center">Membership Options</h1>

          {/* Navigation Buttons */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => handleTabChange('single')}
              className={`mr-4 px-4 py-2 rounded-full focus:outline-none ${
                currentTab === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Single
            </button>
            <button
              onClick={() => handleTabChange('couples')}
              className={`px-4 py-2 rounded-full focus:outline-none ${
                currentTab === 'couples' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Couples
            </button>
          </div>

          {/* Membership Cards */}
          <div className="overflow-x-auto h-96">
            {/* Single Memberships */}
            {currentTab === 'single' && (
              <div className="grid grid-cols-1 gap-4">
                <div className=" rounded-lg p-6  text-center">
                  <h2 className="text-xl font-bold mb-4 text-white">SINGLE MEMBERSHIPS</h2>

                  {/* Arrow Buttons for Single Memberships */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => handleSingleTabChange(singleTab === 'monthly' ? 'yearly' : 'monthly')}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSingleTabChange(singleTab === 'monthly' ? 'yearly' : 'monthly')}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Monthly Membership for Singles */}
                  {singleTab === 'monthly' && (
                    <div className="mb-4">
                      <div className=" rounded-lg p-6 w-64 mx-auto">
                        <h3 className="text-lg font-semibold mb-2">Monthly Membership</h3>
                        <p className="mb-2 text-black">₹1,500</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                          Join Monthly
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Yearly Membership for Singles */}
                  {singleTab === 'yearly' && (
                    <div className="mb-4">
                      <div className=" rounded-lg p-6  w-64 mx-auto">
                        <h3 className="text-lg font-semibold mb-2">Yearly Membership</h3>
                        <p className="mb-2 text-black">₹15,000</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                          Join Yearly
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Couples Memberships */}
            {currentTab === 'couples' && (
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-6  text-center">
                  <h2 className="text-xl font-bold mb-4 text-white">COUPLES MEMBERSHIPS</h2>

                  {/* Arrow Buttons for Couples Memberships */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => handleCouplesTabChange(couplesTab === 'monthly' ? 'yearly' : 'monthly')}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleCouplesTabChange(couplesTab === 'monthly' ? 'yearly' : 'monthly')}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Monthly Membership for Couples */}
                  {couplesTab === 'monthly' && (
                    <div className="mb-4">
                      <div className=" rounded-lg p-6 w-64 mx-auto">
                        <h3 className="text-lg font-semibold mb-2">Monthly Membership</h3>
                        <p className="mb-2 text-black">₹2,000</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                          Join Monthly (Couples)
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Yearly Membership for Couples */}
                  {couplesTab === 'yearly' && (
                    <div className="mb-4">
                      <div className=" rounded-lg p-6 w-64 mx-auto">
                        <h3 className="text-lg font-semibold mb-2">Yearly Membership</h3>
                        <p className="mb-2 text-black">₹20,000</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                          Join Yearly (Couples)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;