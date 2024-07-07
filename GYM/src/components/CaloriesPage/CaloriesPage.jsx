// src/pages/CaloriesPage.jsx

import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar';
import MembershipModal from '../MemebershipModal/MembershipModal';

const CaloriesPage = () => {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintain');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [calories, setCalories] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);

  const openMembershipModal = () => {
    setIsMembershipModalOpen(true);
  };

  const closeMembershipModal = () => {
    setIsMembershipModalOpen(false);
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setBmiCategory(getBmiCategory(bmiValue));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let caloriesValue;
    switch (activityLevel) {
      case 'sedentary':
        caloriesValue = bmr * 1.2;
        break;
      case 'lightly active':
        caloriesValue = bmr * 1.375;
        break;
      case 'moderately active':
        caloriesValue = bmr * 1.55;
        break;
      case 'very active':
        caloriesValue = bmr * 1.725;
        break;
      case 'extra active':
        caloriesValue = bmr * 1.9;
        break;
      default:
        caloriesValue = bmr;
    }

    setMaintenanceCalories(caloriesValue.toFixed(2));

    // Adjust calories based on the goal
    if (goal === 'lose') {
      caloriesValue -= 200;
    } else if (goal === 'gain') {
      caloriesValue += 200;
    }

    setCalories(caloriesValue.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-red-500">
      <NavBar openMembershipModal={openMembershipModal} />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">Calories Count</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>
          <form onSubmit={calculateBMI}>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-bold mb-2">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-sm font-bold mb-2">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Calculate BMI</button>
          </form>
          {bmi && (
            <div className="mt-4">
              <p className="text-xl">Your BMI is: <span className="font-bold">{bmi}</span></p>
              <p className="text-xl">BMI Category: <span className="font-bold">{bmiCategory}</span></p>
            </div>
          )}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Calories Calculator</h2>
          <form onSubmit={calculateCalories}>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-bold mb-2">Age</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-bold mb-2">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-sm font-bold mb-2">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Gender</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="male" className="mr-4">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="activityLevel" className="block text-sm font-bold mb-2">Activity Level</label>
              <select
                id="activityLevel"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="lightly active">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="moderately active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="very active">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="extra active">Extra active (very hard exercise/sports & a physical job)</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="goal" className="block text-sm font-bold mb-2">Goal</label>
              <select
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="maintain">Maintain weight</option>
                <option value="lose">Lose fat</option>
                <option value="gain">Gain mass</option>
              </select>
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Calculate Calories</button>
          </form>
          {calories !== null && (
            <div className="mt-4">
              <p className="text-xl">Your daily calorie needs are: <span className="font-bold">{calories}</span> calories</p>
              <p className="text-xl">Your maintenance calories are: <span className="font-bold">{maintenanceCalories}</span> calories</p>
            </div>
          )}
        </div>
      </div>
      <MembershipModal isOpen={isMembershipModalOpen} onClose={closeMembershipModal} />
    </div>
  );
};

export default CaloriesPage;
