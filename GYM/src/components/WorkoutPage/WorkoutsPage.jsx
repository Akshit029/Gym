import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar';
import MembershipModal from '../MemebershipModal/MembershipModal';

const workoutPlans = {
  Beginner: {
    'Bro Split (Upper/Lower/Core)': [
      { day: 'Monday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Shoulder Press', sets: 4, reps: 12 },
      ]},
      { day: 'Tuesday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 4, reps: 12 },
        { name: 'Deadlifts', sets: 4, reps: 10 },
        { name: 'Leg Press', sets: 4, reps: 12 },
      ]},
      { day: 'Wednesday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
      { day: 'Thursday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Shoulder Press', sets: 4, reps: 12 },
      ]},
      { day: 'Friday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 4, reps: 12 },
        { name: 'Deadlifts', sets: 4, reps: 10 },
        { name: 'Leg Press', sets: 4, reps: 12 },
      ]},
      { day: 'Saturday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
    ],
    'Push/Pull/Legs': [
      { day: 'Monday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 3, reps: 12 },
        { name: 'Bench Press', sets: 3, reps: 10 },
        { name: 'Shoulder Press', sets: 3, reps: 12 },
      ]},
      { day: 'Tuesday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 3, reps: 8 },
        { name: 'Bent Over Rows', sets: 3, reps: 10 },
        { name: 'Bicep Curls', sets: 3, reps: 12 },
      ]},
      { day: 'Wednesday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 3, reps: 12 },
        { name: 'Lunges', sets: 3, reps: 10 },
        { name: 'Leg Press', sets: 3, reps: 12 },
      ]},
      { day: 'Thursday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 3, reps: 12 },
        { name: 'Bench Press', sets: 3, reps: 10 },
        { name: 'Shoulder Press', sets: 3, reps: 12 },
      ]},
      { day: 'Friday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 3, reps: 8 },
        { name: 'Bent Over Rows', sets: 3, reps: 10 },
        { name: 'Bicep Curls', sets: 3, reps: 12 },
      ]},
      { day: 'Saturday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 3, reps: 12 },
        { name: 'Lunges', sets: 3, reps: 10 },
        { name: 'Leg Press', sets: 3, reps: 12 },
      ]},
    ],
    'Single Muscle per Day + Cardio': [
      { day: 'Monday', name: 'Chest', exercises: [
        { name: 'Bench Press', sets: 3, reps: 10 },
        { name: 'Push-ups', sets: 3, reps: 12 },
        { name: 'Chest Flyes', sets: 3, reps: 12 },
      ]},
      { day: 'Tuesday', name: 'Back', exercises: [
        { name: 'Pull-ups', sets: 3, reps: 8 },
        { name: 'Deadlifts', sets: 3, reps: 10 },
        { name: 'Lat Pulldowns', sets: 3, reps: 12 },
      ]},
      { day: 'Wednesday', name: 'Cardio', exercises: [
        { name: 'Running', sets: 1, reps: '30 mins' },
        { name: 'Cycling', sets: 1, reps: '30 mins' },
      ]},
      { day: 'Thursday', name: 'Shoulders', exercises: [
        { name: 'Shoulder Press', sets: 3, reps: 12 },
        { name: 'Lateral Raises', sets: 3, reps: 12 },
        { name: 'Front Raises', sets: 3, reps: 12 },
      ]},
      { day: 'Friday', name: 'Arms', exercises: [
        { name: 'Bicep Curls', sets: 3, reps: 12 },
        { name: 'Tricep Dips', sets: 3, reps: 12 },
        { name: 'Hammer Curls', sets: 3, reps: 12 },
      ]},
      { day: 'Saturday', name: 'Legs', exercises: [
        { name: 'Squats', sets: 3, reps: 12 },
        { name: 'Lunges', sets: 3, reps: 10 },
        { name: 'Leg Press', sets: 3, reps: 12 },
      ]},
    ],
  },
  Intermediate: {
    'Bro Split (Upper/Lower/Core)': [
      { day: 'Monday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Shoulder Press', sets: 4, reps: 12 },
      ]},
      { day: 'Tuesday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 4, reps: 12 },
        { name: 'Deadlifts', sets: 4, reps: 10 },
        { name: 'Leg Press', sets: 4, reps: 12 },
      ]},
      { day: 'Wednesday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
      { day: 'Thursday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Shoulder Press', sets: 4, reps: 12 },
      ]},
      { day: 'Friday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 4, reps: 12 },
        { name: 'Deadlifts', sets: 4, reps: 10 },
        { name: 'Leg Press', sets: 4, reps: 12 },
      ]},
      { day: 'Saturday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
    ],
    'Push/Pull/Legs': [
      { day: 'Monday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 4, reps: 15 },
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Shoulder Press', sets: 4, reps: 15 },
      ]},
      { day: 'Tuesday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Bent Over Rows', sets: 4, reps: 12 },
        { name: 'Bicep Curls', sets: 4, reps: 15 },
      ]},
      { day: 'Wednesday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 4, reps: 15 },
        { name: 'Lunges', sets: 4, reps: 12 },
        { name: 'Leg Press', sets: 4, reps: 15 },
      ]},
      { day: 'Thursday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 4, reps: 15 },
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Shoulder Press', sets: 4, reps: 15 },
      ]},
      { day: 'Friday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Bent Over Rows', sets: 4, reps: 12 },
        { name: 'Bicep Curls', sets: 4, reps: 15 },
      ]},
      { day: 'Saturday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 4, reps: 15 },
        { name: 'Lunges', sets: 4, reps: 12 },
        { name: 'Leg Press', sets: 4, reps: 15 },
      ]},
    ],
    'Single Muscle per Day + Cardio': [
      { day: 'Monday', name: 'Chest', exercises: [
        { name: 'Bench Press', sets: 4, reps: 12 },
        { name: 'Push-ups', sets: 4, reps: 15 },
        { name: 'Chest Flyes', sets: 4, reps: 15 },
      ]},
      { day: 'Tuesday', name: 'Back', exercises: [
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Deadlifts', sets: 4, reps: 12 },
        { name: 'Lat Pulldowns', sets: 4, reps: 15 },
      ]},
      { day: 'Wednesday', name: 'Cardio', exercises: [
        { name: 'Running', sets: 1, reps: '40 mins' },
        { name: 'Cycling', sets: 1, reps: '40 mins' },
      ]},
      { day: 'Thursday', name: 'Shoulders', exercises: [
        { name: 'Shoulder Press', sets: 4, reps: 15 },
        { name: 'Lateral Raises', sets: 4, reps: 15 },
        { name: 'Front Raises', sets: 4, reps: 15 },
      ]},
      { day: 'Friday', name: 'Arms', exercises: [
        { name: 'Bicep Curls', sets: 4, reps: 15 },
        { name: 'Tricep Dips', sets: 4, reps: 15 },
        { name: 'Hammer Curls', sets: 4, reps: 15 },
      ]},
      { day: 'Saturday', name: 'Legs', exercises: [
        { name: 'Squats', sets: 4, reps: 15 },
        { name: 'Lunges', sets: 4, reps: 12 },
        { name: 'Leg Press', sets: 4, reps: 15 },
      ]},
    ],
  },
  Advanced: {
    'Bro Split (Upper/Lower/Core)': [
      { day: 'Monday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 5, reps: 15 },
        { name: 'Pull-ups', sets: 5, reps: 12 },
        { name: 'Shoulder Press', sets: 5, reps: 15 },
      ]},
      { day: 'Tuesday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 5, reps: 15 },
        { name: 'Deadlifts', sets: 5, reps: 12 },
        { name: 'Leg Press', sets: 5, reps: 15 },
      ]},
      { day: 'Wednesday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
      { day: 'Thursday', name: 'Upper Body', exercises: [
        { name: 'Bench Press', sets: 5, reps: 15 },
        { name: 'Pull-ups', sets: 5, reps: 12 },
        { name: 'Shoulder Press', sets: 5, reps: 15 },
      ]},
      { day: 'Friday', name: 'Lower Body', exercises: [
        { name: 'Squats', sets: 5, reps: 15 },
        { name: 'Deadlifts', sets: 5, reps: 12 },
        { name: 'Leg Press', sets: 5, reps: 15 },
      ]},
      { day: 'Saturday', name: 'Core', exercises: [
        { name: 'Plank', sets: 3, reps: '1 min hold' },
        { name: 'Sit-ups', sets: 3, reps: 15 },
        { name: 'Russian Twists', sets: 3, reps: 20 },
      ]},
    ],
    'Push/Pull/Legs': [
      { day: 'Monday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 5, reps: 20 },
        { name: 'Bench Press', sets: 5, reps: 15 },
        { name: 'Shoulder Press', sets: 5, reps: 20 },
      ]},
      { day: 'Tuesday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 5, reps: 12 },
        { name: 'Bent Over Rows', sets: 5, reps: 15 },
        { name: 'Bicep Curls', sets: 5, reps: 20 },
      ]},
      { day: 'Wednesday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 5, reps: 20 },
        { name: 'Lunges', sets: 5, reps: 15 },
        { name: 'Leg Press', sets: 5, reps: 20 },
      ]},
      { day: 'Thursday', name: 'Push Day', exercises: [
        { name: 'Push-ups', sets: 5, reps: 20 },
        { name: 'Bench Press', sets: 5, reps: 15 },
        { name: 'Shoulder Press', sets: 5, reps: 20 },
      ]},
      { day: 'Friday', name: 'Pull Day', exercises: [
        { name: 'Pull-ups', sets: 5, reps: 12 },
        { name: 'Bent Over Rows', sets: 5, reps: 15 },
        { name: 'Bicep Curls', sets: 5, reps: 20 },
      ]},
      { day: 'Saturday', name: 'Leg Day', exercises: [
        { name: 'Squats', sets: 5, reps: 20 },
        { name: 'Lunges', sets: 5, reps: 15 },
        { name: 'Leg Press', sets: 5, reps: 20 },
      ]},
    ],
    'Single Muscle per Day + Cardio': [
      { day: 'Monday', name: 'Chest', exercises: [
        { name: 'Bench Press', sets: 5, reps: 15 },
        { name: 'Push-ups', sets: 5, reps: 20 },
        { name: 'Chest Flyes', sets: 5, reps: 20 },
      ]},
      { day: 'Tuesday', name: 'Back', exercises: [
        { name: 'Pull-ups', sets: 5, reps: 12 },
        { name: 'Deadlifts', sets: 5, reps: 15 },
        { name: 'Lat Pulldowns', sets: 5, reps: 20 },
      ]},
      { day: 'Wednesday', name: 'Cardio', exercises: [
        { name: 'Running', sets: 1, reps: '50 mins' },
        { name: 'Cycling', sets: 1, reps: '50 mins' },
      ]},
      { day: 'Thursday', name: 'Shoulders', exercises: [
        { name: 'Shoulder Press', sets: 5, reps: 20 },
        { name: 'Lateral Raises', sets: 5, reps: 20 },
        { name: 'Front Raises', sets: 5, reps: 20 },
      ]},
      { day: 'Friday', name: 'Arms', exercises: [
        { name: 'Bicep Curls', sets: 5, reps: 20 },
        { name: 'Tricep Dips', sets: 5, reps: 20 },
        { name: 'Hammer Curls', sets: 5, reps: 20 },
      ]},
      { day: 'Saturday', name: 'Legs', exercises: [
        { name: 'Squats', sets: 5, reps: 20 },
        { name: 'Lunges', sets: 5, reps: 15 },
        { name: 'Leg Press', sets: 5, reps: 20 },
      ]},
    ],
  },
};

const WorkoutsPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('Beginner'); // Default to Beginner level
  const [selectedPlan, setSelectedPlan] = useState(workoutPlans[selectedLevel]['Push/Pull/Legs']); // Default to 'Push/Pull/Legs' plan

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setSelectedPlan(workoutPlans[level]['Push/Pull/Legs']); // Set default plan for the selected level
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(workoutPlans[selectedLevel][plan]);
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-screen">
      <NavBar />
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8">Your Weekly Workouts</h1>
        
        {/* Level selector */}
        <div className="mb-6">
          <label htmlFor="level" className="mr-2 font-semibold">Select Level:</label>
          <select id="level" className="px-2 py-1 border border-gray-300 rounded" value={selectedLevel} onChange={(e) => handleLevelChange(e.target.value)}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Plan selector */}
        <div className="mb-6">
          <label htmlFor="plan" className="mr-2 font-semibold">Select Workout Plan:</label>
          <select id="plan" className="px-2 py-1 border border-gray-300 rounded" onChange={(e) => handlePlanChange(e.target.value)}>
            {Object.keys(workoutPlans[selectedLevel]).map((planName) => (
              <option key={planName} value={planName}>{planName}</option>
            ))}
          </select>
        </div>

        {/* Display selected workout plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPlan.map((dayPlan, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">{dayPlan.name} ({dayPlan.day})</h2>
              {dayPlan.exercises.map((exercise, idx) => (
                <div key={idx}>
                  <p>{exercise.name}</p>
                  <p>Sets: {exercise.sets}</p>
                  <p>Reps: {exercise.reps}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <MembershipModal />
    </div>
  );
};

export default WorkoutsPage;
