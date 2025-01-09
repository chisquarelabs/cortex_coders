import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Chip,
} from '@mui/material';

const SummaryDetailsPage = () => {
  // State to track the selected summary category
  const [selectedSummary, setSelectedSummary] = useState(null);

  // Simulating the details for each summary category
  const summaryData = {
    Demographics: "Patient Name: John Doe, Age: 34, Gender: Male",
    Social: "Lives with family, No smoking, Socially active",
    Medical: "Diagnosed with Hypertension, Taking Medication A",
    Functional: "Able to perform daily activities independently",
    Behavioral: "No behavioral concerns reported",
    Cognition: "Normal cognitive functioning, No memory issues",
  };

  // Notes with flags (simulated)
  const notes = {
    Demographics: [
      { text: "Critical information", color: "red" },
      { text: "Verified with patient", color: "green" }
    ],
    Social: [
      { text: "Non-smoker", color: "blue" },
      { text: "High social activity", color: "green" }
    ],
    // Add more notes for other categories...
  };

  // Function to handle selecting a summary category
  const handleSummaryClick = (summaryCategory) => {
    setSelectedSummary((prev) => (prev === summaryCategory ? null : summaryCategory));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Heading */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        Patient Summary Details
      </Typography>

      {/* Layout Wrapper */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 3,
          padding: 3,
        }}
      >
        {/* Left Side: Summary Categories (Buttons) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '30%',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Summary Categories
          </Typography>

          {['Demographics', 'Social', 'Medical', 'Functional', 'Behavioral', 'Cognition'].map(
            (category) => (
              <Button
                key={category}
                onClick={() => handleSummaryClick(category)} // Toggle summary details
                sx={{
                  width: '100%',
                  textAlign: 'left',
                  padding: 1,
                  fontWeight: 'bold',
                  fontSize: '16px',
                  backgroundColor: selectedSummary === category ? '#e0f7fa' : '#fff',
                  borderRadius: 2,
                  boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ddd',
                }}
              >
                {category}
              </Button>
            )
          )}
        </Box>

        {/* Right Side: Summary Details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '65%',
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            padding: 3,
            border: '1px solid #ddd',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            {selectedSummary ? `${selectedSummary} Details` : 'Select a Summary Category'}
          </Typography>

          {/* Display the details for the selected summary category */}
          {selectedSummary && (
            <>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: '#f1f3f5',
                  borderRadius: 2,
                  border: '1px solid #ddd',
                  boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="body2">
                  {summaryData[selectedSummary]}
                </Typography>

                {/* Display the notes with flags */}
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    Notes
                  </Typography>
                  {notes[selectedSummary]?.map((note, index) => (
                    <Chip
                      key={index}
                      label={note.text}
                      color="default"
                      sx={{
                        marginRight: 1,
                        marginBottom: 1,
                        backgroundColor: note.color,
                        color: 'white',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default SummaryDetailsPage;