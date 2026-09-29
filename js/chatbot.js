/* =============================================================
   VIDHATA PLASTICS — AI MEDICAL & FACILITY ASSISTANT v3.0
   js/chatbot.js  |  Self-contained · Zero-dependency
   ─────────────────────────────────────────────────────────────
   Features:
     • Full Knowledge Base across all 12 live pages (Zero 404 links)
     • Direct Instant Search over all 26 CDSCO Licensed Medical Devices
     • Comprehensive FAQ engine (CDSCO licence, ISO cleanroom, samples, specs)
     • Page-aware context chips for all 12 site pages
     • Reset / Clear chat conversation button in header
     • Direct WhatsApp + Quick-dial contact integration
     • Message feedback (👍 / 👎) & GA4 event tracking
     • Smooth section scroll navigation
   ============================================================= */

(function () {
  'use strict';

  /* ─── Configuration ──────────────────────────────────────── */
  var CFG = {
    phone      : '+919885100808',
    phoneLabel : '+91 98851 00808',
    whatsapp   : 'https://wa.me/919885100808?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Vidhata%20Plastics%20medical%20manufacturing.',
    storageKey : 'vp-bot-v3',
    maxHistory : 50,
    maxAgeMs   : 24 * 60 * 60 * 1000   // 24 hours
  };

  /* ─── 26 Licensed Medical Devices Database ────────────────── */
  var MEDICAL_PRODUCTS_INDEX = [
  {
    "id": "infusion-intravenous-set-non-vented",
    "title": "Infusion (Intravenous) Set Non-Vented",
    "code": "VP-INF-01",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Administration of fluids from a container into the patient's vascular system through a vascular access device.",
    "keywords": [
      "infusion",
      "intravenous",
      "set",
      "non",
      "vented",
      "vp-inf-01",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "clamp",
      "and",
      "roller",
      "nylon",
      "mesh",
      "fluid",
      "filter",
      "male",
      "luer",
      "lock",
      "ldpe",
      "cap",
      "stainless",
      "needle",
      "tube"
    ]
  },
  {
    "id": "infusion-intravenous-set-vented",
    "title": "Infusion (Intravenous) Set Vented",
    "code": "VP-INF-02",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Administration of fluids from a container into the patient's vascular system through a vascular access device.",
    "keywords": [
      "infusion",
      "intravenous",
      "set",
      "vented",
      "vp-inf-02",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "clamp",
      "and",
      "roller",
      "nylon",
      "mesh",
      "fluid",
      "filter",
      "male",
      "luer",
      "lock",
      "ldpe",
      "cap",
      "tube"
    ]
  },
  {
    "id": "premium-infusion-set",
    "title": "Premium Based Infusion Set",
    "code": "VP-INF-03",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Intravenous administration of IV fluids into the vascular system through a vascular access device.",
    "keywords": [
      "premium",
      "based",
      "infusion",
      "set",
      "vp-inf-03",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "vented",
      "air",
      "vent",
      "cap",
      "filter",
      "membrane",
      "and",
      "silicone",
      "site"
    ]
  },
  {
    "id": "infusion-set-with-three-way-stopcock",
    "title": "Infusion Set with Three Way Stopcock",
    "code": "VP-INF-04",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Infusion of fluids and medications, with directional flow control at the access port.",
    "keywords": [
      "infusion",
      "set",
      "with",
      "three",
      "way",
      "stopcock",
      "vp-inf-04",
      "the",
      "premium",
      "abs",
      "and"
    ]
  },
  {
    "id": "micro-infusion-set-with-air-vented",
    "title": "Micro Infusion Set with Air Vented",
    "code": "VP-INF-05",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Fine-rate infusion of fluids and medications as part of an infusion system.",
    "keywords": [
      "micro",
      "infusion",
      "set",
      "with",
      "air",
      "vented",
      "vp-inf-05",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "drops/ml",
      "dropper",
      "abs",
      "clamp",
      "and",
      "roller",
      "vent",
      "cap",
      "filter",
      "membrane",
      "tube",
      "male",
      "luer",
      "lock"
    ]
  },
  {
    "id": "0-2-micron-filter-non-dehp-infusion-set",
    "title": "0.2 Micron Filter (Non-DEHP) Infusion Set",
    "code": "VP-INF-06",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Filtered intravenous infusion where a DEHP-free fluid path is required.",
    "keywords": [
      "0.2",
      "micron",
      "filter",
      "non",
      "dehp",
      "infusion",
      "set",
      "vp-inf-06",
      "the",
      "premium",
      "with",
      "abs",
      "and",
      "membrane"
    ]
  },
  {
    "id": "auto-stop-iv-infusion-set",
    "title": "Auto Stop IV Infusion Set",
    "code": "VP-INF-07",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Intravenous administration with an auto-stop drip chamber that closes when the container empties.",
    "keywords": [
      "auto",
      "stop",
      "infusion",
      "set",
      "vp-inf-07",
      "and",
      "membrane",
      "drip",
      "chamber",
      "with",
      "filter",
      "abs",
      "vented",
      "spike",
      "silicone",
      "site"
    ]
  },
  {
    "id": "measured-volume-infusion-set",
    "title": "Measured Volume Infusion Set",
    "code": "VP-INF-08",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Volume-controlled administration of fluids through a graduated burette.",
    "keywords": [
      "measured",
      "volume",
      "infusion",
      "set",
      "vp-inf-08",
      "pvc",
      "burette",
      "abs",
      "and",
      "stainless",
      "micronizer",
      "kink",
      "resistant",
      "tube",
      "silicone",
      "floater",
      "hard",
      "inlet",
      "outlet",
      "caps"
    ]
  },
  {
    "id": "elastomeric-infusion-pump",
    "title": "Elastomeric Infusion Pump",
    "code": "VP-INF-09",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "General infusion, antibiotic delivery, chemotherapy or pain management, in a healthcare facility or at home. Single use.",
    "keywords": [
      "elastomeric",
      "infusion",
      "pump",
      "vp-inf-09",
      "abs",
      "male",
      "luer",
      "lock",
      "and",
      "pvc",
      "flow",
      "rate",
      "controller",
      "membrane",
      "fluid",
      "filter",
      "medication",
      "reservoir",
      "support",
      "pipe",
      "tube"
    ]
  },
  {
    "id": "infusion-intravenous-set-with-flow-regulator",
    "title": "Infusion Intravenous Set with Flow Regulator",
    "code": "VP-INF-10",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Intravenous administration with precision flow control for consistent delivery.",
    "keywords": [
      "infusion",
      "intravenous",
      "set",
      "with",
      "flow",
      "regulator",
      "vp-inf-10",
      "the",
      "premium",
      "abs",
      "and",
      "tpe"
    ]
  },
  {
    "id": "priming-set-intravenous-infusion",
    "title": "Priming Set Intravenous Infusion",
    "code": "VP-INF-11",
    "category": "infusion",
    "risk": "Class B (India MDR 2017)",
    "desc": "Priming of an intravenous infusion line before administration.",
    "keywords": [
      "priming",
      "set",
      "intravenous",
      "infusion",
      "vp-inf-11",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "vented",
      "clamp",
      "and",
      "roller",
      "air",
      "vent",
      "cap",
      "filter",
      "membrane"
    ]
  },
  {
    "id": "haemodialysis-blood-tubing-set",
    "title": "Haemodialysis Blood Tubing Set",
    "code": "VP-NEP-01",
    "category": "nephrology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Acute and chronic haemodialysis therapy in kidney dialysis or renal failure.",
    "keywords": [
      "haemodialysis",
      "blood",
      "tubing",
      "set",
      "vp-nep-01",
      "nephrology",
      "latex",
      "free",
      "rubber",
      "plug",
      "pvc",
      "drip",
      "chamber",
      "colour",
      "coded",
      "injection",
      "sites",
      "pinch",
      "clamps",
      "abs",
      "luer",
      "locks",
      "pump",
      "segment",
      "connectors",
      "din"
    ]
  },
  {
    "id": "av-arteriovenous-fistula-needle-set",
    "title": "AV (Arteriovenous) Fistula Needle Set",
    "code": "VP-NEP-02",
    "category": "nephrology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Connects blood lines to the blood vessel through a needle when dialysis is carried out via an internal fistula. Flexible butterfly wings identify the needle size.",
    "keywords": [
      "arteriovenous",
      "fistula",
      "needle",
      "set",
      "vp-nep-02",
      "nephrology",
      "pvc",
      "flexible",
      "rotating",
      "wing",
      "with",
      "abs",
      "inner",
      "part",
      "304",
      "cover",
      "tubing",
      "delrin",
      "pinch",
      "clamp",
      "female",
      "luer",
      "lock"
    ]
  },
  {
    "id": "transducer-protector",
    "title": "Transducer Protector",
    "code": "VP-NEP-03",
    "category": "nephrology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Keeps the blood side of the haemodialysis circuit separated from the machine side and prevents contamination of the machine.",
    "keywords": [
      "transducer",
      "protector",
      "vp-nep-03",
      "nephrology",
      "abs",
      "female",
      "luer",
      "part",
      "male",
      "hydrophobic",
      "filter",
      "membrane"
    ]
  },
  {
    "id": "peritoneal-dialysis-transfusion-set",
    "title": "Peritoneal Dialysis Transfusion Set",
    "code": "VP-NEP-04",
    "category": "nephrology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Administration of dialysis solutions during peritoneal dialysis, allowing solution to flow into and out of the peritoneal cavity.",
    "keywords": [
      "peritoneal",
      "dialysis",
      "transfusion",
      "set",
      "vp-nep-04",
      "nephrology",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "vented",
      "air",
      "vent",
      "cap",
      "filter",
      "membrane",
      "junction"
    ]
  },
  {
    "id": "haemodialysis-catheter-set",
    "title": "Haemodialysis Catheter Set",
    "code": "VP-NEP-05",
    "category": "nephrology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Exchanges blood to and from the haemodialysis machine.",
    "keywords": [
      "haemodialysis",
      "catheter",
      "set",
      "vp-nep-05",
      "nephrology",
      "nitinol",
      "guide",
      "wire",
      "single",
      "double",
      "and",
      "triple",
      "lumen",
      "tubing",
      "vessel",
      "dilator",
      "introducer",
      "needles",
      "abs",
      "cannula",
      "clamp",
      "silicone",
      "plug",
      "holder"
    ]
  },
  {
    "id": "extension-line",
    "title": "Extension Line",
    "code": "VP-ACC-01",
    "category": "lines",
    "risk": "Class B (India MDR 2017)",
    "desc": "Single-use extension used as part of an infusion or perfusion system.",
    "keywords": [
      "extension",
      "line",
      "vp-acc-01",
      "lines",
      "male",
      "luer",
      "lock",
      "cap",
      "pvc",
      "tube",
      "female",
      "and"
    ]
  },
  {
    "id": "extension-lines-with-flow-regulator",
    "title": "Extension Lines with Flow Regulator",
    "code": "VP-ACC-02",
    "category": "lines",
    "risk": "Class B (India MDR 2017)",
    "desc": "Extension line offering precision care and consistent delivery as part of an infusion system.",
    "keywords": [
      "extension",
      "lines",
      "with",
      "flow",
      "regulator",
      "vp-acc-02",
      "abs",
      "male",
      "luer",
      "lock",
      "cap",
      "pvc",
      "tube",
      "female",
      "and",
      "tpe"
    ]
  },
  {
    "id": "extension-line-with-three-way-stopcock",
    "title": "Extension Line with Three Way Stopcock",
    "code": "VP-ACC-03",
    "category": "lines",
    "risk": "Class B (India MDR 2017)",
    "desc": "Fluid flow directional control, providing an access port for administration of solution, withdrawal of fluid and pressure monitoring.",
    "keywords": [
      "extension",
      "line",
      "with",
      "three",
      "way",
      "stopcock",
      "vp-acc-03",
      "lines",
      "abs",
      "connector",
      "regulator",
      "rotating",
      "luer",
      "lock",
      "caps",
      "pvc",
      "tube",
      "male"
    ]
  },
  {
    "id": "pvc-free-extension-line",
    "title": "PVC Free Extension Line",
    "code": "VP-ACC-04",
    "category": "lines",
    "risk": "Class B (India MDR 2017)",
    "desc": "Single-use extension for infusion and perfusion systems where a PVC-free fluid path is required.",
    "keywords": [
      "pvc",
      "free",
      "extension",
      "line",
      "vp-acc-04",
      "lines",
      "abs",
      "male",
      "luer",
      "lock",
      "cap",
      "tube",
      "female"
    ]
  },
  {
    "id": "chemotherapy-infusion-sets",
    "title": "Chemotherapy Infusion Sets",
    "code": "VP-ONC-01",
    "category": "oncology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Administration of fluids from a container into the patient's vascular system, offering precision care and consistent delivery.",
    "keywords": [
      "chemotherapy",
      "infusion",
      "sets",
      "vp-onc-01",
      "oncology",
      "spike",
      "cover",
      "pvc",
      "drip",
      "chamber",
      "abs",
      "vented",
      "clamp",
      "and",
      "roller",
      "nylon",
      "mesh",
      "fluid",
      "filter",
      "air",
      "vent",
      "cap",
      "membrane"
    ]
  },
  {
    "id": "chemotherapy-extension-line-with-flow-regulator",
    "title": "Chemotherapy Extension Line with Flow Regulator",
    "code": "VP-ONC-02",
    "category": "oncology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Extension line offering precision care and consistent delivery in chemotherapy administration.",
    "keywords": [
      "chemotherapy",
      "extension",
      "line",
      "with",
      "flow",
      "regulator",
      "vp-onc-02",
      "oncology",
      "abs",
      "male",
      "luer",
      "lock",
      "cap",
      "pvc",
      "tube",
      "female",
      "and",
      "tpe"
    ]
  },
  {
    "id": "chemotherapy-extension-line-set",
    "title": "Chemotherapy Extension Line Set",
    "code": "VP-ONC-03",
    "category": "oncology",
    "risk": "Class B (India MDR 2017)",
    "desc": "Single-use extension used as part of an infusion or perfusion system for chemotherapy.",
    "keywords": [
      "chemotherapy",
      "extension",
      "line",
      "set",
      "vp-onc-03",
      "oncology",
      "abs",
      "male",
      "luer",
      "lock",
      "cap",
      "pvc",
      "tube",
      "female"
    ]
  },
  {
    "id": "pressure-monitoring-line",
    "title": "Pressure Monitoring Line",
    "code": "VP-CCM-01",
    "category": "critical",
    "risk": "Class B (India MDR 2017)",
    "desc": "High-pressure monitoring and connection between syringe and infusion pump, and channelling fluid for intravenous infusion.",
    "keywords": [
      "pressure",
      "monitoring",
      "line",
      "vp-ccm-01",
      "critical",
      "female",
      "luer",
      "lock",
      "cap",
      "abs",
      "male",
      "pvc",
      "and",
      "ldpe",
      "tube"
    ]
  },
  {
    "id": "disposable-pressure-transducer-kit",
    "title": "Disposable Pressure Transducer Kit",
    "code": "VP-CCM-02",
    "category": "critical",
    "risk": "Class B (India MDR 2017)",
    "desc": "Invasive pressure monitoring as part of a patient monitoring system.",
    "keywords": [
      "disposable",
      "pressure",
      "transducer",
      "kit",
      "vp-ccm-02",
      "critical",
      "endorsed",
      "onto",
      "the",
      "licence",
      "may",
      "2026.",
      "full",
      "material",
      "list",
      "available",
      "request."
    ]
  },
  {
    "id": "cardioplegia-adapters",
    "title": "Cardioplegia Adapters",
    "code": "VP-CAR-01",
    "category": "cardiac",
    "risk": "Class B (India MDR 2017)",
    "desc": "Connect to the ARC or vessel cannulae for delivery of cardioplegia solution or venting of the heart during cardiopulmonary bypass.",
    "keywords": [
      "cardioplegia",
      "adapters",
      "vp-car-01",
      "cardiac",
      "abs",
      "straight",
      "connectors",
      "1/4",
      "3/8",
      "and",
      "1/2",
      "with",
      "luer",
      "lock",
      "step",
      "down"
    ]
  }
];

  /* ─── Site Knowledge Base (100% Live URLs · Zero Dead Links) ─ */
  var SITE_MAP = [
    {
      id: 'home',
      page: 'index.html',
      title: 'Home & Overview',
      icon: '🏠',
      description: 'Precision medical device manufacturing partner — 20+ years, ISO 13485 cleanroom suites in Hyderabad.',
      keywords: ['home', 'main', 'start', 'overview', 'welcome', 'vidhata', 'plastics', 'precision', 'landing', 'introduction', 'hyderabad'],
      weight: 0.9,
      category: 'general'
    },
    {
      id: 'medical',
      page: 'medical.html',
      title: 'Medical Devices & Pharma',
      icon: '🏥',
      description: '26 CDSCO Form MD-5 licensed single-use medical devices & pharmaceutical packaging.',
      keywords: ['medical', 'devices', 'catalog', 'catalogue', 'disposable', 'pharma', 'pharmaceutical', 'packaging', 'infusion', 'dialysis', 'nephrology', 'oncology', 'critical care', 'cardiac', 'closures', 'ophthalmic'],
      weight: 1.3,
      category: 'medical'
    },
    {
      id: 'product',
      page: 'product.html',
      title: 'Product Specifications & TDS',
      icon: '🔬',
      description: 'Interactive technical data sheets, material listings, risk classes, and OEM manufacturing options.',
      keywords: ['product', 'products', 'spec', 'specs', 'specification', 'specifications', 'tds', 'datasheet', 'data sheet', 'download', 'materials', 'risk class', 'shelf life', 'technical details'],
      weight: 1.2,
      category: 'product'
    },
    {
      id: 'virexa',
      page: 'virexa.html',
      title: 'VIREXA Medical Brand',
      icon: '🛡️',
      description: 'Vidhata’s proprietary brand of CDSCO MD-5 licensed sterile single-use devices.',
      keywords: ['virexa', 'brand', 'licensed', 'cdsco', 'md-5', 'md5', 'sterile single use', 'proprietary', 'hospital devices', 'white label', 'private label'],
      weight: 1.3,
      category: 'virexa'
    },
    {
      id: 'contract-mfg',
      page: 'contract-manufacturing.html',
      title: 'Contract Manufacturing & OEM',
      icon: '⚙️',
      description: 'Turnkey OEM/ODM: Cleanroom injection moulding, tooling, assembly, ultrasonic welding, packaging.',
      keywords: ['contract manufacturing', 'contract manufacturer', 'oem', 'odm', 'cleanroom moulding', 'injection moulding', 'turnkey', 'assembly', 'moulding', 'manufacturing partner', 'production'],
      weight: 1.3,
      category: 'services'
    },
    {
      id: 'end-to-end',
      page: 'end-to-end.html',
      title: 'End-to-End 10-Stage Lifecycle',
      icon: '🏭',
      description: 'Ten integrated stages from ideation, 3D CAD, and DFM to tooling, cleanroom moulding, and release.',
      keywords: ['end to end', 'end-to-end', 'lifecycle', '10 stages', 'stages', 'dfm', 'cad', 'solidworks', 'mold flow', 'moldflow', 'tooling', 'tool room', 'prototype', 'sterile packaging'],
      weight: 1.1,
      category: 'infrastructure'
    },
    {
      id: 'walk-the-line',
      page: 'walk-the-line.html',
      title: 'Walk the Line (Facility Tour)',
      icon: '🚶',
      description: 'Interactive 5-checkpoint walkthrough of our cleanroom facility from design to sterile packaging.',
      keywords: ['walk the line', 'walk', 'facility tour', 'tour', 'cleanroom tour', 'virtual tour', 'checkpoints', 'inspection', 'qc lab', 'factory tour', 'maheshwaram campus'],
      weight: 1.2,
      category: 'tour'
    },
    {
      id: 'quality',
      page: 'quality.html',
      title: 'Quality & Certifications',
      icon: '✅',
      description: 'ISO 13485:2016, ISO 9001:2015, CDSCO MD-5 licence, metrology lab, and QMSR compliance.',
      keywords: ['quality', 'certification', 'certifications', 'certified', 'iso', 'iso 13485', 'iso 9001', 'cdsco', 'qmsr', 'ce', 'audit', 'testing', 'inspection', 'metrology', 'mitutoyo'],
      weight: 1.2,
      category: 'quality'
    },
    {
      id: 'markets',
      page: 'markets.html',
      title: 'Markets & Industry Sectors',
      icon: '🌐',
      description: 'MedTech, pharma packaging, consumer electronics, LED lighting, electricals, and automotive.',
      keywords: ['market', 'markets', 'industry', 'industries', 'sector', 'sectors', 'medtech', 'electronics', 'led', 'lighting', 'automotive', 'consumer', 'energy meter', 'appliances'],
      weight: 1.0,
      category: 'industries'
    },
    {
      id: 'about',
      page: 'about.html',
      title: 'About Vidhata & Leadership',
      icon: '🏢',
      description: '20+ years of precision manufacturing, led by K.S. Rao and Vikrant Kandimalla (MS Aerospace).',
      keywords: ['about', 'company', 'history', 'leadership', 'team', 'director', 'founder', 'ks rao', 'vikrant', 'kandimalla', 'mission', 'vision', 'track record', 'background', 'clients', 'partners'],
      weight: 1.0,
      category: 'about'
    },
    {
      id: 'contact',
      page: 'contact.html',
      title: 'Contact & Request Quote',
      icon: '📬',
      description: 'Direct RFQ inquiry form, corporate office in Maheshwaram E-City, and manufacturing unit in Cherlapally.',
      keywords: ['contact', 'quote', 'rfq', 'request quote', 'inquiry', 'enquiry', 'call', 'email', 'phone', 'address', 'location', 'office', 'maheshwaram', 'cherlapally', 'hyderabad', 'reach', 'consultation'],
      weight: 1.2,
      category: 'contact'
    },
    {
      id: 'privacy',
      page: 'privacy.html',
      title: 'Privacy & Terms',
      icon: '🔒',
      description: 'Data protection practices and terms of service.',
      keywords: ['privacy', 'policy', 'terms', 'data protection', 'cookies'],
      weight: 0.6,
      category: 'general'
    }
  ];

  /* ─── Page-Aware Context Chips (12 Live Pages) ─────────────── */
  var PAGE_CHIPS = {
    'index.html': [
      { label: '🏥 Medical Devices (26)', query: 'medical devices' },
      { label: '⚙️ Contract Mfg (OEM)',  query: 'contract manufacturing oem' },
      { label: '🛡️ VIREXA Brand',         query: 'virexa medical brand' },
      { label: '🚶 Walk the Line Tour',    query: 'walk the line facility tour' }
    ],
    'about.html': [
      { label: '⚙️ Contract Mfg',          query: 'contract manufacturing' },
      { label: '🏭 10-Stage Lifecycle',    query: 'end to end lifecycle' },
      { label: '🚶 Cleanroom Tour',        query: 'walk the line tour' },
      { label: '📬 Contact Leadership',    query: 'contact' }
    ],
    'contract-manufacturing.html': [
      { label: '🏥 26 Medical Devices',    query: 'medical devices' },
      { label: '🏭 End-to-End Stages',     query: 'end to end lifecycle' },
      { label: '🚶 Walk the Line',         query: 'walk the line' },
      { label: '📬 Request OEM Quote',     query: 'request quote' }
    ],
    'end-to-end.html': [
      { label: '⚙️ Contract Mfg',          query: 'contract manufacturing' },
      { label: '🚶 Facility Walkthrough',  query: 'walk the line' },
      { label: '✅ ISO 13485 & Quality',   query: 'quality certifications' },
      { label: '📬 Request a Quote',       query: 'contact quote' }
    ],
    'virexa.html': [
      { label: '🏥 Medical Catalog',       query: 'medical devices' },
      { label: '🔬 Product Specs',         query: 'product specs' },
      { label: '📦 Request Samples',       query: 'request sample' },
      { label: '⚙️ OEM Contract Mfg',      query: 'contract manufacturing' }
    ],
    'walk-the-line.html': [
      { label: '🏥 Cleanroom Devices',     query: 'medical devices' },
      { label: '⚙️ Contract Mfg',          query: 'contract manufacturing' },
      { label: '✅ Quality Systems',       query: 'quality certifications' },
      { label: '📬 Schedule Facility Visit',query: 'contact' }
    ],
    'medical.html': [
      { label: '🔬 View Product Specs',    query: 'product specs' },
      { label: '🛡️ VIREXA Brand',         query: 'virexa brand' },
      { label: '📦 Request Samples',       query: 'request sample' },
      { label: '🚶 Walk the Cleanroom Line',query: 'walk the line' }
    ],
    'product.html': [
      { label: '🏥 All 26 Devices',        query: 'medical devices' },
      { label: '📦 Request Sample',        query: 'request sample' },
      { label: '🛡️ VIREXA Brand',         query: 'virexa' },
      { label: '⚙️ Custom Tooling',        query: 'contract manufacturing' }
    ],
    'markets.html': [
      { label: '🏥 MedTech Devices',       query: 'medical devices' },
      { label: '⚙️ Contract Mfg',          query: 'contract manufacturing' },
      { label: '🏭 10-Stage Lifecycle',    query: 'end to end' },
      { label: '📬 Contact Us',            query: 'contact' }
    ],
    'quality.html': [
      { label: '🏥 ISO 13485 Cleanroom',   query: 'cleanroom facility' },
      { label: '🚶 Walk the Line',         query: 'walk the line' },
      { label: '📜 CDSCO MD-5 Licence',    query: 'cdsco license' },
      { label: '📬 Request Audit / Quote', query: 'contact quote' }
    ],
    'contact.html': [
      { label: '🏥 Medical Devices (26)',  query: 'medical devices' },
      { label: '🛡️ VIREXA Brand',         query: 'virexa' },
      { label: '🚶 Walk the Line',         query: 'walk the line' },
      { label: '📦 Request Samples',       query: 'request sample' }
    ],
    'privacy.html': [
      { label: '🏠 Home',                  query: 'home' },
      { label: '🏥 Medical Devices',       query: 'medical devices' },
      { label: '📬 Contact Us',            query: 'contact' }
    ]
  };

  /* ─── Comprehensive FAQ Direct Answers ─────────────────────── */
  var FAQS = [
    {
      type: 'virexa', alwaysTrigger: true,
      patterns: ['virexa', 'what is virexa', 'virexa brand', 'virexa products'],
      answer: "🛡️ VIREXA is Vidhata's proprietary brand of CDSCO Form MD-5 licensed sterile single-use medical devices.\n\nManufactured in our ISO Class 7 and Class 8 cleanroom suites in Hyderabad, the VIREXA portfolio covers sterile infusion therapy sets, haemodialysis blood tubing, chemotherapy delivery systems, and critical care monitoring lines.\n\nWe can supply under VIREXA or manufacture under your brand via OEM contract manufacturing.",
      cardIds: ['virexa', 'medical', 'contract-mfg'],
      chips: [{ label: '🛡️ VIREXA Page', query: 'virexa' }, { label: '🔬 Product Specs', query: 'product specs' }, { label: '📦 Request Sample', query: 'request sample' }]
    },
    {
      type: 'walktheline', alwaysTrigger: true,
      patterns: ['walk the line', 'walktheline', 'facility tour', 'factory tour', 'cleanroom tour', 'virtual tour', 'checkpoints'],
      answer: "🚶 'Walk the Line' is our interactive facility tour! It walks you through all 5 quality checkpoints of our Maheshwaram cleanroom campus:\n\n1. 📐 Design Office & DFM Simulation\n2. 🔧 In-House Tool Room (Makino CNC & Charmilles EDM)\n3. 🔬 Metrology & Quality Control Lab\n4. 🏥 ISO Class 7 & 8 Cleanroom Injection Moulding\n5. 🛡️ Class 7 Assembly, 100% Leak Testing & Packaging",
      cardIds: ['walk-the-line', 'quality', 'contract-mfg'],
      chips: [{ label: '🚶 Walk the Line', query: 'walk the line' }, { label: '✅ Quality Systems', query: 'quality' }, { label: '📬 Schedule Visit', query: 'contact' }]
    },
    {
      type: 'cdsco', alwaysTrigger: true,
      patterns: ['cdsco', 'md-5', 'md5', 'licence', 'license number', 'regulatory approval', 'form md 5', 'mfg md 2026'],
      answer: "📜 Vidhata holds CDSCO Medical Device Manufacturing Licence Form MD-5:\n\n• Licence No: MFG/MD/2026/000078\n• Regulatory Scope: Class A and Class B sterile medical devices\n• Certified Standards: Medical Device Rules 2017 (India) & ISO 13485:2016",
      cardIds: ['quality', 'medical'],
      chips: [{ label: '✅ Quality & Certs', query: 'quality' }, { label: '🏥 Medical Devices', query: 'medical devices' }]
    },
    {
      type: 'cleanroom', alwaysTrigger: true,
      patterns: ['cleanroom', 'clean room', 'class 7', 'class 8', 'cleanroom class', 'hepa', 'iso 14644', 'sq ft cleanroom'],
      answer: "🏥 Cleanroom Infrastructure at Vidhata:\n\n• Total Cleanroom Area: 7,263 sq. ft. (675 m²)\n• Environmental Standards: ISO Class 7 and ISO Class 8 to ISO 14644-1\n• Air Filtration: HEPA filtration (0.3 µm at 99.97% efficiency)\n• Environmental Controls: Positive pressure cascades, continuous bioburden and particle monitoring.",
      cardIds: ['walk-the-line', 'contract-mfg'],
      chips: [{ label: '🚶 Walk the Line', query: 'walk the line' }, { label: '⚙️ Contract Mfg', query: 'contract manufacturing' }]
    },
    {
      type: 'samples', alwaysTrigger: true,
      patterns: ['sample', 'samples', 'evaluation sample', 'request sample', 'test sample', 'product trial', 'clinical sample'],
      answer: "📦 Evaluation Samples Available:\n\nWe supply sterile evaluation samples for all 26 licensed medical devices for qualification, hospital trials, and clinical evaluation.\n\nTo request samples, tell us your required product and destination facility, or reach our medical team directly via WhatsApp or Contact form.",
      cardIds: ['contact', 'medical', 'product'],
      chips: [{ label: '📬 Request Form', query: 'contact' }, { label: '🏥 View 26 Devices', query: 'medical devices' }]
    },
    {
      type: 'specs', alwaysTrigger: true,
      patterns: ['spec', 'specs', 'specification', 'specifications', 'datasheet', 'data sheet', 'tds', 'technical sheet', 'download pdf'],
      answer: "📄 Medical Device Specifications & Technical Data:\n\nEvery product on our Product Viewer features complete specifications:\n• Risk Classification (Class B MDR 2017)\n• Sterility assurance & shelf life (3 years)\n• Principal medical polymers (PP, PVC, ABS, LDPE, silicone)\n• Packaging configurations and OEM options.",
      cardIds: ['product', 'medical'],
      chips: [{ label: '🔬 Product Specs', query: 'product' }, { label: '🛡️ VIREXA Brand', query: 'virexa' }]
    },
    {
      type: 'oem', alwaysTrigger: true,
      patterns: ['oem', 'odm', 'contract manufacturing', 'contract manufacture', 'private label', 'white label', 'custom brand'],
      answer: "⚙️ OEM & ODM Contract Manufacturing Capabilities:\n\n• Turnkey Device Manufacturing: Mould design, tooling, moulding, assembly, sterilization, and release.\n• Flexible Branding: Supplied under our VIREXA brand, or contract manufactured under your brand under our CDSCO licence or your own licence.\n• Cleanroom Operations: ISO Class 7 & 8 certified facilities in Hyderabad.",
      cardIds: ['contract-mfg', 'end-to-end'],
      chips: [{ label: '⚙️ Contract Mfg', query: 'contract manufacturing' }, { label: '🏭 10-Stage Lifecycle', query: 'end to end' }, { label: '📬 Request OEM RFQ', query: 'contact quote' }]
    },
    {
      type: 'location', alwaysTrigger: true,
      patterns: ['location', 'address', 'where', 'situated', 'based', 'headquarter', 'office', 'city', 'telangana', 'rangareddy', 'maheshwaram', 'cherlapally', 'ecity', 'directions', 'map'],
      answer: "📍 Vidhata Plastics Facilities in Hyderabad:\n\n🏢 Corporate Office & Cleanroom Campus:\nUnit 2 – E-City, Maheshwaram\nRangareddy, Telangana – 501359\n\n🏭 Manufacturing Unit:\nPhase-II, IDA Cherlapally, Hyderabad",
      cardIds: ['contact'],
      chips: [{ label: '📬 Contact Page', query: 'contact' }]
    },
    {
      type: 'phone', alwaysTrigger: true,
      patterns: ['phone', 'call', 'number', 'mobile', 'telephone', 'dial', 'helpline', 'contact number'],
      answer: "📞 Direct Contact Lines:\n\n• Arvind Kandi: +91 80088 01778\n• Vikrant Kandimalla (Director): +91 98851 00808\n\nYou can also tap the WhatsApp button above to chat instantly.",
      cardIds: ['contact'],
      chips: [{ label: '📬 Contact Page', query: 'contact' }]
    },
    {
      type: 'email', alwaysTrigger: true,
      patterns: ['email', 'mail', 'email id', 'email address', 'send message', 'write to'],
      answer: "📧 Email Us Directly:\n\n• arvind.kandi7@gmail.com (Arvind Kandi)\n• vikrant@vidhata.co.in (Vikrant Kandimalla, Director)\n• info@vidhata.co.in (General Enquiries)\n\nWe typically respond within one business day.",
      cardIds: ['contact'],
      chips: [{ label: '📬 Contact Page', query: 'contact' }]
    },
    {
      type: 'timing', alwaysTrigger: true,
      patterns: ['timing', 'working hours', 'office hours', 'available', 'when can', 'open hours', 'business hours'],
      answer: "🕒 Office & Facility Hours:\n\nMonday – Saturday: 9:00 AM – 6:00 PM IST\n\nFor urgent inquiries, WhatsApp or email us anytime — our team responds promptly.",
      cardIds: ['contact'],
      chips: [{ label: '📬 Contact Us', query: 'contact' }]
    },
    {
      type: 'experience',
      patterns: ['experience', 'years', 'founded', 'established', 'since', 'history', 'started', 'how long', 'old'],
      answer: "🏭 20+ Years of Manufacturing Leadership:\n\nFounded and managed by:\n• K.S. Rao — Managing Director, 30+ years in plastics engineering\n• Vikrant Kandimalla — Director, MS Aerospace Engineering (Embry-Riddle University, USA)",
      cardIds: ['about'],
      chips: [{ label: '🏢 About Us', query: 'about' }, { label: '⚙️ Contract Mfg', query: 'contract manufacturing' }]
    },
    {
      type: 'certifications',
      patterns: ['certification', 'certified', 'accredited', 'standard', 'compliance', 'certificate', 'accreditation'],
      answer: "✅ Certified Quality Systems at Vidhata:\n\n• ISO 13485:2016 — Medical Device Quality Management\n• ISO 9001:2015 — Quality Management System\n• CDSCO MD-5 Licence: MFG/MD/2026/000078\n• CE Compliance & QMSR Guidelines\n• In-house metrology testing lab",
      cardIds: ['quality', 'medical'],
      chips: [{ label: '✅ Quality Details', query: 'quality' }, { label: '🏥 Medical Devices', query: 'medical' }]
    },
    {
      type: 'capacity',
      patterns: ['capacity', 'moulds', 'molds', 'how many', 'volume', 'scale', 'minimum order', 'moq', 'output', 'throughput', 'production volume', 'tonnage', 'machines'],
      answer: "📊 Manufacturing Scale & Infrastructure:\n\n• 400+ injection moulds designed & cut in-house\n• 200M+ plastic components produced\n• 5,000 MT raw polymers processed / year\n• Injection moulding machines: 120T – 250T Haitian precision machines\n• 7,263 sq. ft. ISO Class 7 and Class 8 cleanrooms",
      cardIds: ['contract-mfg', 'end-to-end', 'walk-the-line'],
      chips: [{ label: '⚙️ Contract Mfg', query: 'contract manufacturing' }, { label: '🚶 Walk the Line', query: 'walk the line' }]
    }
  ];

  /* ─── Response Templates by Category ──────────────────────── */
  var RESPONSES = {
    greeting: [
      "👋 Hello! Welcome to Vidhata Life. I'm your AI Medical & Facility Assistant. How can I assist you with our medical devices, cleanroom manufacturing, or CDSCO licensing today?",
      "Hi there! 👋 I can help you search our 26 licensed medical devices, view product specs, explore our ISO Class 7/8 cleanroom, or request a quote. What are you looking for?",
      "Welcome to Vidhata Life! 🏥 20+ years of precision manufacturing, certified cleanroom suites, and proprietary VIREXA medical devices. How can I help you today? 😊"
    ],
    thanks: [
      "You're very welcome! 😊 Feel free to ask if you need technical specs, sample requests, or quote assistance.",
      "Glad I could help! Would you like to view our product catalog or schedule a facility tour? 👍",
      "Happy to assist! Let me know if you have any questions about our medical devices or cleanroom manufacturing. 🌟"
    ],
    fallback: [
      "I didn't find an exact match, but here are the key sections of our medical and manufacturing platform:",
      "Let me guide you to our primary sections — I'm sure one of these will help:",
      "I'm here to assist! Explore our core medical catalog and manufacturing facilities below:"
    ],
    medical: "🏥 Vidhata operates an ISO 13485 cleanroom facility manufacturing 26 CDSCO-licensed single-use medical devices across 6 disciplines:",
    product: "🔬 Complete technical data sheets, polymer materials (PP, PVC, ABS), and risk classifications are available for all 26 devices:",
    virexa: "🛡️ VIREXA is Vidhata's proprietary brand of CDSCO MD-5 licensed sterile single-use medical devices, supplied directly or as OEM:",
    services: "⚙️ Vidhata provides turnkey contract manufacturing — from 3D CAD modeling and toolroom fabrication to cleanroom moulding and assembly:",
    infrastructure: "🏭 Our 10-stage lifecycle covers product ideation, DFM, mold flow, tooling, cleanroom moulding, sterilization, and release:",
    tour: "🚶 Explore our cleanroom facility tour across all 5 quality checkpoints from design to sterile packaging:",
    quality: "✅ Quality is built into every cycle. We operate under ISO 13485:2016, ISO 9001:2015, and CDSCO Form MD-5 licence:",
    industries: "🌐 Beyond MedTech, Vidhata manufactures precision components for pharma packaging, electronics, automotive, and consumer goods:",
    about: "🏢 Vidhata Plastics brings 20+ years of engineering leadership, led by K.S. Rao and Vikrant Kandimalla (MS Aerospace Engineering):",
    contact: "📬 Ready to start a project, request evaluation samples, or schedule a facility audit? Our medical team is at your service:",
    general: "Here are the most relevant sections I found for you:",
    default: "Here are the most relevant sections I found for you:"
  };

  /* ─── Follow-up Chips by Category ─────────────────────────── */
  var FOLLOW_UP = {
    medical: [
      { label: '🔬 View Product Specs', query: 'product specs' },
      { label: '🛡️ VIREXA Brand',       query: 'virexa brand' },
      { label: '📦 Request Samples',     query: 'request sample' }
    ],
    product: [
      { label: '🏥 All 26 Devices',      query: 'medical devices' },
      { label: '📦 Request Sample',      query: 'request sample' },
      { label: '⚙️ OEM Contract Mfg',    query: 'contract manufacturing' }
    ],
    virexa: [
      { label: '🏥 Medical Devices',     query: 'medical devices' },
      { label: '🔬 Product Specs',       query: 'product specs' },
      { label: '📦 Request Samples',     query: 'request sample' }
    ],
    services: [
      { label: '🏥 26 Medical Devices',  query: 'medical devices' },
      { label: '🚶 Walk the Line',       query: 'walk the line' },
      { label: '📬 Request a Quote',     query: 'contact quote' }
    ],
    infrastructure: [
      { label: '⚙️ Contract Mfg',        query: 'contract manufacturing' },
      { label: '🚶 Facility Tour',       query: 'walk the line' },
      { label: '✅ Quality Systems',     query: 'quality' }
    ],
    tour: [
      { label: '🏥 Cleanroom Devices',   query: 'medical devices' },
      { label: '⚙️ Contract Mfg',        query: 'contract manufacturing' },
      { label: '📬 Schedule Visit',      query: 'contact' }
    ],
    quality: [
      { label: '🏥 ISO 13485 Cleanroom', query: 'cleanroom' },
      { label: '📜 CDSCO MD-5 Licence',  query: 'cdsco license' },
      { label: '📬 Request Audit',       query: 'contact' }
    ],
    industries: [
      { label: '🏥 Medical Sector',      query: 'medical devices' },
      { label: '⚙️ Contract Mfg',        query: 'contract manufacturing' },
      { label: '📬 Contact Us',          query: 'contact' }
    ],
    about: [
      { label: '⚙️ Contract Mfg',        query: 'contract manufacturing' },
      { label: '🚶 Walk the Line',       query: 'walk the line' },
      { label: '📬 Contact Us',          query: 'contact' }
    ],
    contact: [
      { label: '🏥 Medical Devices',     query: 'medical devices' },
      { label: '🛡️ VIREXA Brand',       query: 'virexa' },
      { label: '📦 Request Samples',     query: 'request sample' }
    ]
  };

  /* ─── State ────────────────────────────────────────────────── */
  var isOpen       = false;
  var hasGreeted   = false;
  var typingTimer  = null;
  var lastQuery    = '';
  var msgCounter   = 0;
  var messageStore = [];

  /* ─── Storage ──────────────────────────────────────────────── */
  function saveHistory() {
    try {
      localStorage.setItem(CFG.storageKey, JSON.stringify({
        ts      : Date.now(),
        greeted : hasGreeted,
        msgs    : messageStore.slice(-CFG.maxHistory)
      }));
    } catch (e) {}
  }

  function loadHistory() {
    try {
      var raw = localStorage.getItem(CFG.storageKey);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (Date.now() - data.ts > CFG.maxAgeMs) {
        localStorage.removeItem(CFG.storageKey);
        return null;
      }
      return data;
    } catch (e) { return null; }
  }

  function clearHistory() {
    try {
      localStorage.removeItem(CFG.storageKey);
    } catch (e) {}
    messageStore = [];
    hasGreeted = false;
  }

  /* ─── Analytics ────────────────────────────────────────────── */
  function track(eventName, params) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', eventName, Object.assign({ event_category: 'chatbot' }, params || {}));
      }
    } catch (e) {}
  }

  /* ─── Text Helpers ─────────────────────────────────────────── */
  function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function norm(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokenize(text) {
    return norm(text).split(' ').filter(function (t) { return t.length > 1; });
  }

  function isGreeting(text) {
    var greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'namaste', 'hiya', 'sup'];
    var n = norm(text);
    return greetings.some(function (g) { return n === g || n.startsWith(g + ' ') || n.endsWith(' ' + g); });
  }

  function isThanks(text) {
    var words = ['thank', 'thanks', 'thankyou', 'thx', 'ty', 'great', 'awesome', 'perfect', 'brilliant', 'excellent', 'helpful', 'nice'];
    var n = norm(text);
    return words.some(function (w) { return n === w || n.includes(w); });
  }

  function isBotQuery(text) {
    var n = norm(text);
    return n.includes('who are you') || (n.includes('you') && n.includes('bot')) || n.includes('assistant') || n === 'what are you';
  }

  function currentPage() {
    var path = window.location.pathname.replace(/\/$/, '');
    var file = path.split('/').pop() || 'index.html';
    var clean = file.split('?')[0].split('#')[0];
    if (clean && !clean.includes('.')) {
      clean += '.html';
    }
    return clean;
  }

  function pageChips() {
    return PAGE_CHIPS[currentPage()] || PAGE_CHIPS['index.html'];
  }

  /* ─── Smooth Navigation ────────────────────────────────────── */
  function navigateToSection(href) {
    var parts = href.split('#');
    if (parts.length < 2 || !parts[1]) return false;
    var anchor = parts[1];
    var tPage  = parts[0];
    var cPage  = currentPage();
    if (tPage !== cPage) return false;
    var target = document.getElementById(anchor);
    if (!target) return false;
    closeChatPanel();
    setTimeout(function () {
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 20, behavior: 'smooth' });
    }, 220);
    return true;
  }

  /* ─── Medical Products Search Matcher ──────────────────────── */
  function searchMedicalProducts(query) {
    var qNorm = norm(query);
    var tokens = tokenize(query);
    if (!tokens.length) return [];

    // Filter out common filler words
    var stopWords = ['the', 'and', 'for', 'with', 'what', 'can', 'you', 'make', 'have', 'show', 'tell', 'about', 'need', 'want', 'where', 'are', 'your', 'any'];
    var keyTokens = tokens.filter(function (t) { return stopWords.indexOf(t) < 0; });
    if (!keyTokens.length) return [];

    var scored = MEDICAL_PRODUCTS_INDEX.map(function (prod) {
      var score = 0;
      var titleNorm = prod.title.toLowerCase();
      var codeNorm  = prod.code.toLowerCase();

      // Exact title match or code match
      if (titleNorm.includes(qNorm) || qNorm.includes(titleNorm)) score += 15;
      if (qNorm.includes(codeNorm)) score += 20;

      keyTokens.forEach(function (token) {
        if (codeNorm.includes(token)) score += 10;
        if (titleNorm.includes(token)) score += 6;
        if (prod.category.includes(token)) score += 4;
        prod.keywords.forEach(function (kw) {
          if (kw === token) score += 3;
          else if (kw.length >= 4 && (kw.includes(token) || token.includes(kw))) score += 1.5;
        });
      });

      return { product: prod, score: score };
    });

    return scored
      .filter(function (item) { return item.score >= 5; })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (item) { return item.product; });
  }

  /* ─── Intent Scoring (Pages) ───────────────────────────────── */
  function scorePages(query) {
    var tokens = tokenize(query);
    if (!tokens.length) return [];
    var scored = SITE_MAP.map(function (page) {
      var score = 0;
      tokens.forEach(function (token) {
        page.keywords.forEach(function (kw) {
          if (kw === token) score += 3;
          else if (kw.indexOf(' ') < 0 && kw.includes(token) && token.length >= 3) score += 1.5;
          else if (token.includes(kw) && kw.length >= 3) score += 1;
        });
      });
      return Object.assign({}, page, { score: score * (page.weight || 1) });
    });
    return scored.filter(function (p) { return p.score > 0; }).sort(function (a, b) { return b.score - a.score; });
  }

  function dominantCategory(matches) {
    return matches.length ? (matches[0].category || 'default') : 'default';
  }

  /* ─── FAQ Matcher ──────────────────────────────────────────── */
  function checkFAQ(query) {
    var n = norm(query);
    var tokens = tokenize(query);
    var topScore = -1;

    for (var i = 0; i < FAQS.length; i++) {
      var faq = FAQS[i];
      var matched = faq.patterns.some(function (p) {
        return p.indexOf(' ') >= 0 ? n.includes(p) : tokens.indexOf(p) >= 0 || n === p;
      });
      if (!matched) continue;

      if (faq.alwaysTrigger) return faq;

      if (topScore < 0) {
        var pm = scorePages(query);
        topScore = pm.length ? pm[0].score : 0;
      }
      if (topScore < 6) return faq;
    }
    return null;
  }

  /* ─── DOM Helpers ──────────────────────────────────────────── */
  function el(tag, cls, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  function qs(id) { return document.getElementById(id); }

  function pageById(id) {
    for (var i = 0; i < SITE_MAP.length; i++) {
      if (SITE_MAP[i].id === id) return SITE_MAP[i];
    }
    return null;
  }

  /* ─── Build Page Card ──────────────────────────────────────── */
  function buildPageCard(page) {
    var card = el('a', 'vp-chat-card', { href: page.page, 'data-vpid': page.id });
    card.innerHTML =
      '<div class="vp-chat-card__icon">' + page.icon + '</div>' +
      '<div class="vp-chat-card__body">' +
        '<div class="vp-chat-card__title">' + page.title + '</div>' +
        '<div class="vp-chat-card__desc">' + page.description + '</div>' +
      '</div>' +
      '<div class="vp-chat-card__arrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
      '</div>';
    card.addEventListener('click', function (e) {
      track('chatbot_card_click', { page_id: page.id, page_title: page.title, source_query: lastQuery });
      if (navigateToSection(page.page)) { e.preventDefault(); }
      else { closeChatPanel(); }
    });
    return card;
  }

  /* ─── Build Product Card ───────────────────────────────────── */
  function buildProductCard(prod) {
    var link = 'product.html?id=' + encodeURIComponent(prod.id);
    var card = el('a', 'vp-chat-card vp-chat-card--product', { href: link, 'data-prodid': prod.id });
    card.innerHTML =
      '<div class="vp-chat-card__icon">🔬</div>' +
      '<div class="vp-chat-card__body">' +
        '<div class="vp-chat-card__badge">' + prod.code + ' · ' + (prod.risk || 'Class B') + '</div>' +
        '<div class="vp-chat-card__title">' + prod.title + '</div>' +
        '<div class="vp-chat-card__desc">' + prod.desc + '</div>' +
      '</div>' +
      '<div class="vp-chat-card__arrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
      '</div>';
    card.addEventListener('click', function () {
      track('chatbot_product_card_click', { product_id: prod.id, product_code: prod.code, source_query: lastQuery });
      closeChatPanel();
    });
    return card;
  }

  /* ─── Build Chip ───────────────────────────────────────────── */
  function buildChip(chip) {
    var btn = el('button', 'vp-chat-chip');
    btn.textContent = chip.label;
    btn.addEventListener('click', function () {
      track('chatbot_chip_click', { chip_label: chip.label, chip_query: chip.query });
      handleUserMessage(chip.query, chip.label);
    });
    return btn;
  }

  /* ─── Feedback Widget ──────────────────────────────────────── */
  function buildFeedback(mid) {
    var wrap = el('div', 'vp-chat-feedback', { 'data-mid': mid });
    wrap.innerHTML =
      '<span class="vp-chat-fb-label">Helpful?</span>' +
      '<button class="vp-chat-fb-btn" data-vote="up"   title="Yes, helpful">👍</button>' +
      '<button class="vp-chat-fb-btn" data-vote="down" title="Not helpful">👎</button>';

    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-vote]');
      if (!btn || wrap.classList.contains('vp-chat-feedback--voted')) return;
      var vote = btn.getAttribute('data-vote');
      wrap.classList.add('vp-chat-feedback--voted');
      wrap.innerHTML =
        '<span class="vp-chat-fb-label vp-chat-fb-thanks">' +
          (vote === 'up' ? '✓ Thanks for the feedback!' : '✓ We\'ll improve. Thanks!') +
        '</span>';
      track('chatbot_feedback', { vote: vote, context_query: lastQuery });
    });
    return wrap;
  }

  /* ─── Messages ─────────────────────────────────────────────── */
  function addBotMessage(text, cards, opts) {
    opts = opts || {};
    var id   = 'vp-msg-' + (++msgCounter);
    var msgs = qs('vp-chat-messages');
    if (!msgs) return;
    var row  = el('div', 'vp-chat-msg vp-chat-msg--bot', { id: id });

    var avatar = el('div', 'vp-chat-msg__avatar');
    avatar.textContent = 'V';

    var body   = el('div', 'vp-chat-msg__body');
    var bubble = el('div', 'vp-chat-msg__bubble' + (opts.faq ? ' vp-chat-msg__bubble--faq' : ''));
    bubble.textContent = text;
    body.appendChild(bubble);

    if (cards && cards.length) {
      var cw = el('div', 'vp-chat-cards');
      cards.forEach(function (c) {
        if (c.code) {
          cw.appendChild(buildProductCard(c));
        } else {
          cw.appendChild(buildPageCard(c));
        }
      });
      body.appendChild(cw);
    }

    if (!opts.restore) {
      body.appendChild(buildFeedback(id));
    }

    row.appendChild(avatar);
    row.appendChild(body);
    msgs.appendChild(row);
    scrollDown();

    if (!opts.restore) {
      messageStore.push({
        role    : 'bot',
        text    : text,
        cards   : cards ? cards.map(function (c) { return c.code ? { type: 'product', id: c.id } : { type: 'page', id: c.id }; }) : [],
        ts      : Date.now()
      });
      saveHistory();
    }
  }

  function addUserMessage(text, skipSave) {
    var msgs = qs('vp-chat-messages');
    if (!msgs) return;
    var row  = el('div', 'vp-chat-msg vp-chat-msg--user');
    var bbl  = el('div', 'vp-chat-msg__bubble');
    bbl.textContent = text;
    row.appendChild(bbl);
    msgs.appendChild(row);
    scrollDown();
    if (!skipSave) {
      messageStore.push({ role: 'user', text: text, ts: Date.now() });
      saveHistory();
    }
  }

  /* ─── Typing Indicator ─────────────────────────────────────── */
  function showTyping() {
    removeTyping();
    var msgs = qs('vp-chat-messages');
    if (!msgs) return;
    var row  = el('div', 'vp-chat-msg vp-chat-msg--bot', { id: 'vp-typing' });
    row.innerHTML =
      '<div class="vp-chat-msg__avatar">V</div>' +
      '<div class="vp-chat-msg__body">' +
        '<div class="vp-chat-typing-dots"><span></span><span></span><span></span></div>' +
      '</div>';
    msgs.appendChild(row);
    scrollDown();
  }

  function removeTyping() {
    var t = qs('vp-typing');
    if (t) t.remove();
  }

  /* ─── Chips ────────────────────────────────────────────────── */
  function setChips(chips) {
    var el2 = qs('vp-chat-chips');
    if (!el2) return;
    el2.innerHTML = '';
    (chips || []).forEach(function (c) { el2.appendChild(buildChip(c)); });
  }

  function clearChips() {
    var el2 = qs('vp-chat-chips');
    if (el2) el2.innerHTML = '';
  }

  function scrollDown() {
    var m = qs('vp-chat-messages');
    if (m) requestAnimationFrame(function () { m.scrollTop = m.scrollHeight; });
  }

  /* ─── Response Generator ───────────────────────────────────── */
  function generateResponse(query) {
    // 1. Conversational shortcuts
    if (isGreeting(query)) {
      return { text: randomFrom(RESPONSES.greeting), cards: [], chips: pageChips(), faq: false };
    }
    if (isThanks(query)) {
      return { text: randomFrom(RESPONSES.thanks), cards: [], chips: pageChips(), faq: false };
    }
    if (isBotQuery(query)) {
      return {
        text: "I'm the Vidhata AI Assistant! 🤖 I help healthcare and procurement teams navigate our 26 licensed medical devices, technical specifications, cleanroom manufacturing, and CDSCO licensing. How can I assist you?",
        cards: [],
        chips: pageChips(),
        faq: false
      };
    }

    // 2. FAQ direct answer (Always triggered FAQs take priority over generic token search)
    var faq = checkFAQ(query);
    if (faq) {
      var faqCards = (faq.cardIds || []).map(pageById).filter(Boolean);
      track('chatbot_faq_match', { faq_type: faq.type, query: query });
      return { text: faq.answer, cards: faqCards, chips: faq.chips || pageChips(), faq: true };
    }

    // 3. Direct Medical Products Search
    var productMatches = searchMedicalProducts(query);
    if (productMatches.length > 0) {
      var topProducts = productMatches.slice(0, 3);
      track('chatbot_product_search_match', { query: query, match_count: topProducts.length });
      var pText = "🔬 Here are the CDSCO Form MD-5 licensed medical devices matching your enquiry (" + topProducts.length + " found):";
      var pChips = [
        { label: '📦 Request Sample', query: 'request sample' },
        { label: '🏥 All 26 Devices', query: 'medical devices' },
        { label: '📬 Get a Quote',    query: 'contact quote' }
      ];
      return { text: pText, cards: topProducts, chips: pChips, faq: false };
    }

    // 4. Intent-matching site pages
    var matches = scorePages(query);
    var top3    = matches.slice(0, 3);

    if (!top3.length) {
      return {
        text: randomFrom(RESPONSES.fallback),
        cards: [pageById('medical'), pageById('contract-mfg'), pageById('contact')].filter(Boolean),
        chips: pageChips(),
        faq: false
      };
    }

    var cat     = dominantCategory(top3);
    var resText = RESPONSES[cat] || RESPONSES.default;
    var chips   = FOLLOW_UP[cat] || pageChips().slice(0, 3);
    return { text: resText, cards: top3, chips: chips, faq: false };
  }

  /* ─── Handle User Message ──────────────────────────────────── */
  function handleUserMessage(query, displayText) {
    var label = displayText || query;
    lastQuery = query;

    addUserMessage(label);
    clearChips();
    showTyping();

    track('chatbot_query', { query_text: query, display_text: label, page: currentPage() });

    if (typingTimer) clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      removeTyping();
      var resp = generateResponse(query);
      addBotMessage(resp.text, resp.cards, { faq: resp.faq });
      if (resp.chips && resp.chips.length) setChips(resp.chips);
    }, 550 + Math.random() * 350);
  }

  /* ─── Restore History ──────────────────────────────────────── */
  function restoreHistory(msgs) {
    msgs.forEach(function (msg) {
      if (msg.role === 'user') {
        addUserMessage(msg.text, true);
      } else {
        var cards = [];
        if (msg.cards && msg.cards.length) {
          msg.cards.forEach(function (ref) {
            if (ref.type === 'product') {
              var p = MEDICAL_PRODUCTS_INDEX.find(function (item) { return item.id === ref.id; });
              if (p) cards.push(p);
            } else {
              var pg = pageById(ref.id);
              if (pg) cards.push(pg);
            }
          });
        } else if (msg.cardIds && msg.cardIds.length) {
          cards = msg.cardIds.map(pageById).filter(Boolean);
        }
        addBotMessage(msg.text, cards, { restore: true });
      }
    });
    messageStore = msgs.slice();
  }

  /* ─── Reset Conversation ───────────────────────────────────── */
  function resetConversation() {
    clearHistory();
    var msgs = qs('vp-chat-messages');
    if (msgs) msgs.innerHTML = '';
    clearChips();
    hasGreeted = true;
    addBotMessage("👋 Conversation reset. I'm ready to assist you!\n\nExplore our 26 licensed medical devices, cleanroom manufacturing, or CDSCO licensing. What would you like to know?");
    setChips(pageChips());
    track('chatbot_reset', { page: currentPage() });
  }

  /* ─── Open / Close ─────────────────────────────────────────── */
  function openChatPanel() {
    isOpen = true;
    var panel  = qs('vp-chat-panel');
    var toggle = qs('vp-chat-toggle');
    var badge  = qs('vp-chat-badge');

    if (!panel || !toggle) return;

    panel.classList.add('vp-chat-panel--open');
    panel.setAttribute('aria-hidden', 'false');
    toggle.classList.add('vp-chat-toggle--open');
    toggle.setAttribute('aria-expanded', 'true');
    setIcon(true);
    if (badge) badge.style.display = 'none';

    track('chatbot_open', { page: currentPage() });

    setTimeout(function () { var inp = qs('vp-chat-input'); if (inp) inp.focus(); }, 350);

    if (!hasGreeted) {
      hasGreeted = true;
      setTimeout(function () {
        addBotMessage("👋 Hi! I'm Vidhata Life's AI Assistant.\n\nI can help you explore our 26 CDSCO-licensed medical devices, technical specifications, cleanroom manufacturing, and OEM capabilities.\n\nWhat are you looking for today?");
        setChips(pageChips());
      }, 400);
    } else {
      setChips(pageChips());
    }
  }

  function closeChatPanel() {
    isOpen = false;
    var panel  = qs('vp-chat-panel');
    var toggle = qs('vp-chat-toggle');
    if (panel) {
      panel.classList.remove('vp-chat-panel--open');
      panel.setAttribute('aria-hidden', 'true');
    }
    if (toggle) {
      toggle.classList.remove('vp-chat-toggle--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    setIcon(false);
    if (typingTimer) { clearTimeout(typingTimer); removeTyping(); }
  }

  function setIcon(open) {
    var wrap = qs('vp-chat-toggle') && qs('vp-chat-toggle').querySelector('.vp-chat-toggle__icon');
    if (!wrap) return;
    wrap.innerHTML = open
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  }

  /* ─── Build Widget DOM ─────────────────────────────────────── */
  function buildWidget() {
    /* Toggle Button */
    var toggle = el('button', 'vp-chat-toggle', {
      id              : 'vp-chat-toggle',
      'aria-label'    : 'Open Vidhata AI Assistant',
      'aria-expanded' : 'false',
      'aria-controls' : 'vp-chat-panel'
    });
    toggle.innerHTML =
      '<div class="vp-chat-toggle__icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      '</div>' +
      '<span class="vp-chat-badge" id="vp-chat-badge">1</span>';

    /* Chat Panel */
    var panel = el('div', 'vp-chat-panel', {
      id           : 'vp-chat-panel',
      'aria-hidden': 'true',
      role         : 'dialog',
      'aria-label' : 'Vidhata AI Assistant',
      'aria-modal' : 'false'
    });

    panel.innerHTML =
      /* Header */
      '<div class="vp-chat-header">' +
        '<div class="vp-chat-header__info">' +
          '<div class="vp-chat-avatar-wrap">' +
            '<div class="vp-chat-avatar">V</div>' +
            '<span class="vp-status-dot"></span>' +
          '</div>' +
          '<div class="vp-chat-header__text">' +
            '<div class="vp-chat-header__name">Vidhata Assistant</div>' +
            '<div class="vp-chat-header__sub"><span class="vp-online-indicator"></span> Medical & Facility AI</div>' +
          '</div>' +
        '</div>' +
        '<div class="vp-chat-header__actions">' +
          '<button class="vp-chat-action-btn" id="vp-chat-reset" title="Restart conversation" aria-label="Restart conversation">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
          '</button>' +
          '<button class="vp-chat-close" id="vp-chat-close" aria-label="Close chat">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +

      /* Quick-dial bar (WhatsApp + Phone) */
      '<div class="vp-chat-quickdial">' +
        '<a class="vp-chat-qd-btn vp-chat-qd-btn--phone" href="tel:' + CFG.phone + '" id="vp-qd-call" aria-label="Call Vidhata">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72A16 16 0 0 0 15.28 16l.97-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
          '<span>' + CFG.phoneLabel + '</span>' +
        '</a>' +
        '<a class="vp-chat-qd-btn vp-chat-qd-btn--wa" href="' + CFG.whatsapp + '" target="_blank" rel="noopener" id="vp-qd-wa" aria-label="WhatsApp Vidhata">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>' +
          '<span>WhatsApp</span>' +
        '</a>' +
      '</div>' +

      /* Messages */
      '<div class="vp-chat-messages" id="vp-chat-messages" role="log" aria-live="polite" aria-label="Chat messages"></div>' +

      /* Chips */
      '<div class="vp-chat-chips-wrap"><div class="vp-chat-chips" id="vp-chat-chips"></div></div>' +

      /* Footer / Input */
      '<div class="vp-chat-footer">' +
        '<div class="vp-chat-input-wrap">' +
          '<input type="text" id="vp-chat-input" class="vp-chat-input" placeholder="Search 26 devices, cleanroom specs, or ask anything…" autocomplete="off" maxlength="200" aria-label="Type your message" />' +
          '<button class="vp-chat-send" id="vp-chat-send" aria-label="Send message">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="vp-chat-brand">Powered by Vidhata Medical AI</div>' +
      '</div>';

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    /* ── Wire Up Events ── */
    toggle.addEventListener('click', function (e) {
      if (e) e.stopPropagation();
      isOpen ? closeChatPanel() : openChatPanel();
    });
    panel.addEventListener('click', function (e) {
      if (e) e.stopPropagation();
    });
    qs('vp-chat-close').addEventListener('click', function (e) {
      if (e) e.stopPropagation();
      closeChatPanel();
    });
    qs('vp-chat-reset').addEventListener('click', function (e) {
      if (e) e.stopPropagation();
      resetConversation();
    });

    qs('vp-qd-call').addEventListener('click', function () {
      track('chatbot_quickdial', { type: 'phone', page: currentPage() });
    });
    qs('vp-qd-wa').addEventListener('click', function () {
      track('chatbot_quickdial', { type: 'whatsapp', page: currentPage() });
    });

    var input   = qs('vp-chat-input');
    var sendBtn = qs('vp-chat-send');

    function send() {
      var val = input.value.trim();
      if (!val) return;
      input.value = '';
      handleUserMessage(val);
    }

    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });

    document.addEventListener('click', function (e) {
      if (isOpen && !panel.contains(e.target) && !toggle.contains(e.target)) closeChatPanel();
    });

    setTimeout(function () {
      var badge = qs('vp-chat-badge');
      if (badge && !hasGreeted) {
        badge.style.display   = 'flex';
        badge.style.animation = 'vp-bounce-in 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      }
    }, 3000);
  }

  /* ─── Init ─────────────────────────────────────────────────── */
  function init() {
    if (qs('vp-chat-toggle')) return;
    buildWidget();

    var stored = loadHistory();
    if (stored && stored.msgs && stored.msgs.length > 0) {
      hasGreeted = true;
      restoreHistory(stored.msgs);
      setChips(pageChips());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
