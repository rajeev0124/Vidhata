/* =========================================================
   VIDHATA PLASTICS — MEDICAL & PHARMA PRODUCTS CATALOG HANDLER
   CDSCO Form MD-5 Licence: MFG/MD/2026/000078
   js/medical-products.js
   ========================================================= */

'use strict';

// ── Medical Products Database (Exact 26 Licensed Devices) ──
const MEDICAL_PRODUCTS = [
  {
    "id": "infusion-intravenous-set-non-vented",
    "title": "Infusion (Intravenous) Set Non-Vented",
    "productCode": "VP-INF-01",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/Infusion set non vented.jpg",
    "description": "Administration of fluids from a container into the patient's vascular system through a vascular access device.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Engineered for gravity fluid administration from collapsible plastic containers without external air venting.",
      "Sharp non-vented spike ensures easy penetration of bottle stoppers with zero coring risk.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · n · o · n · - · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D · P · E ·  · c · a · p ·  ·  ·  ·  · P · P ·  · a · n · d ·  · s · t · a · i · n · l · e · s · s ·  · n · e · e · d · l · e ·  · s · e · t ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · n · o · n · - · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D · P · E ·  · c · a · p ·  ·  ·  ·  · P · P ·  · a · n · d ·  · s · t · a · i · n · l · e · s · s ·  · n · e · e · d · l · e ·  · s · e · t ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "infusion-intravenous-set-vented",
    "title": "Infusion (Intravenous) Set Vented",
    "productCode": "VP-INF-02",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/Infusion Set Vented.jpg",
    "description": "Administration of fluids from a container into the patient's vascular system through a vascular access device.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Integrated hydrophobic antibacterial air vent filter allows continuous gravity delivery from rigid glass or semi-rigid bottles.",
      "Precision drip chamber equipped with 15-20 µm fluid filter to prevent particulate infusion.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D · P · E ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D · P · E ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "premium-infusion-set",
    "title": "Premium Infusion Set",
    "productCode": "VP-INF-03",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/Premium Based Infusion Set.jpg",
    "description": "Intravenous administration of IV fluids into the vascular system through a vascular access device.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Premium 16 mm clear drip chamber with high-flow micro-dropper orifice calibrated to 20 drops/ml.",
      "Equipped with needle-free injection Y-site and smooth tactile roller clamp for micro-adjustments.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · i · l · i · c · o · n · e ·  · Y · - · s · i · t · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · i · l · i · c · o · n · e ·  · Y · - · s · i · t · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "infusion-set-with-three-way-stopcock",
    "title": "Infusion Set with Three Way Stopcock",
    "productCode": "VP-INF-04",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/Infusion Set with Three Way stop Cock.jpg",
    "description": "Infusion of fluids and medications, with directional flow control at the access port.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Lipid-resistant polycarbonate body with 360-degree rotation handles multi-route medication administration simultaneously.",
      "Rated for continuous dynamic pressures up to 4.5 bar (65 psi) with zero leakage or cracking.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · s · t · o · p · c · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · s · t · o · p · c · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "micro-infusion-set-with-air-vented",
    "title": "Micro Infusion Set with Air Vented",
    "productCode": "VP-INF-05",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/Micro Infusion Set with Air vent.jpg",
    "description": "Fine-rate infusion of fluids and medications as part of an infusion system.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Precision micro-bore drip tube delivering exactly 60 drops per ml for pediatric and critical dosage accuracy.",
      "Integrated hydrophobic bacterial air filter ensures safe pressure equilibration during delicate infusions.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · s · t · o · p · c · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · s · t · o · p · c · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "0-2-micron-filter-non-dehp-infusion-set",
    "title": "0.2 Micron Filter (Non-DEHP) Infusion Set",
    "productCode": "VP-INF-06",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/0.2 MICRON FILTER (NON-DEHP) Infusion Set.jpg",
    "description": "Filtered intravenous infusion where a DEHP-free fluid path is required.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Precision micro-bore drip tube delivering exactly 60 drops per ml for pediatric and critical dosage accuracy.",
      "Integrated hydrophobic bacterial air filter ensures safe pressure equilibration during delicate infusions.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a ·  · 0 · . · 2 ·  · m · i · c · r · o · n ·  · A · B · S ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · f · i · l · t · e · r ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a ·  · 0 · . · 2 ·  · m · i · c · r · o · n ·  · A · B · S ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · f · i · l · t · e · r ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "auto-stop-iv-infusion-set",
    "title": "Auto Stop IV Infusion Set",
    "productCode": "VP-INF-07",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/autostop_infusion_set.jpg",
    "description": "Intravenous administration with an auto-stop drip chamber that closes when the container empties.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Patented auto-stop disc membrane halts fluid flow automatically once container runs dry, preventing line dry-out and air embolism.",
      "Ensures constant fluid priming retention, easing nurse re-infusion without having to re-prime the line.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · a · u · t · o · - · s · t · o · p ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  · w · i · t · h ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · d · r · i · p ·  · s · p · i · k · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · i · l · i · c · o · n · e ·  · Y · - · s · i · t · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · a · u · t · o · - · s · t · o · p ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  · w · i · t · h ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · d · r · i · p ·  · s · p · i · k · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · i · l · i · c · o · n · e ·  · Y · - · s · i · t · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "measured-volume-infusion-set",
    "title": "Measured Volume Infusion Set",
    "productCode": "VP-INF-08",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/medical-products.png",
    "description": "Volume-controlled administration of fluids through a graduated burette.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Precision 100 ml / 150 ml calibrated cylindrical burette with bold blue volumetric graduation markings for pediatric safety.",
      "Integrated floating automatic shut-off valve cuts flow when set dose is depleted to prevent unexpected over-infusion.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · V · C ·  · b · u · r · e · t · t · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · t · a · i · n · l · e · s · s ·  · m · i · c · r · o · n · i · z · e · r ·  ·  ·  ·  · P · P ·  · k · i · n · k · - · r · e · s · i · s · t · a · n · t ·  · t · u · b · e ·  ·  ·  ·  · s · i · l · i · c · o · n · e ·  · f · l · o · a · t · e · r ·  ·  ·  ·  · A · B · S ·  · h · a · r · d ·  · i · n · l · e · t ·  · a · n · d ·  · o · u · t · l · e · t ·  · c · a · p · s ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · V · C ·  · b · u · r · e · t · t · e ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · s · t · a · i · n · l · e · s · s ·  · m · i · c · r · o · n · i · z · e · r ·  ·  ·  ·  · P · P ·  · k · i · n · k · - · r · e · s · i · s · t · a · n · t ·  · t · u · b · e ·  ·  ·  ·  · s · i · l · i · c · o · n · e ·  · f · l · o · a · t · e · r ·  ·  ·  ·  · A · B · S ·  · h · a · r · d ·  · i · n · l · e · t ·  · a · n · d ·  · o · u · t · l · e · t ·  · c · a · p · s ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "elastomeric-infusion-pump",
    "title": "Elastomeric Infusion Pump",
    "productCode": "VP-INF-09",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion/elastomeric_infusion_pump.jpg",
    "description": "General infusion, antibiotic delivery, chemotherapy or pain management, in a healthcare facility or at home. Single use.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Constant-rate elastomeric balloon reservoir delivers continuous medication without external electric power or batteries.",
      "Impact-resistant transparent outer casing protects reservoir while calibrated flow restrictor guarantees dosing accuracy.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S · , ·  · P · P ·  · a · n · d ·  · P · V · C ·  · f · l · o · w · - · r · a · t · e ·  · c · o · n · t · r · o · l · l · e · r ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · P · P ·  · m · e · d · i · c · a · t · i · o · n ·  · r · e · s · e · r · v · o · i · r ·  ·  ·  ·  · P · P ·  · s · u · p · p · o · r · t ·  · p · i · p · e ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S · , ·  · P · P ·  · a · n · d ·  · P · V · C ·  · f · l · o · w · - · r · a · t · e ·  · c · o · n · t · r · o · l · l · e · r ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · m · e · m · b · r · a · n · e ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · P · P ·  · m · e · d · i · c · a · t · i · o · n ·  · r · e · s · e · r · v · o · i · r ·  ·  ·  ·  · P · P ·  · s · u · p · p · o · r · t ·  · p · i · p · e ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "infusion-intravenous-set-with-flow-regulator",
    "title": "Infusion Intravenous Set with Flow Regulator",
    "productCode": "VP-INF-10",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Infusion Including Chemo/infusion intravenous set with flow regulator.jpg",
    "description": "Intravenous administration with precision flow control for consistent delivery.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Ergonomic dial flow regulator calibrated from 5 to 250 ml/hr maintains consistent gravitational infusion rates.",
      "Dual-scale calibration provides dependable bedside flow titration without the need for electronic volumetric pumps.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · s ·  · t · h · e ·  · p · r · e · m · i · u · m ·  · s · e · t · , ·  · w · i · t · h ·  · a · n ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "priming-set-intravenous-infusion",
    "title": "Priming Set Intravenous Infusion",
    "productCode": "VP-INF-11",
    "category": "infusion",
    "categoryDisplay": "Infusion Therapy",
    "image": "images/Nephrology/priming set intravenous infusion set.jpg",
    "description": "Priming of an intravenous infusion line before administration.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Optimized rapid-prime fluid path designed for efficient bubble clearance prior to dialysis and high-volume infusions.",
      "Supplied with high-flow male luer lock and secure sealing protective closure cap.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "haemodialysis-blood-tubing-set",
    "title": "Haemodialysis Blood Tubing Set",
    "productCode": "VP-NPH-01",
    "category": "nephro",
    "categoryDisplay": "Nephrology & Dialysis",
    "image": "images/medical-products.png",
    "description": "Acute and chronic haemodialysis therapy in kidney dialysis or renal failure.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Kink-resistant arterial and venous tubing lines with low-haemolysis internal lumen finish for continuous extracorporeal blood circuits.",
      "Color-coded red (arterial) and blue (venous) line clamps with high-resilience peristaltic pump segment.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · L · a · t · e · x · - · f · r · e · e ·  · r · u · b · b · e · r ·  · p · l · u · g ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · c · o · l · o · u · r · - · c · o · d · e · d ·  · P · V · C ·  · T · - · i · n · j · e · c · t · i · o · n ·  · s · i · t · e · s ·  ·  ·  ·  · P · P ·  · p · i · n · c · h ·  · c · l · a · m · p · s ·  ·  ·  ·  · A · B · S ·  · l · u · e · r ·  · l · o · c · k · s ·  ·  ·  ·  · P · V · C ·  · p · u · m · p ·  · s · e · g · m · e · n · t ·  · c · o · n · n · e · c · t · o · r · s ·  ·  ·  ·  · P · V · C ·  · d · i · n ·  · c · o · n · n · e · c · t · o · r · s ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· L · a · t · e · x · - · f · r · e · e ·  · r · u · b · b · e · r ·  · p · l · u · g ·  ·  ·  ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · c · o · l · o · u · r · - · c · o · d · e · d ·  · P · V · C ·  · T · - · i · n · j · e · c · t · i · o · n ·  · s · i · t · e · s ·  ·  ·  ·  · P · P ·  · p · i · n · c · h ·  · c · l · a · m · p · s ·  ·  ·  ·  · A · B · S ·  · l · u · e · r ·  · l · o · c · k · s ·  ·  ·  ·  · P · V · C ·  · p · u · m · p ·  · s · e · g · m · e · n · t ·  · c · o · n · n · e · c · t · o · r · s ·  ·  ·  ·  · P · V · C ·  · d · i · n ·  · c · o · n · n · e · c · t · o · r · s ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "av-arteriovenous-fistula-needle-set",
    "title": "AV (Arteriovenous) Fistula Needle Set",
    "productCode": "VP-NPH-02",
    "category": "nephro",
    "categoryDisplay": "Nephrology & Dialysis",
    "image": "images/Nephrology/arteriovenous fistula needle sets.jpg",
    "description": "Connects blood lines to the blood vessel through a needle when dialysis is carried out via an internal fistula. Flexible butterfly wings identify the needle size.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Ultra-thin wall siliconized stainless steel needle cannula minimizes vascular trauma during high-flow hemodialysis access.",
      "Textured color-coded butterfly wings ensure non-slip grip and stable cannulation fixation to the patient's arm.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · V · C ·  · f · l · e · x · i · b · l · e ·  · r · o · t · a · t · i · n · g ·  · w · i · n · g ·  · w · i · t · h ·  · A · B · S ·  · i · n · n · e · r ·  · p · a · r · t ·  ·  ·  ·  · S · S · - · 3 · 0 · 4 ·  · n · e · e · d · l · e ·  ·  ·  ·  · P · P ·  · n · e · e · d · l · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · t · u · b · i · n · g ·  ·  ·  ·  · D · e · l · r · i · n ·  · p · i · n · c · h ·  · c · l · a · m · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · V · C ·  · f · l · e · x · i · b · l · e ·  · r · o · t · a · t · i · n · g ·  · w · i · n · g ·  · w · i · t · h ·  · A · B · S ·  · i · n · n · e · r ·  · p · a · r · t ·  ·  ·  ·  · S · S · - · 3 · 0 · 4 ·  · n · e · e · d · l · e ·  ·  ·  ·  · P · P ·  · n · e · e · d · l · e ·  · c · o · v · e · r ·  ·  ·  ·  · P · V · C ·  · t · u · b · i · n · g ·  ·  ·  ·  · D · e · l · r · i · n ·  · p · i · n · c · h ·  · c · l · a · m · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "transducer-protector",
    "title": "Transducer Protector",
    "productCode": "VP-NPH-03",
    "category": "nephro",
    "categoryDisplay": "Nephrology & Dialysis",
    "image": "images/Nephrology/transducer proctector.jpg",
    "description": "Keeps the blood side of the haemodialysis circuit separated from the machine side and prevents contamination of the machine.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Hydrophobic 0.2 µm PTFE antibacterial membrane blocks blood and fluids while transmitting accurate circuit pressure to machine sensors.",
      "Standard luer lock connection compatible with all conventional hemodialysis machines and blood tubing sets.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · p · a · r · t ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · p · a · r · t ·  ·  ·  ·  · h · y · d · r · o · p · h · o · b · i · c ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · p · a · r · t ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · p · a · r · t ·  ·  ·  ·  · h · y · d · r · o · p · h · o · b · i · c ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "peritoneal-dialysis-transfusion-set",
    "title": "Peritoneal Dialysis Transfusion Set",
    "productCode": "VP-NPH-04",
    "category": "nephro",
    "categoryDisplay": "Nephrology & Dialysis",
    "image": "images/Nephrology/peritoneal_dialysis_set.png",
    "description": "Administration of dialysis solutions during peritoneal dialysis, allowing solution to flow into and out of the peritoneal cavity.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Sterile multi-limb fluid manifold tailored for continuous and automated peritoneal dialysis bag exchange.",
      "Smooth inner bore prevents tubing collapse and guarantees consistent fluid inflow and gravity drainage rates.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·  ·  ·  ·  · P · V · C ·  · Y · - · j · u · n · c · t · i · o · n ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·  ·  ·  ·  · P · V · C ·  · Y · - · j · u · n · c · t · i · o · n ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "haemodialysis-catheter-set",
    "title": "Haemodialysis Catheter Set",
    "productCode": "VP-NPH-05",
    "category": "nephro",
    "categoryDisplay": "Nephrology & Dialysis",
    "image": "images/Nephrology/haemodialysis_catheter_set.jpg",
    "description": "Exchanges blood to and from the haemodialysis machine.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Thermosensitive radiopaque polyurethane softens in situ, adapting to vascular anatomy and reducing vessel wall injury.",
      "High-flow dual-lumen design minimizes recirculation while optimizing Kt/V dialysis clearance.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · N · i · t · i · n · o · l ·  · g · u · i · d · e ·  · w · i · r · e ·  ·  ·  ·  · P · U ·  · s · i · n · g · l · e · , ·  · d · o · u · b · l · e ·  · a · n · d ·  · t · r · i · p · l · e ·  · l · u · m · e · n ·  · t · u · b · i · n · g ·  ·  ·  ·  · P · E ·  · a · n · d ·  · P · U ·  · v · e · s · s · e · l ·  · d · i · l · a · t · o · r ·  ·  ·  ·  · S · S ·  · a · n · d ·  · P · C ·  · i · n · t · r · o · d · u · c · e · r ·  · n · e · e · d · l · e · s ·  ·  ·  ·  · A · B · S ·  · c · a · n · n · u · l · a ·  · c · l · a · m · p ·  ·  ·  ·  · s · i · l · i · c · o · n · e ·  · p · l · u · g ·  ·  ·  ·  · P · P ·  · c · a · t · h · e · t · e · r ·  · h · o · l · d · e · r ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· N · i · t · i · n · o · l ·  · g · u · i · d · e ·  · w · i · r · e ·  ·  ·  ·  · P · U ·  · s · i · n · g · l · e · , ·  · d · o · u · b · l · e ·  · a · n · d ·  · t · r · i · p · l · e ·  · l · u · m · e · n ·  · t · u · b · i · n · g ·  ·  ·  ·  · P · E ·  · a · n · d ·  · P · U ·  · v · e · s · s · e · l ·  · d · i · l · a · t · o · r ·  ·  ·  ·  · S · S ·  · a · n · d ·  · P · C ·  · i · n · t · r · o · d · u · c · e · r ·  · n · e · e · d · l · e · s ·  ·  ·  ·  · A · B · S ·  · c · a · n · n · u · l · a ·  · c · l · a · m · p ·  ·  ·  ·  · s · i · l · i · c · o · n · e ·  · p · l · u · g ·  ·  ·  ·  · P · P ·  · c · a · t · h · e · t · e · r ·  · h · o · l · d · e · r ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "extension-line",
    "title": "Extension Line",
    "productCode": "VP-LNE-01",
    "category": "lines",
    "categoryDisplay": "Lines & Accessories",
    "image": "images/Infusion/Extension Line(Complete range).jpg",
    "description": "Single-use extension used as part of an infusion or perfusion system.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Precision medical-grade polymer fluid path ensures smooth, uniform delivery rates.",
      "Universal male and female luer connections ensure leak-proof mating with standard clinical devices.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · M · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · t · u · b · e ·  ·  ·  ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · a · n · d ·  · c · a · p ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· M · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · t · u · b · e ·  ·  ·  ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · a · n · d ·  · c · a · p ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "extension-lines-with-flow-regulator",
    "title": "Extension Lines with Flow Regulator",
    "productCode": "VP-LNE-02",
    "category": "lines",
    "categoryDisplay": "Lines & Accessories",
    "image": "images/Infusion/extension_line_flow_regulator.jpg",
    "description": "Extension line offering precision care and consistent delivery as part of an infusion system.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Ergonomic dial flow regulator calibrated from 5 to 250 ml/hr maintains consistent gravitational infusion rates.",
      "Dual-scale calibration provides dependable bedside flow titration without the need for electronic volumetric pumps.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "extension-line-with-three-way-stopcock",
    "title": "Extension Line with Three Way Stopcock",
    "productCode": "VP-LNE-03",
    "category": "lines",
    "categoryDisplay": "Lines & Accessories",
    "image": "images/Infusion/extension line with 3 way stop cock.jpg",
    "description": "Fluid flow directional control, providing an access port for administration of solution, withdrawal of fluid and pressure monitoring.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Lipid-resistant polycarbonate body with 360-degree rotation handles multi-route medication administration simultaneously.",
      "Rated for continuous dynamic pressures up to 4.5 bar (65 psi) with zero leakage or cracking.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · t · h · r · e · e · - · w · a · y ·  · c · o · n · n · e · c · t · o · r ·  ·  ·  ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · r · e · g · u · l · a · t · o · r ·  ·  ·  ·  · A · B · S ·  · r · o · t · a · t · i · n · g ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D ·  · c · a · p · s ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · t · h · r · e · e · - · w · a · y ·  · c · o · n · n · e · c · t · o · r ·  ·  ·  ·  · P · P ·  · t · h · r · e · e · - · w · a · y ·  · r · e · g · u · l · a · t · o · r ·  ·  ·  ·  · A · B · S ·  · r · o · t · a · t · i · n · g ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · L · D ·  · c · a · p · s ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "pvc-free-extension-line",
    "title": "PVC Free Extension Line",
    "productCode": "VP-LNE-04",
    "category": "lines",
    "categoryDisplay": "Lines & Accessories",
    "image": "images/Infusion/pvc_free_extline.png",
    "description": "Single-use extension for infusion and perfusion systems where a PVC-free fluid path is required.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Engineered with 100% polyurethane/polyolefin fluid path eliminating DEHP, TOTM, and PVC plasticizers entirely.",
      "Optimized for paclitaxel, cyclosporine, nitroglycerin, and oncology regimens prone to polymer adsorption.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · E ·  · t · u · b · e ·  ·  ·  ·  · P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · E ·  · t · u · b · e ·  ·  ·  ·  · P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "chemotherapy-infusion-sets",
    "title": "Chemotherapy Infusion Sets",
    "productCode": "VP-ONC-01",
    "category": "onco",
    "categoryDisplay": "Oncology",
    "image": "images/Infusion Including Chemo/chemo theraphy infusion set(complete Range).jpg",
    "description": "Administration of fluids from a container into the patient's vascular system, offering precision care and consistent delivery.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Photoprotective UV-blocking amber material protects photosensitive cytotoxic compounds from light degradation.",
      "Completely non-DEHP fluid path guarantees no plasticizer migration or drug absorption during chemotherapy infusions.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · s · p · i · k · e ·  · c · o · v · e · r ·  ·  ·  ·  · 1 · 6 ·  · m · m ·  · P · V · C ·  · d · r · i · p ·  · c · h · a · m · b · e · r ·  ·  ·  ·  · A · B · S ·  · v · e · n · t · e · d ·  · s · p · i · k · e · , ·  · c · l · a · m · p ·  · a · n · d ·  · r · o · l · l · e · r ·  ·  ·  ·  · n · y · l · o · n ·  · m · e · s · h ·  · a · n · d ·  · P · P ·  · f · l · u · i · d ·  · f · i · l · t · e · r ·  ·  ·  ·  · P · V · C ·  · a · i · r ·  · v · e · n · t ·  · c · a · p ·  ·  ·  ·  · a · i · r ·  · f · i · l · t · e · r ·  · m · e · m · b · r · a · n · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "chemotherapy-extension-line-with-flow-regulator",
    "title": "Chemotherapy Extension Line with Flow Regulator",
    "productCode": "VP-ONC-02",
    "category": "onco",
    "categoryDisplay": "Oncology",
    "image": "images/Infusion Including Chemo/chemotherapy extension line with flow regulator.jpg",
    "description": "Extension line offering precision care and consistent delivery in chemotherapy administration.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Ergonomic dial flow regulator calibrated from 5 to 250 ml/hr maintains consistent gravitational infusion rates.",
      "Dual-scale calibration provides dependable bedside flow titration without the need for electronic volumetric pumps.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · a · n · d ·  · T · P · E ·  · f · l · o · w ·  · r · e · g · u · l · a · t · o · r ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "chemotherapy-extension-line-set",
    "title": "Chemotherapy Extension Line Set",
    "productCode": "VP-ONC-03",
    "category": "onco",
    "categoryDisplay": "Oncology",
    "image": "images/Infusion Including Chemo/chemotherapy extension line set.jpg",
    "description": "Single-use extension used as part of an infusion or perfusion system for chemotherapy.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Photoprotective UV-blocking amber material protects photosensitive cytotoxic compounds from light degradation.",
      "Completely non-DEHP fluid path guarantees no plasticizer migration or drug absorption during chemotherapy infusions.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · c · a · p ·  ·  ·  ·  · P · V · C ·  · t · u · b · e ·  ·  ·  ·  · P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "pressure-monitoring-line",
    "title": "Pressure Monitoring Line",
    "productCode": "VP-CRT-01",
    "category": "critical",
    "categoryDisplay": "Critical Care",
    "image": "images/Infusion/pressure line monitering.jpg",
    "description": "High-pressure monitoring and connection between syringe and infusion pump, and channelling fluid for intravenous infusion.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "High-durometer thick-walled non-compliant tubing transmits crisp hemodynamic pressure waveforms without signal damping.",
      "Withstands dynamic and static fluid pressures up to 500 psi (34 bar) for intensive care monitoring.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · P · V · C · , ·  · P · U · , ·  · P · E ·  · a · n · d ·  · L · D · P · E ·  · t · u · b · e ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· P · P ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · A · B · S ·  · f · e · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · P · P ·  · m · a · l · e ·  · l · u · e · r ·  · l · o · c · k ·  · c · a · p ·  ·  ·  ·  · P · V · C · , ·  · P · U · , ·  · P · E ·  · a · n · d ·  · L · D · P · E ·  · t · u · b · e ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "disposable-pressure-transducer-kit",
    "title": "Disposable Pressure Transducer Kit",
    "productCode": "VP-CRT-02",
    "category": "critical",
    "categoryDisplay": "Critical Care",
    "image": "images/cardiology/disposable blood pressure transducer and accessories.jpg",
    "description": "Invasive pressure monitoring as part of a patient monitoring system.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Pre-assembled closed invasive blood pressure sensor kit with continuous 3 ml/hr or 30 ml/hr flush squeeze valve.",
      "Clear fluid pathway enables immediate visual detection and purging of micro-air bubbles.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · E · n · d · o · r · s · e · d ·  · o · n · t · o ·  · t · h · e ·  · l · i · c · e · n · c · e ·  · 2 · 5 ·  · M · a · y ·  · 2 · 0 · 2 · 6 · . ·  · F · u · l · l ·  · m · a · t · e · r · i · a · l ·  · l · i · s · t ·  · a · v · a · i · l · a · b · l · e ·  · o · n ·  · r · e · q · u · e · s · t · . ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· E · n · d · o · r · s · e · d ·  · o · n · t · o ·  · t · h · e ·  · l · i · c · e · n · c · e ·  · 2 · 5 ·  · M · a · y ·  · 2 · 0 · 2 · 6 · . ·  · F · u · l · l ·  · m · a · t · e · r · i · a · l ·  · l · i · s · t ·  · a · v · a · i · l · a · b · l · e ·  · o · n ·  · r · e · q · u · e · s · t · . ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  },
  {
    "id": "cardioplegia-adapters",
    "title": "Cardioplegia Adapters",
    "productCode": "VP-CRD-01",
    "category": "cardiac",
    "categoryDisplay": "Cardiac Surgery",
    "image": "images/cardiology/cardioplegia adopters.jpg",
    "description": "Connect to the ARC or vessel cannulae for delivery of cardioplegia solution or venting of the heart during cardiopulmonary bypass.",
    "meta": [
      "Class B",
      "Sterile",
      "3-Year Shelf Life",
      "VIREXA / OEM"
    ],
    "features": [
      "Manufactured inside ISO Class 7 & Class 8 certified cleanroom suites under automated bioburden monitoring.",
      "Designed for safe delivery of cardioplegia solution and myocardial arrest during open heart cardiopulmonary bypass.",
      "Secure luer lock and quick-connect fittings withstand high-pressure intraoperative infusion regimens.",
      "Precision-moulded with USP Class VI and ISO 10993 tested medical-grade polymers.",
      "Supplied sterile with validated 3-year sterile barrier packaging (EO Sterilization pathway).",
      "Principal materials: · A · B · S ·  · s · t · r · a · i · g · h · t ·  · c · o · n · n · e · c · t · o · r · s ·  · 1 · / · 4 · , ·  · 3 · / · 8 ·  · a · n · d ·  · 1 · / · 2 ·  · i · n ·  ·  ·  ·  · A · B · S ·  · Y · - · c · o · n · n · e · c · t · o · r · s ·  ·  ·  ·  · A · B · S ·  · Y · - · c · o · n · n · e · c · t · o · r · s ·  · w · i · t · h ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · s · t · e · p · - · d · o · w · n ·  · s · t · r · a · i · g · h · t ·  · c · o · n · n · e · c · t · o · r · s ·."
    ],
    "specs": {
      "Risk Class": "Class B (India MDR 2017)",
      "Sterility": "Supplied sterile (EO Sterilized)",
      "Shelf Life": "3 years",
      "Brand Availability": "VIREXA, or OEM Private Label",
      "Licence Number": "MFG/MD/2026/000078",
      "Material": "· A · B · S ·  · s · t · r · a · i · g · h · t ·  · c · o · n · n · e · c · t · o · r · s ·  · 1 · / · 4 · , ·  · 3 · / · 8 ·  · a · n · d ·  · 1 · / · 2 ·  · i · n ·  ·  ·  ·  · A · B · S ·  · Y · - · c · o · n · n · e · c · t · o · r · s ·  ·  ·  ·  · A · B · S ·  · Y · - · c · o · n · n · e · c · t · o · r · s ·  · w · i · t · h ·  · l · u · e · r ·  · l · o · c · k ·  ·  ·  ·  · A · B · S ·  · s · t · e · p · - · d · o · w · n ·  · s · t · r · a · i · g · h · t ·  · c · o · n · n · e · c · t · o · r · s ·",
      "Cleanroom Class": "ISO Class 7 & Class 8 (10,000 / 100,000)",
      "Packaging": "Individual sterile medical peel pouch / blister pack",
      "Quality Standards": "ISO 13485:2016, CDSCO MDR 2017, CE Compliant"
    },
    "oemNote": "This device is licensed, tooled and\n          documented on our line. We can supply it under VIREXA, or manufacture it under\n          your brand — as OEM contract manufacture under our licence, or under your own\n          licence at our premises."
  }
];

// ── Showcase Controller Class ──────────────────────────────
class ProductShowcase {
  constructor() {
    this.grid = document.getElementById('catalog-grid');
    this.tabsContainer = document.getElementById('catalog-tabs');
    this.glider = document.getElementById('catalog-glider');
    this.modal = document.getElementById('product-modal');
    this.currentCategory = 'all';

    if (!this.grid || !this.tabsContainer || !this.modal) {
      console.warn('ProductShowcase elements missing, skipping initialization');
      return;
    }

    this.init();
  }

  init() {
    this.renderTabs();
    this.renderProducts(this.currentCategory);
    this.setupEventListeners();
    
    // Initial glider positioning with a minor delay to ensure font loading
    setTimeout(() => {
      const activeTab = this.tabsContainer.querySelector('.catalog-tab.active');
      this.positionGlider(activeTab);
    }, 150);
  }

  positionGlider(activeTab) {
    if (!this.glider || !activeTab) return;
    this.glider.style.left = `${activeTab.offsetLeft}px`;
    this.glider.style.width = `${activeTab.offsetWidth}px`;
  }

  renderTabs() {
    const tabs = this.tabsContainer.querySelectorAll('.catalog-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.positionGlider(tab);
        this.currentCategory = tab.dataset.category;
        this.renderProducts(this.currentCategory);
      });
    });
  }

  renderProducts(category) {
    // Fade out grid
    this.grid.classList.add('fade-out');

    setTimeout(() => {
      this.grid.innerHTML = '';
      
      const filtered = category === 'all' 
        ? MEDICAL_PRODUCTS 
        : MEDICAL_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());

      if (filtered.length === 0) {
        this.grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: var(--sp-12); color: var(--clr-text-dim);">No products found in this category.</div>`;
        this.grid.classList.remove('fade-out');
        return;
      }

      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', p.id);
        card.setAttribute('data-reveal', 'up');
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
          <span class="product-card__badge">${p.categoryDisplay || p.category}</span>
          <div class="product-card__img-wrap">
            <img src="${p.image}" alt="${p.title}" class="product-card__img" loading="lazy">
          </div>
          <h4 class="product-card__title">${p.title}</h4>
          ${p.productCode ? `<div class="product-card__code">Code: <strong>${p.productCode}</strong></div>` : ''}
          <div class="product-card__meta-chips" style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:var(--sp-3)">
            ${(p.meta || ['Class B', 'Sterile', '3-Yr Shelf Life', 'VIREXA']).map(m => `<span style="font-size:0.72rem;background:rgba(2,132,199,0.08);color:#0284c7;padding:2px 8px;border-radius:12px;font-weight:600;border:1px solid rgba(2,132,199,0.15)">${m}</span>`).join('')}
          </div>
          <p class="product-card__desc">${p.description}</p>
          <div style="display:flex;gap:8px;margin-top:auto;width:100%">
            <button class="btn btn--outline-primary btn--sm product-card__btn" style="flex:1" onclick="event.stopPropagation(); window.productShowcaseInstance.openModal('${p.id}')">View Specs</button>
            <a href="product?id=${p.id}" class="btn btn--secondary btn--sm product-card__btn" style="flex:1;text-decoration:none;display:inline-flex;align-items:center;justify-content:center" onclick="event.stopPropagation()">Details &rarr;</a>
          </div>
        `;

        card.addEventListener('click', () => {
          this.openModal(p.id);
        });
        this.grid.appendChild(card);
      });

      if (window.initScrollReveal) {
        window.initScrollReveal();
      }

      // Fade back in
      this.grid.classList.remove('fade-out');
    }, 250);
  }

  setupEventListeners() {
    // Esc key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('open')) {
        const closeBtn = this.modal.querySelector('.product-modal__close');
        if (closeBtn) closeBtn.click();
      }
    });

    // Resize recalculates active glider positioning
    window.addEventListener('resize', () => {
      const activeTab = this.tabsContainer.querySelector('.catalog-tab.active');
      this.positionGlider(activeTab);
    }, { passive: true });
  }

  openModal(productId) {
    const product = MEDICAL_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const productImages = product.images || [product.image];
    const hasThumbnails = productImages.length > 1;

    let thumbnailsHtml = '';
    if (hasThumbnails) {
      thumbnailsHtml = `
        <div class="product-modal__thumbnails">
          ${productImages.map((imgSrc, idx) => `
            <div class="product-modal__thumb-wrap ${idx === 0 ? 'active' : ''}" 
                 onclick="document.getElementById('modal-main-img').src='${imgSrc}'; this.parentElement.querySelectorAll('.product-modal__thumb-wrap').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
              <img src="${imgSrc}" class="product-modal__thumb" alt="${product.title} View ${idx + 1}">
            </div>
          `).join('')}
        </div>
      `;
    }

    this.modal.innerHTML = `
      <div class="product-modal__backdrop"></div>
      <div class="product-modal__content">
        <button class="product-modal__close" aria-label="Close modal">&times;</button>
        <div class="product-modal__body">
          <div class="product-modal__img-column">
            <div class="product-modal__img-wrap">
              <img id="modal-main-img" src="${product.image}" alt="${product.title}" class="product-modal__img">
            </div>
            ${thumbnailsHtml}
          </div>
          <div class="product-modal__details-column">
            <span class="product-modal__category">${product.categoryDisplay || product.category}</span>
            <h2 class="product-modal__title">${product.title}</h2>
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px;">
              <span style="font-size:0.78rem;font-weight:700;color:#0284c7;letter-spacing:0.5px;background:rgba(2,132,199,0.1);padding:3px 10px;border-radius:4px;">
                &#128204; Code: ${product.productCode}
              </span>
              <span style="font-size:0.78rem;font-weight:700;color:#16a34a;letter-spacing:0.5px;background:rgba(22,163,74,0.1);padding:3px 10px;border-radius:4px;">
                &#10003; CDSCO Lic: MFG/MD/2026/000078
              </span>
            </div>
            
            <div class="product-modal__tabs">
              <button class="product-modal__tab-btn active" onclick="switchModalTab(this, 'overview')">Overview</button>
              <button class="product-modal__tab-btn" onclick="switchModalTab(this, 'features')">Features</button>
              <button class="product-modal__tab-btn" onclick="switchModalTab(this, 'specs')">Specifications</button>
            </div>

            <div class="product-modal__tab-pane active" id="pane-overview">
              <p class="product-modal__desc">${product.description}</p>
              <div style="background:rgba(2,132,199,0.05);border-left:3px solid #0284c7;padding:12px 16px;border-radius:0 8px 8px 0;margin-top:16px;">
                <strong style="color:var(--clr-text);display:block;font-size:0.85rem;margin-bottom:4px">&#127970; Made Under Your Brand (OEM Contract Manufacturing)</strong>
                <p style="font-size:0.82rem;color:var(--clr-text-muted);margin:0;line-height:1.5">${product.oemNote}</p>
              </div>
            </div>

            <div class="product-modal__tab-pane" id="pane-features">
              <ul class="product-modal__features-list">
                ${(product.features || []).map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>

            <div class="product-modal__tab-pane" id="pane-specs">
              <table class="product-modal__specs-table">
                <tbody>
                  ${Object.entries(product.specs).map(([label, val]) => `
                    <tr>
                      <td class="product-modal__specs-label">${label}</td>
                      <td class="product-modal__specs-value">${val}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="product-modal__actions">
              <button class="btn btn--outline btn--md product-modal__close-btn">Close</button>
              <a href="product?id=${product.id}" class="btn btn--secondary btn--md">Full Page &rarr;</a>
              <a href="contact.html?product=${encodeURIComponent(product.title)}" class="btn btn--primary btn--md">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    `;

    this.modal.style.display = 'flex';
    this.modal.offsetHeight;
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const closeBtn = this.modal.querySelector('.product-modal__close');
    const closeBtnAlt = this.modal.querySelector('.product-modal__close-btn');
    const backdrop = this.modal.querySelector('.product-modal__backdrop');

    const closeModalFn = () => {
      this.modal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        this.modal.style.display = 'none';
        this.modal.innerHTML = '';
      }, 300);
    };

    closeBtn.addEventListener('click', closeModalFn);
    closeBtnAlt.addEventListener('click', closeModalFn);
    backdrop.addEventListener('click', closeModalFn);
  }
}

// ── Tab Switcher Helper ────────────────────────────────────
window.switchModalTab = function(btnElement, paneId) {
  const container = btnElement.parentElement;
  container.querySelectorAll('.product-modal__tab-btn').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  const modalContent = container.closest('.product-modal__content');
  modalContent.querySelectorAll('.product-modal__tab-pane').forEach(pane => pane.classList.remove('active'));
  
  const targetPane = modalContent.querySelector(`#pane-${paneId}`);
  if (targetPane) {
    targetPane.classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.productShowcaseInstance = new ProductShowcase();
});
