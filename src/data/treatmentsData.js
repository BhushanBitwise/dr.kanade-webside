export const treatmentsData = [
  {
    id: "thyroid-disorders",
    title: "Thyroid Disorders",
    description: "Personalised support for thyroid-related concerns, including Hypothyroidism and Hyperthyroidism.",
    category: "Hormonal & Endocrine",
    duration: "45 min consultation"
  },
  {
    id: "pcos-hormonal-imbalance",
    title: "PCOS & Hormonal Imbalance",
    description: "Individualised care for hormonal health concerns, irregular menstrual cycles, and metabolic health.",
    category: "Women's Health",
    duration: "45 min consultation"
  },
  {
    id: "psoriasis",
    title: "Psoriasis",
    description: "Supportive, constitutional care for recurring skin plaques, scaling, and autoimmune skin health.",
    category: "Dermatology",
    duration: "45 min consultation"
  },
  {
    id: "eczema",
    title: "Eczema",
    description: "Deep assessment and consultation for persistent, dry, or recurring eczema and allergic dermatitis.",
    category: "Dermatology",
    duration: "30 min consultation"
  },
  {
    id: "gerd-acidity",
    title: "GERD & Acidity",
    description: "Holistic care for recurring digestive discomfort, acid reflux, heartburn, and gastrointestinal sensitivity.",
    category: "Digestive Health",
    duration: "30 min consultation"
  },
  {
    id: "migraine",
    title: "Migraine & Chronic Headaches",
    description: "Individualised assessment for recurring headaches, sensory triggers, and stress-related migraines.",
    category: "Neurological & Lifestyle",
    duration: "30 min consultation"
  },
  {
    id: "anxiety-insomnia",
    title: "Anxiety & Insomnia",
    description: "A thoughtful, empathetic consultation around sleep patterns, restorative rest, and emotional wellbeing.",
    category: "Mental & Sleep Health",
    duration: "45 min consultation"
  },
  {
    id: "varicose-veins",
    title: "Varicose Veins",
    description: "Assessment and gentle supportive care for vein-related concerns, leg fatigue, and circulation.",
    category: "Vascular Health",
    duration: "30 min consultation"
  },
  {
    id: "recurrent-infections",
    title: "Recurrent Infections & Immunity",
    description: "Comprehensive review of recurring respiratory, throat, or seasonal symptoms to strengthen natural vitality.",
    category: "Immunity",
    duration: "30 min consultation"
  },
  {
    id: "asthma",
    title: "Asthma & Bronchial Health",
    description: "Consultation for respiratory symptoms, wheezing, and weather triggers alongside appropriate medical care.",
    category: "Respiratory Health",
    duration: "45 min consultation"
  },
  {
    id: "arthritis",
    title: "Arthritis & Joint Care",
    description: "Individualised support for joint-related concerns, stiffness, osteoarthritis, and mobility comfort.",
    category: "Musculoskeletal",
    duration: "30 min consultation"
  },
  {
    id: "allergic-rhinitis",
    title: "Allergic Rhinitis",
    description: "Consultation for recurring allergy symptoms, dust sensitivity, frequent sneezing, and sinusitis.",
    category: "Respiratory & Allergy",
    duration: "30 min consultation"
  },
  {
    id: "ibs",
    title: "IBS (Irritable Bowel Syndrome)",
    description: "Supportive consultation for chronic digestive concerns, bloating, food sensitivities, and gut dysbiosis.",
    category: "Digestive Health",
    duration: "45 min consultation"
  },
  {
    id: "melasma",
    title: "Melasma & Pigmentation",
    description: "Consultation for hormonal pigmentation, uneven skin tone, and safe holistic dermatological support.",
    category: "Dermatology",
    duration: "30 min consultation"
  }
];

// Backward-compatible array of tuples
export const treatmentsTuples = treatmentsData.map((t) => [t.title, t.description]);
