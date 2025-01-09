
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
          },
          {
            "type": "boolean",
            "name": "qualification-assistance",
            "title": "Do you require assistance with understanding your qualification level?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "occupation-assistance",
            "title": "Do you require assistance in finding an occupation?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "learning-disabilities-assistance",
            "title": "Do you require assistance due to any learning disabilities?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "smoking-assistance",
            "title": "Do you require assistance to quit smoking?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "alcohol-assistance",
            "title": "Do you require assistance to quit alcohol?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "hospitalization-assistance",
            "title": "Do you require assistance related to recent hospitalization?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "diabetes-assistance",
            "title": "Do you require assistance in managing diabetes?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "thyroid-assistance",
            "title": "Do you require assistance in managing thyroid conditions?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "cancer-assistance",
            "title": "Do you require assistance for cancer-related treatment or care?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "stroke-assistance",
            "title": "Do you require assistance in managing the effects of a stroke?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "cardiac-assistance",
            "title": "Do you require assistance in managing cardiac problems?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "head-injuries-assistance",
            "title": "Do you require assistance due to head injuries?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "seizures-assistance",
            "title": "Do you require assistance for managing seizures or epilepsy?",
            "titleLocation": "left"
          },
          {
            "type": "boolean",
            "name": "renal-conditions-assistance",
            "title": "Do you require assistance for renal conditions?",
            "titleLocation": "left"
          }
        ]
      }
    ],
    "showQuestionNumbers": "off",
    "completeText": "Submit",
    "widthMode": "static",
    "width": "900"
  };