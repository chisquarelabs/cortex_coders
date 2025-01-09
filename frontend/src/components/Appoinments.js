import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config/constant';

const PhysicianAppointments = () => {
  const navigate = useNavigate();
  const axiosInstance = axios.create();
  const viewPatient = async (patientId) => {
    console.log('patientId----',patientId)

    try {
      const PatientAssessment = await axiosInstance
      // .get(`http://localhost:3002/api/viewAssessment/${patientId}`);
      .get(`${BACKEND_URL}/api/viewAssessment/${patientId}`);
      console.log('PatientAssessment---',PatientAssessment)
      navigate('/PatientInfo', {
        state: {
          PatientAssessment: PatientAssessment.data,
      },
    });
    } catch (error) {
      console.error('Error during view patient:', error.message);
    } 
  };
  return (
    <Box
      className="container-fluid"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Main Content */}
      <Box className="row w-100" sx={{ maxWidth: 1200 }}>
        {/* Physician Details Section */}
        <Box
          className="col-12"
          sx={{
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 2,
            marginBottom: 3,
          }}
        >
          <Typography variant="h5" className="text-primary mb-3">
            Hello Dr. Kevinson
          </Typography>
          <Typography variant="body1" className="text-muted">
            You have <strong>X</strong> patients to review
          </Typography>
          <Typography variant="body1" className="text-muted">
            You have <strong>Y</strong> patients to follow up
          </Typography>
        </Box>

        {/* Appointment Table Section */}
        <TableContainer
          component={Paper}
          className="col-12"
          sx={{ borderRadius: 2, boxShadow: 3 }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e9ecef' }}>
                <TableCell><strong>Patient ID</strong></TableCell>
                <TableCell><strong>Encounter Type</strong></TableCell>
                <TableCell><strong>Assessment Score</strong></TableCell>
                <TableCell><strong>Medication - Dosage</strong></TableCell>
                <TableCell><strong>Next Appointment</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index} hover>
                  <TableCell>PID-{index + 1}</TableCell>
                  <TableCell>Routine Check</TableCell>
                  <TableCell>80%</TableCell>
                  <TableCell>Medicine A - 10mg</TableCell>
                  <TableCell>12/01/2025</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" size="small" onClick={() => viewPatient(2)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PhysicianAppointments;