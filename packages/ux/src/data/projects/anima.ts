import { Project } from '../types';

const animaProject: Project = {
  id: 1,
  slug: 'anima',
  title: 'Active Patient Follow-Up Alert Dashboard',
  company: 'Anima',
  shortDescription: 'A lightweight web application that simulates an automated alert system for abnormal lab results with machine learning-based risk scoring.',
  fullDescription: "The Active Patient Follow-Up Alert Dashboard uses machine learning to help clinicians identify and prioritize abnormal lab results that require follow-up. It implements an active learning feedback loop to continuously improve detection accuracy and reduce alert fatigue.",
  completionDate: 'March 17, 2025',
  projectDay: 1,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'Effector', 'TanStack Router'],
    backend: ['FastAPI', 'Python', 'scikit-learn', 'Pydantic', 'pandas', 'numpy'],
    devops: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    other: ['Machine Learning', 'Healthcare Data Processing']
  },
  projectType: ['Web Application', 'Machine Learning'],
  businessValue: ['Patient Safety', 'Clinical Decision Support', 'Workflow Optimization'],
  features: [
    {
      title: 'Abnormal Lab Result Detection',
      description: 'Identifies patients with abnormal blood test results that require clinical follow-up and prioritizes patients based on risk scores.'
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'Trains models on synthetic blood test data, validates models for clinical safety and fairness, and serves predictions via a REST API.'
    },
    {
      title: 'Active Learning Feedback Loop',
      description: 'Incorporates clinician feedback to continuously improve the alert algorithm and adapt to real-world usage patterns.'
    },
    {
      title: 'User Interface',
      description: 'Allows healthcare providers to enter blood test results and displays prediction results with risk scores and contributing factors.'
    }
  ],
  challenges: [
    {
      challenge: 'Synthetic data may not capture all real-world patterns',
      solution: 'Enhanced data simulator with more complex abnormality patterns and demographic-specific reference ranges.'
    },
    {
      challenge: 'Potential overfitting on synthetic data',
      solution: 'Implemented robust cross-validation, regularization, and temporal validation.'
    },
    {
      challenge: 'Limited feature engineering',
      solution: 'Created derived features based on reference ranges and clinical relevance.'
    }
  ],
  learnings: [
    'Clinical Safety Priority: In healthcare applications, minimizing false negatives (missed abnormal results) is often more important than reducing false positives.',
    'Validation Complexity: Healthcare ML models require comprehensive validation beyond standard metrics, including fairness across demographics and temporal stability.',
    'Active Learning Value: Incorporating user feedback creates a continuously improving system that adapts to real-world usage patterns.',
    'Synthetic Data Limitations: While synthetic data is valuable for development and testing, it has limitations in capturing the full complexity of real-world clinical data.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/anima-application',
  },
  images: {
    thumbnail: '/productPhotos/anima/image-1.png',
    featured: '/productPhotos/anima/image-1.png',
    gallery: [
      '/productPhotos/anima/image-1.png',
      '/productPhotos/anima/image-2.png',
      '/productPhotos/anima/image-3.png'
    ]
  },
  metrics: {
    hoursSpent: 6,
    linesOfCode: 5307,
    linesOfMarkdown: 2058,
    llmCost: 13.94,
    hostingCost: 0
  },
  youtubeVideoId: 'VhsfZQxZQaA',
  emailThread: {
    initialOutreach: {
      date: 'March 17, 2025',
      subject: 'Application for Principal Software Engineer Position - Active Patient Follow-Up Alert Dashboard',
      content: ''
    },
    responses: []
  }
};

export default animaProject;