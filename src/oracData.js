export const oracData = [{
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
},
{
  oracType: "Spine",
  bodyRegion: "Lumbar Spine",
  information: [{
    clinicalIndication: "Non-traumatic low back pain (LBP)",
    appropriatenessCriteria: {
      remarks: "XR as initial evaluation is usually appropriate in acute, subacute or chronic LBP or radiculopathy with one or more of the following:",
      conditions: ["Osteoporosis",
      "Chronic steroid use",
      "Low velocity trauma",
      "Elderly individual"],
      remarks2: "XR may be appropriate but MRI is preferred in acute, subacute or chronic LBP or radiculopathy with one or more of the following:",
      conditions2: ["Suspicion of cancer",
      "Suspicion of infection",
      "Immunosuppression",
      "Surgical candidate with persistent or progressive symptoms during or following 6 weeks of conservative management",
      "Prior lumbar surgery with new or progressive symptoms or clinical findings"
    ],
    },
    clinicalConsiderations: ["Uncomplicated acute, subacute or chronic LBP or radiculopathy are benign and self-limiting conditions that do not usually warrant any imaging studies.",
    "MRI should be considered for patients presenting severe or progressive neurologic deficits and red flags. Red flags are indicators of serious spinal pathology such as: Cauda equina syndrome or severe neurologic compromise, Malignancy, Infection, Fracture, Spondyloarthritis"],
    recommendedProjections: ["AP and lateral lumbar spine XR"],
    xRayRemarks: ["Thoracolumbar spine XR does not include the upper thoracic region. Please order thoracic and lumbar spine XR separately if necessary."],
    referralImagingRequirements: ["As per initial imaging"],
  },]
},
{
  oracType: "Spine",
  bodyRegion: "Cervical / Lumbar Spine",
  information: [{
    clinicalIndication: "Instability",
    appropriatenessCriteria: {
      remarks: "Symptoms suggesting instability and radioculopathy in the upper or lower limbs, or XR suggests instability i.e. spondylolisthesis.",
      conditions: [],
      remarks2: "Post-op assessment for implant fusion and disc replacement mobility.",
      conditions2: [],
    },
    clinicalConsiderations: ["To guide management; conservative management vs surgery (specifically fusion)"],
    recommendedProjections: ["Lateral flexion and extension cervical or lumbar spine XR"],
    xRayRemarks: [],
    referralImagingRequirements: [],
  },]
},
{
  oracType: "Spine",
  bodyRegion: "Whole Spine",
  information: [{
    clinicalIndication: "Scoliosis",
    appropriatenessCriteria: {
      remarks: "For surgical planning or post-surgical evaluation",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: [],
    recommendedProjections: ["Whole spine XR(not available in ED or SHP)"],
    xRayRemarks: ["Do not order separate cervical, thoracic and lumbar spine XR as this leads to unnecessary radiation.",
    "A full spine XR is recommended over three sectional views (lower radiation dose)."],
    referralImagingRequirements: ["As per initial imaging"],
  },]
},
{
  oracType: "Spine",
  bodyRegion: "Sacrum",
  information: [{
    clinicalIndication: "Chronic pain, suspect stress fracture",
    appropriatenessCriteria: {
      remarks: "Suspect stress (insufficiency) fracture",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["XR may be appropriate but has poor sensitivity. Sacral stress fractures are usually treated conservatively.",
    "If sacral stress fracture is suspected, MRI or bone scan is recommended."
    ],
    recommendedProjections: ["AP and lateral sacral XR"],
    xRayRemarks: ["If suspect sacral fracture, request only a sacral XR without a coccyx XR."],
    referralImagingRequirements: ["As per initial imaging"],
  },]
},
{
  oracType: "Spine",
  bodyRegion: "Coccyx",
  information: [{
    clinicalIndication: "Trauma to coccyx or coccydynia",
    appropriatenessCriteria: {
      remarks: "Isolated tail bone pain. Persistent pain not resolving with conservative treatment.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["A positive exam may alter patient's expectations and require them to sit on a soft surface for a few weeks."],
    recommendedProjections: ["AP and lateral coccyx XR"],
    xRayRemarks: ["If suspect coccyx fracture, request only a coccyx XR without a sacrum XR."],
    referralImagingRequirements: ["As per initial imaging"],
  },]
},

// Upper Extremity 
{
  oracType: "Upper Extremity",
  bodyRegion: "Shoulder",
  information: [{
    clinicalIndication: "Pain (traumatic)",
    appropriatenessCriteria: {
      remarks: "XR is usually appropriate when there is acute or chronic traumatic shoulder pain.",
      conditions: [],
      remarks2: "XR is the initial imaging modality of choice.",
      conditions2: [],
    },
    clinicalConsiderations: ["Some dislocations present with subtle findings. As a minimum, two orthogonal views are required but an additional axillary or Valpeau view is recommended.",
    "XR may should characteristic bony lesions in the humeral head and glenoid in shoulder instability."
    ],
    recommendedProjections: ["AP shoulder, Y-scapula XR & axillary or Valpeau view",
    "AP shoulder, Y-scapula XR is acceptable for post M+R"
    ],
    xRayRemarks: ["XR should be performed upright.",
    "AP view of the shoulder is done in external rotation.",
    "Documentation required if Axillary or Velpeau is not technically feasible due to patient’s condition."
    ], 
    referralImagingRequirements: ["As per initial imaging"],
  }, { 
    clinicalIndication: "Pain (atraumatic)",
    appropriatenessCriteria: {
      remarks: "XR is usually appropriate in atraumatic shoulder pain.",
      conditions: [],
      remarks2: "XR is the initial imaging modality of choice.",
      conditions2: [],
    },
    clinicalConsiderations: ["Impingement is clinically diagnosed. XR is indicated for persistent shoulder pain that is unresponsive to conservative management to exclude calcific tendinitis and other diagnoses unrelated to the rotator cuff."],
    recommendedProjections: ["AP shoulder & Y-scapula XR"],
    xRayRemarks: ["XR should be performed upright.",
    "AP view of the shoulder is done in external rotation.",
    "3 views shoulder x-rays are not necessary for patients without history of trauma or for chronic pain."
    ],
    referralImagingRequirements: ["As per initial imaging"],
  }],
},
{
  oracType: "Upper Extremity",
  bodyRegion: "Elbow",
  information: [{
    clinicalIndication: "Pain (trauma)",
    appropriatenessCriteria: {
      remarks: "XR is usually appropriate when there is traumatic elbow pain.",
      conditions: [],
      remarks2: "XR is the initial imaging modality of choice.",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is the best initial investigation to show fracture, dislocation and effusion."
    ],
    recommendedProjections: ["AP & lateral elbow XR"
    ],
    xRayRemarks: [], 
    referralImagingRequirements: [],
  }, { 
    clinicalIndication: "Pain (chronic)",
    appropriatenessCriteria: {
      remarks: "XR is usually appropriate in chronic elbow pain.",
      conditions: [],
      remarks2: "XR is the initial imaging modality of choice.",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is the best initial investigation to show osteophytes, intra-articular bodies, heterotopic ossification, osteochondritis dissecans, or calcifications in and around the joint."],
    recommendedProjections: ["AP & lateral elbow XR"],
    xRayRemarks: [],
    referralImagingRequirements: [],
  }],
},
{
  oracType: "Upper Extremity",
  bodyRegion: "Wrist",
  information: [{
    clinicalIndication: "Pain (acute / chronic)",
    appropriatenessCriteria: {
      remarks: "XR recommended as initial imaging for suspected wrist injury.",
      conditions: [],
      remarks2: "XR recommended as initial imaging for chronic wrist pain.",
      conditions2: [],
    },
    clinicalConsiderations: ["For isolated wrist injury, wrist XR should be requested rather than forearm XR.",
    "For suspected scaphoid fractures, dedicated scaphoid XR should be requested."],
    recommendedProjections: ["PA and lateral wrist XR"],
    xRayRemarks: ["For suspected DRUJ injuries, additional forearm XR & elbow XR may be requested at surgeons' discretion."],
    referralImagingRequirements: ["As per initial imaging"],
  },]
},
{
  oracType: "Upper Extremity",
  bodyRegion: "Hand",
  information: [{
    clinicalIndication: "Pain (acute / chronic)",
    appropriatenessCriteria: {
      remarks: "XR recommended as initial imaging for suspected hand injury.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["For suspected CMCJ dislocations, an additional lateral view of the hand should be requested."],
    recommendedProjections: ["DP and oblique hand XR"],
    xRayRemarks: [],
    referralImagingRequirements: [],
  },]
},
{
  oracType: "Upper Extremity",
  bodyRegion: "Finger",
  information: [{
    clinicalIndication: "Pain (acute / chronic)",
    appropriatenessCriteria: {
      remarks: "XR recommended as initial imaging for suspected finger injury.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: [],
    recommendedProjections: ["PA and lateral finger XR"],
    xRayRemarks: ["Most fractures are visible on the standard two view XR examination, although there is a slight increase in diagnostic yield with the addition of an oblique projection."],
    referralImagingRequirements: [],
  },]
},
{
  oracType: "Upper Extremity",
  bodyRegion: "Thumb",
  information: [{
    clinicalIndication: "Pain (acute / chronic)",
    appropriatenessCriteria: {
      remarks: "XR recommended as initial imaging for suspected thumb injury.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: [],
    recommendedProjections: ["AP and lateral thumb XR"],
    xRayRemarks: ["Most fractures are visible on the standard two view XR examination, although there is a slight increase in diagnostic yield with the addition of an oblique projection."],
    referralImagingRequirements: [],
  },]
},
// Lower Extremity 
{
  oracType: "Lower Extremity",
  bodyRegion: "Hip",
  information: [{
    clinicalIndication: "Acute Injury",
    appropriatenessCriteria: {
      remarks: "XR is indicated in acute hip pain after pelvic injury with suspected femoral neck fracture.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is the initial imaging modality of choice. However, femoral neck fractures may be occult.",
    "Consider MRI or CT of the bony pelvis for further evaluation if XR is negative or equivocal but clinical suspicion is high."
  ],
    recommendedProjections: ["AP pelvis and lateral hip XR"],
    xRayRemarks: ["AP pelvis XR to visualise the entire bony pelvis."],
    referralImagingRequirements: ["As per initial imaging"],
  }, {
    clinicalIndication: "Chronic Pain",
    appropriatenessCriteria: {
      remarks: "XR is indicated for persistent pain.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["XR may show degenerative or erosive changes, bony pathology (e.g. avascular necrosis), and morphological features (e.g. femoroacetabular impingement or acetabular dysplasia).",
    "After XR, MRI or MR arthrography are usually the next modality for evaluating chronic hip pain."],
    recommendedProjections: ["AP pelvis and lateral hip XR"],
    xRayRemarks: ["AP pelvis (instead of a unilateral AP hip) XR will be done if there is no recent pelvis XR."],
    referralImagingRequirements: ["As per initial imaging"],
  }],
},
{
  oracType: "Lower Extremity",
  bodyRegion: "Knee",
  information: [{
    clinicalIndication: "Acute Injury",
    appropriatenessCriteria: {
      remarks: "Ottawa knee rules. Consider XR only if:",
      conditions: ["Age >55 years",
      "Localised tenderness of the patella",
      "Localised tenderness of the fibular head",
      "Inability of flex knee to 90 degrees",
      "Inability to weight-bear immediately and in emergency department (ED)",
      "Acute knee swelling/ effusion (modified for SGH)"
      ],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is warranted if Ottawa criteria are satisfied.",
    "In addition, XR is recommended if there is acute knee swelling or joint effusion in the setting of acute injury (modified for SGH)."
  ],
    recommendedProjections: ["AP and lateral knee XR", 
    "Add skyline view if suspect patellar fracture or dislocation."
    ],
    xRayRemarks: ["Non weight bearing (WB) views are obtained in acute injury.", 
    "Horizontal beam lateral knee XR is done to look for lipohaemathrosis."
    ],
    referralImagingRequirements: ["As per initial imaging"],
  }, {
    clinicalIndication: "Chronic pain",
    appropriatenessCriteria: {
      remarks: "XR may be considered for osteoarthritis (OA) and is usually appropriate as initial imaging.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["Knee OA can be evaluated clinically. Clinical features will often be sufficient to guide management. XR is not always necessary to start treatment. Severity of OA changes on XR does not alone determine the need for surgery.",
    "If orthopaedic referral is considered, AP, lateral and skyline XR (WB) is recommended. This is to prevent repeat or additional imaging at specialist outpatient clinic (SOC)."
    ],
    recommendedProjections: ["AP and lateral knee XR (WB)",
    "Add skyline view if suspect patellofemoral OA."
    ],
    xRayRemarks: ["WB views are preferred."],
    referralImagingRequirements: ["AP, lateral and skyline knee XR (WB)"],
  }],
},
{
  oracType: "Lower Extremity",
  bodyRegion: "Ankle",
  information: [{
    clinicalIndication: "Acute Injury",
    appropriatenessCriteria: {
      remarks: "Ottawa ankle rules. Consider XR only if:",
      conditions: ["Inability to weight-bear immediately and in the ED",
      "Bony tenderness over the distal 6cm of the posterior edge or tip of either malleolus",
      ],
      remarks2: "Ottawa rules should not be used if exclusionary criteria are present. Exclusionary criteria include: chronic injury (> 10 days), reduced sensation, inability to communicate, intoxication, distracting injury, penetrating injury, pregnancy, age below 5 years.",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is warranted if Ottawa criteria are satisfied.",
    "XR is usually NOT indicated if evaluation by Ottawa rules is negative and no exclusionary criteria are present."
  ],
    recommendedProjections: ["AP, Mortise and lateral ankle XR"
    ],
    xRayRemarks: ["Non WB views are obtained in acute injury."],
    referralImagingRequirements: [],
  }, {
    clinicalIndication: "Chronic pain",
    appropriatenessCriteria: {
      remarks: "XR can be considered and is usually appropriate as initial imaging for chronic ankle pain.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["If orthopaedic referral is considered, AP, Mortise and lateral XR (WB) is recommended. This is to prevent repeat or additional imaging at SOC."
    ],
    recommendedProjections: ["AP, Mortise and lateral ankle XR (WB)"],
    xRayRemarks: ["WB views are preferred."],
    referralImagingRequirements: [],
  }],
},
{
  oracType: "Lower Extremity",
  bodyRegion: "Foot",
  information: [{
    clinicalIndication: "Acute Injury",
    appropriatenessCriteria: {
      remarks: "Ottawa foot rules. Consider XR for midfoot pain and any of the following:",
      conditions: ["Inability to weight-bear immediately and in the ED",
      "Bony tenderness at the navicular",
      "Bony tenderness at the fifth metatarsal base"
      ],
      remarks2: "Ottawa rules should not be used if exclusionary criteria are present. Exclusionary criteria include: chronic injury (more than 10 days), reduced sensation, inability to communicate, intoxication, distracting injury, penetrating injury, pregnancy, age below 5 years.",
      conditions2: [],
    },
    clinicalConsiderations: ["XR is warranted if Ottawa criteria are satisfied.",
    "XR is usually NOT indicated if evaluation by Ottawa rules is negative and no exclusionary criteria are present.",
    "Trauma to the forefoot is not directly addressed by the Ottawa rules, thus the rules cannot be applied in forefoot injury."
    ],
    recommendedProjections: ["DP, oblique and lateral foot XR"
    ],
    xRayRemarks: ["Non WB views are obtained in acute injury."],
    referralImagingRequirements: [],
  }, {
    clinicalIndication: "Chronic pain",
    appropriatenessCriteria: {
      remarks: "XR can be considered and is usually appropriate as initial imaging for chronic foot pain.",
      conditions: [],
      remarks2: "",
      conditions2: [],
    },
    clinicalConsiderations: ["If orthopaedic referral is considered, DP, oblique and lateral XR (WB) is recommended. This is to prevent repeat or additional imaging at SOC."
    ],
    recommendedProjections: ["DP, oblique and lateral foot XR (WB)"],
    xRayRemarks: ["WB views are preferred"],
    referralImagingRequirements: [],
  }],
},
]



export default oracData;