import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound'
import PatientWizard from './components/PatientWizard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'survey-core/defaultV2.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/patient-wizard" element={<PatientWizard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
