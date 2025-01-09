import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {
  Box,
  Button,
  Collapse,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const PatientInfo = () => {
  const location = useLocation();
  const patientData = location.state;
  console.log('patientData---',patientData);
  const axiosInstance = axios.create();
  // State for the left-side expandable boxes
  const [expandedBox, setExpandedBox] = useState(null);

  // State for the right-side dropdowns

  const [testReferred, setTestReferred] = useState('');

  const [medication, setMedication] = useState([]);

  const toggleBox = (boxName) => {
    setExpandedBox((prev) => (prev === boxName ? null : boxName)); // Toggles the clicked box
  };
  useEffect(() => {
    const fetchMedicationData = async () => {
      try {
        const medicationResult = await axios.get('http://localhost:3002/api/getMedication');
        setMedication(medicationResult.data);  // Setting state with fetched data
      } catch (error) {
        console.error('Error fetching medication:', error.message);
      }
    };

    fetchMedicationData();  // Fetching medication data
  }, []);
console.log('med---',medication)
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Heading with patient name */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        Patient: John Doe
      </Typography>

      {/* Layout Wrapper */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 4,
          padding: 3,
          backgroundColor: '#f8f9fa',
          borderRadius: 2,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left Side: Expandable/Collapsible Boxes */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '45%',
          }}
        >
            <h1>Summary</h1>
          {['Demographics', 'Social', 'Medical', 'Functional', 'Behavioral', 'Cognition'].map(
            (boxName) => (
              <Box
                key={boxName}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: 1,
                  padding: 2,
                  border: '1px solid #ddd',
                }}
              >
                <Button
                  onClick={() => toggleBox(boxName)} // Toggle specific box
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 1,
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                >
                  {boxName}
                </Button>
                <Collapse in={expandedBox === boxName}>
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: '#f1f3f5',
                      borderRadius: 1,
                      marginTop: 1,
                    }}
                  >
                    <Typography variant="body2">
                      {boxName} Data: Sample information about {boxName}.
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            )
          )}
        </Box>

        {/* Right Side: Dropdowns and Remarks Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            padding: 3,
            border: '1px solid #ddd',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Medication and Tests
          </Typography>

          {/* Medication Dropdown */}
          <FormControl fullWidth>
            <InputLabel>Medication</InputLabel>
            <Select
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              label="Medication"
            >
              <MenuItem value="Medicine A">Medicine A</MenuItem>
              <MenuItem value="Medicine B">Medicine B</MenuItem>
              <MenuItem value="Medicine C">Medicine C</MenuItem>
            </Select>
          </FormControl>

          {/* Test Referred Dropdown */}
          <FormControl fullWidth>
            <InputLabel>Test Referred</InputLabel>
            <Select
              value={testReferred}
              onChange={(e) => setTestReferred(e.target.value)}
              label="Test Referred"
            >
              <MenuItem value="Blood Test">Blood Test</MenuItem>
              <MenuItem value="X-Ray">X-Ray</MenuItem>
              <MenuItem value="MRI Scan">MRI Scan</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              padding: 2,
              backgroundColor: '#f1f3f5',
              borderRadius: 2,
              border: '1px solid #ddd',
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
              
              
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Remarks
            </Typography>
            <Typography variant="body2">
              This is the remarks section. Here, you can add any additional notes or information about the patient.
            </Typography>
          </Box>

          {/* Remarks Section */}
         
        </Box>
      </Box>
    </div>
  );
};

export default PatientInfo;