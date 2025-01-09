
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json, questionList } from "./FormJson"
import React, { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { BACKEND_URL } from "../config/constant";

function SurveyComponent() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            // const response = await fetch('http://localhost:8000/api/questions', {
            //     method: 'GET',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   });
            const response = await fetch(`${BACKEND_URL}/api/questions`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('------response', response);
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setQuestions(data); // Assuming data is an array of questions
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchQuestions();
      }, []);
    console.log('------questions', questions)

    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        const surveyData = sender.data;

        // Send the data to the backend via POST request
        const postData = async () => {
            try {
                // const response = await fetch('http://localhost:8000/api/assessment', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(surveyData), // Send survey data
                // });
                const response = await fetch(`${BACKEND_URL}/api/assessment`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(surveyData), // Send survey data
              });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const result = await response.json();
                console.log('Survey submission result:', result);
            } catch (err) {
              navigate('/summary');
                console.error('Error sending survey data:', err.message);
            }
        };

        postData(); // Call the function to send data
        console.log(JSON.stringify(surveyData)); // For debugging purposes
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;