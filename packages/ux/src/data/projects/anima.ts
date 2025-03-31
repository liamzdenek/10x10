import { Project } from '../types';

// Import images
// Note: In a real project, you would import actual image files
// For now, we'll use placeholders
const animaThumbnail = '/assets/projects/anima/thumbnail.png';
const animaFeatured = '/assets/projects/anima/featured.png';
const animaGallery = [
  '/assets/projects/anima/screen1.png',
  '/assets/projects/anima/screen2.png',
  '/assets/projects/anima/screen3.png'
];

const animaProject: Project = {
  id: 1,
  slug: 'anima',
  title: 'Active Patient Follow-Up Alert Dashboard',
  company: 'Anima',
  shortDescription: 'An ML-powered dashboard for clinicians to identify and prioritize abnormal lab results requiring follow-up.',
  fullDescription: 'The Active Patient Follow-Up Alert Dashboard uses machine learning to help clinicians identify and prioritize abnormal lab results that require follow-up. It implements an active learning feedback loop to continuously improve detection accuracy and reduce alert fatigue.',
  completionDate: 'March 17, 2025',
  projectDay: 1,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules'],
    backend: ['FastAPI', 'Python', 'scikit-learn'],
    devops: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    other: ['Machine Learning', 'Healthcare Data Processing']
  },
  projectType: ['Web Application', 'Machine Learning'],
  businessValue: ['Patient Safety', 'Clinical Decision Support', 'Workflow Optimization'],
  features: [
    {
      title: 'ML-Powered Alert Prioritization',
      description: 'Uses machine learning to prioritize lab results requiring follow-up based on clinical significance.'
    },
    {
      title: 'Active Learning Feedback Loop',
      description: 'Incorporates clinician feedback to continuously improve the alert algorithm.'
    },
    {
      title: 'Patient Timeline View',
      description: 'Displays a comprehensive timeline of patient lab results and clinical events.'
    },
    {
      title: 'Customizable Alert Thresholds',
      description: 'Allows clinicians to customize alert thresholds based on patient populations.'
    }
  ],
  challenges: [
    {
      challenge: 'Balancing sensitivity and specificity in alert generation',
      solution: 'Implemented a configurable threshold system with active learning to optimize the balance.'
    },
    {
      challenge: 'Processing diverse lab result formats',
      solution: 'Created a flexible parser with standardization layer to handle various input formats.'
    },
    {
      challenge: 'Ensuring patient data security',
      solution: 'Implemented end-to-end encryption and HIPAA-compliant data handling.'
    }
  ],
  learnings: [
    'Healthcare data requires specialized preprocessing to handle diverse formats and units',
    'Active learning significantly improves ML model performance in clinical settings',
    'User interface design is critical for clinical workflow integration',
    'Balancing alert sensitivity with specificity is key to preventing alert fatigue'
  ],
  links: {
    sourceCode: 'https://github.com/example/anima-project',
    liveDemo: 'https://anima-demo.example.com'
  },
  images: {
    thumbnail: animaThumbnail,
    featured: animaFeatured,
    gallery: animaGallery
  },
  metrics: {
    hoursSpent: 8,
    linesOfCode: 4200,
    linesOfMarkdown: 850,
    llmCost: 35.75,
    hostingCost: 0
  },
  emailThread: {
    initialOutreach: {
      date: 'March 17, 2025',
      subject: 'Application for ML Engineer Position - Active Patient Follow-Up Alert Dashboard',
      content: ''
    },
    responses: []
  }
};

export default animaProject;