
export const json = {
    "title": "Patient Assessment Form",
    "logoPosition": "right",
    "completedHtml": "<h3>Patient assessment completed successfully</h3>",
    "pages": [
      {
        "name": "page-one",
        "elements": [
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "qualification",
            "title": "Qualification",
            "choices": [
              "Level 6-8",
              "Level 1-3",
              "Entry Level",
              "Level 4-5"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "occupation",
            "title": "Occupation",
            "choices": [
              "Others",
              "Unemployed",
              "Employed",
              "Retired"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "learning-disabilities",
            "title": "Learning Disabilities",
            "choices": [
              "IDD",
              "No",
              "Multiple",
              "Cerebral Palsy",
              "Down Syndrome"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "smoker",
            "title": "Smoker",
            "choices": [
              "Yes",
              "No"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "alcoholic",
            "title": "Alcoholic",
            "choices": [
              "Yes",
              "No"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "hospitalization",
            "title": "Hospitalization",
            "choices": [
              "No",
              "Yes"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "diabetic",
            "title": "Diabetic",
            "choices": [
              "No",
              "Yes"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "thyroid",
            "title": "Thyroid",
            "choices": [
              "Hypothyroidism",
              "Hyperthyroidism",
              "No"
            ],
            "colCount": 3
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "cancer",
            "title": "Cancer",
            "choices": [
              "Yes",
              "No"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "stroke",
            "title": "Stroke / Cerebrovascular Attack",
            "choices": [
              "No",
              "Yes"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "cardiac-problems",
            "title": "Cardiac Problems",
            "choices": [
              "Angina",
              "No",
              "Heart Failure",
              "Heart Attack"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "head-injuries",
            "title": "Head Injuries",
            "choices": [
              "Concussions",
              "No",
              "Head Trauma",
              "Traumatic Brain Injury"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "seizures",
            "title": "Seizure / Epilepsy / Fits",
            "choices": [
              "Yes",
              "No"
            ],
            "colCount": 2
          },
          {
            "type": "radiogroup",
            "isRequired": true,
            "name": "renal-conditions",
            "title": "Renal Conditions",
            "choices": [
              "CKD",
              "No",
              "Nephrectomy"
            ],
            "colCount": 3
          }
        ]
      }
    ],
    "showQuestionNumbers": "off",
    "completeText": "Submit",
    "widthMode": "static",
    "width": "900"
  };