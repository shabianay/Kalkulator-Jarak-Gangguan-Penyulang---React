import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage"; // Import the LandingPage component
import FaultDistanceCalculator from "./FaultDistanceCalculator"; // if it's in the same folder

const App = () => {
  return (
    <Router>
      <div>
        {/* Routing setup */}
        <Routes>
          {/* Default route (Landing page) */}
          <Route path="/" element={<LandingPage />} />
          {/* Route for the calculator */}
          <Route path="/calculator" element={<FaultDistanceCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
