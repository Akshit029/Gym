import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/AuthContainer/AuthContainer';
import HomePage from './components/HomePage/HomePage';
import WorkoutsPage from './components/WorkoutPage/WorkoutsPage'; // Adjust the import path if necessary
import CaloriesPage from './components/CaloriesPage/CaloriesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthContainer />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} /> {/* Corrected to lowercase 'workouts' */}
        <Route path="/calories" element={<CaloriesPage />} />
      </Routes>
    </Router>
  );
};
export default App;
