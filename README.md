# How to run this app
1. Open entire app folder in IDE of choice (I used Visual Studio Code)
2. In the app folder (root app folder containing src, public and so on and so forth), run `npm install`
3. `npm start` to run the app, app will appear at [http://localhost:3000](http://localhost:3000)

# Locations of files
1. App is split into components, main logic for the buttons and text boxes is in src/BaseButtons.js

## How to update the ORAC data shown on the app

1. Go to src/oracData.js

Data in the original ORAC pdf is translated into a json format. [https://www.w3schools.com/whatis/whatis_json.asp](https://www.w3schools.com/whatis/whatis_json.asp)

For example, the first row of the spine orac is presented as such:
{
  oracType: "Spine",
  bodyRegion: "Cervical Spine",
  information: [{
    clinicalIndication: "Acute Trauma",
    appropriatenessCriteria: {
      remarks: "The National Emergency X-Radiography Utilization Study (NEXUS) and Canadian C-spine Rules (CCR) help risk-stratify patients to determine if they need imaging evaluation of the C-spine.",
      conditions: [],
      remarks2: "Consider imaging if:",
      conditions2: ["Age >65", "GCS score <15", 
      "Intoxication", 
      "Midline spinal tenderness", 
      "Focalneurological deficit", 
      "Paraesthesia in extremities", 
      "Unable to actively rotate neck left and right to 45 degrees", 
      "Not possible to test range of neck movement", 
      "Dangerous mechanism of injury"
    ],
    },
    clinicalConsiderations: ["If imaging not indicated by NEXUS or CCR and patient meets low risk criteria, XR is usually not appropriate.",
    "If imaging is indicated by NEXUS or CCR clinical criteria, CT cervical spine is usually the preferred examination.",
    "MRI will show spinal cord, ligamentous and soft tissue injuries better than CT."
  ],
    recommendedProjections: ["AP and lateral cervical spine XR"],
    xRayRemarks: ["A supplementary swimmer’s lateral projection will be done if the C7-T1 junction is not visible on the standard lateral projection."],
    referralImagingRequirements: ["As per initial imaging"],
  }, {
    clinicalIndication: "Non-traumatic neck pain",
    appropriatenessCriteria: {
      remarks: "Red Flags:",
      conditions: ["Trauma",
      "Malignancy",
      "Prior cervical spine surgery",
      "Spinal cord injury",
      "Suspicion of infection",
      "History of IV drug use",
      "Systemic disease including spondyloarthritis and diffuse idiopathic skeletal hyperostosis",
      "Intractable pain despite therapy",
      "Tenderness to palpation over a vertebral body",
      "Neurological deficits (motor symptoms are more worrying than sensory symptoms)"
    ],
      remarks2: "XR is usually appropriate as initial evaluation in:",
      conditions2: ["New or increasing pain",
      "New or increasing radiculopathy",
      "Prior cervical spine surgery with new or increasing pain or radiculopathy",
      "Chronic cervical or neck pain"],
    },
    clinicalConsiderations: ["In the absence of red flags, imaging may not be required at the time of initial presentation.",
    "Spondylotic changes are commonly identified on XR and correlate poorly with symptoms."],
    recommendedProjections: ["AP and lateral cervical spine XR"],
    xRayRemarks: ["A swimmers projection is rarely necessary."],
    referralImagingRequirements: ["As per initial imaging"],
  }],
}

oracType = (Spine, Lower Extremity, Upper Extremity) aka the name of the pdf

bodyRegion = string representing Body Region

information is an array of objects of all the other 6 columns related to that body region (this is because some rows have multiple clinical indications for 1 body region)

clinicalIndication = string representing Clinical Indication

appropriatenessCriteria = Appropriateness Criteria
Appropriateness criteria is split into 2 groups of remarks and conditions (remarks & conditions, remarks2 & conditions2). Both remarks & remarks2 will appear as text boxes in the application, while conditions is an array of strings that will appear as items to be checked off on the application. The template will generate in such a way where the remarks text box will appear, followed by conditions, then remarks2 and conditions2

clinicalConsiderations = Clinical Considerations
Clinical considerations is an array of strings. Each string will be displayed in its own text box.
For example, 
1. `clinicalConsiderations: ["In the absence of red flags, imaging may not be required at the time of initial presentation.", "Spondylotic changes are commonly identified on XR and correlate poorly with symptoms."]` will generate two text boxes
2. `clinicalConsiderations: ["In the absence of red flags, imaging may not be required at the time of initial presentation. Spondylotic changes are commonly identified on XR and correlate poorly with symptoms."]` will only generate 1 text box

The difference between these two is the comma in the middle. The first array has two string objects while the second one only has one.

The same logic applies to reccommendedProjections = Reccommended Projections, xRayRemarks = X Ray Remarks, refferalImagingRequirements = Refferal Imaging Requirements

2. run `npm run deploy`
