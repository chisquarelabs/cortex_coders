
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import PhysicianAppointments from "./components/Appoinments";
import PatientInfo from "./components/PatientInfo";
import PatientSummary from "./components/Summary";
import PatientWizard from './components/PatientWizard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import 'survey-core/defaultV2.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/patient-wizard" element={<PatientWizard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/appoinments" element={<PhysicianAppointments/>} />
        <Route path="/patientinfo" element={<PatientInfo/>} />
        <Route path="/summary" element={<PatientSummary/>} />
      </Routes>
    </Router>
  );
}

export default App;