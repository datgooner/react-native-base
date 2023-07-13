import analytics from '@react-native-firebase/analytics';

export function logEvent(eventName: string, customInfo?: Record<string, any>) {
  if (__DEV__) {
    console.log('logged event', eventName, customInfo);
  }
  return analytics().logEvent(eventName, customInfo);
}

export const subjectListName = [
  'Next Generation Question',
  'Care of Special Populations',
  'Ethical and Legal Issues',
  'Prioritizing Client Care',
  'Fluids and Electrolytes',
  'Acid-Base Balance',
  'Vital Signs and Laboratory',
  'Nutrition',
  'Health and Physical Assistant',
  'Provision of safe environment',
  'Calculation of Medication',
  'Perioperative Nursing',
  'Positioning Clients',
  'Theories of Growth and Development',
  'Growth Development, state of life',
  'Care of Older Client',
  'Reproductive System',
  'Prenatal Period',
  'Risk Conditions Related to Pregnancy',
  'Labor and Birth',
  'Problems with labor and Birth',
  'Postpartum Period',
  'Postpartum Complications',
  'Care of the Newborn',
  'Maternity and newborn Medications',
  'Pediatric Nursing: Integumentary Problems',
  'Hematological Problems',
  'Oncological Problems',
  'Metabolic and Endocrine Problems',
  'Pediatric Nursing: Gastrointestinal Problems',
  'Eye, ear, and Throat Problems',
  'Pediatric Nursing: Respiratory Problems',
  'Pediatric Nursing: Cardiovascular Problems',
  'Renal and Genitourinary Problems',
  'Neurological and Cognira Problems',
  'Pediatric Nursing: Musculoskeletal Problems',
  'Pediatric Nursing: Immune Problems',
  'Pediatric Medications',
  'Integumentary Problems',
  'Integumentary Medications',
  'Oncological and Hemat Problems',
  'Oncological and Hemat Medications',
  'Endocrine Problems',
  'Endocrine Medications',
  'Gastrointestinal Problems',
  'Gastrointestinal Medications',
  'Respiratory Problems',
  'Respiratory Meditations',
  'Cardiovascular Problems',
  'Cardiovascular Medications',
  'Renal and urinary Problems',
  'Renal and urinary Medications',
  'Eye and ear problems',
  'Eye and ear medications',
  'Neurological Problems',
  'Neurological Meditations',
  'Musculoskeletal Problems',
  'Musculoskeletal Medications',
  'Immune Problems',
  'Immune Meditations',
  'Foundations of Mental Health Nursing',
  'Mental Health Problems',
  'Addictions',
  'Crisis Theory and Intervention',
  'Psychiatric Medications',
  'Complex Care',
  'Comprehensive Test',
];

export function getSubJectIndexByName(name: string) {
  const index = subjectListName.indexOf(name);
  return index >= 0 ? String(index + 1) : 'Unknown';
}
