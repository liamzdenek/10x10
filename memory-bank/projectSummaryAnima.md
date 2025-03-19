# Project Summary: Anima Active Patient Follow-Up Alert Dashboard

## Project Overview

The Active Patient Follow-Up Alert Dashboard is a lightweight web application that simulates an automated alert system for abnormal lab results. The dashboard displays a list of patients flagged for follow-up, with risk scores derived from a machine learning model that can be refined through user feedback—implementing an active learning loop.

## Target Company

**Anima** - A healthcare technology startup with approximately 20 employees based in London, UK (remote). The company is at the Series B funding stage and focuses on improving patient safety and clinical workflows through innovative technology solutions.

## Core Problem Addressed

In healthcare settings, abnormal lab results that don't receive timely follow-up can lead to serious patient harm, delayed diagnoses, and missed treatment opportunities. Studies have shown that up to 7% of abnormal test results are never followed up on, creating significant patient safety risks. This problem is exacerbated by:

1. **Information Overload**: Healthcare providers face a constant stream of test results, making it difficult to identify which ones require urgent attention
2. **Varying Reference Ranges**: Different labs use different reference ranges, and normal ranges vary by patient demographics
3. **Complex Interpretation**: Some abnormalities are only apparent when considering multiple test values together or in the context of a patient's history
4. **Manual Workflows**: Many healthcare systems rely on manual review of test results, which is time-consuming and error-prone

## Key Technologies Used

### Primary Technologies
- React with TypeScript
- FastAPI (Python)
- scikit-learn for machine learning
- Vite as the build tool

### Secondary Technologies
- Effector for state management
- TanStack Router for routing
- Pydantic for data validation
- pandas and numpy for data processing
- matplotlib and seaborn for visualization

## Major Features Implemented

1. **Abnormal Lab Result Detection**
   - Identifies patients with abnormal blood test results that require clinical follow-up
   - Prioritizes patients based on risk scores
   - Minimizes missed abnormal results (false negatives)
   - Provides confidence scores and explanations for predictions

2. **Machine Learning Pipeline**
   - Trains models on synthetic blood test data
   - Validates models for clinical safety and fairness
   - Serves predictions via a REST API
   - Supports active learning through clinician feedback

3. **User Interface**
   - Allows healthcare providers to enter blood test results
   - Displays prediction results with risk scores and contributing factors
   - Enables feedback on prediction accuracy
   - Presents information in a clear, clinical interface

4. **Data Simulation**
   - Generates synthetic patient profiles with realistic demographics
   - Creates blood test data with appropriate distributions
   - Applies reference ranges based on demographics
   - Flags abnormalities based on reference ranges

## Architecture Highlights

1. **Modular, Multi-tier Architecture**
   - Clear separation of concerns between data, ML, API, and UI layers
   - Well-defined interfaces between components
   - Type definitions shared across frontend and backend

2. **Machine Learning Pipeline**
   - Pipeline pattern with clear stages (preprocess → train → validate → serve)
   - Multiple model evaluation (Logistic Regression, Random Forest)
   - Comprehensive validation suite with clinical safety metrics
   - Model selection based on combined metrics prioritizing clinical safety

3. **Active Learning Loop**
   - User feedback collected through the UI
   - Feedback stored with prediction details for context
   - Models retrained with accumulated feedback
   - Performance improvements tracked over time

4. **API-First Design**
   - FastAPI server with OpenAPI documentation
   - Clear schemas for requests and responses
   - Support for single and batch predictions
   - Health check and model information endpoints

## Notable Challenges and Solutions

1. **Challenge**: Synthetic data may not capture all real-world patterns
   **Solution**: Enhanced data simulator with more complex abnormality patterns and demographic-specific reference ranges

2. **Challenge**: Potential overfitting on synthetic data
   **Solution**: Implemented robust cross-validation, regularization, and temporal validation

3. **Challenge**: Limited feature engineering
   **Solution**: Created derived features based on reference ranges and clinical relevance

4. **Challenge**: Form becomes unwieldy with many test fields
   **Solution**: Implemented more intuitive data entry with organized form sections

5. **Challenge**: Limited mobile responsiveness
   **Solution**: Enhanced responsive design for better usability on smaller screens

## Key Learnings and Insights

1. **Clinical Safety Priority**: In healthcare applications, minimizing false negatives (missed abnormal results) is often more important than reducing false positives.

2. **Validation Complexity**: Healthcare ML models require comprehensive validation beyond standard metrics, including fairness across demographics and temporal stability.

3. **Active Learning Value**: Incorporating user feedback creates a continuously improving system that adapts to real-world usage patterns.

4. **Synthetic Data Limitations**: While synthetic data is valuable for development and testing, it has limitations in capturing the full complexity of real-world clinical data.

5. **UI/UX Balance**: Healthcare applications must balance comprehensive data collection with usability to be effective in clinical settings.

## Future Opportunities

With more time, the project could be enhanced with:

1. **EMR Integration**: Integration with real Electronic Medical Record systems through FHIR/HL7 standards
2. **Advanced ML Models**: Exploration of deep learning approaches for better performance
3. **Mobile Applications**: Development of mobile apps for on-the-go alerts
4. **Historical Trend Analysis**: Visualization of patient test results over time
5. **Comprehensive Audit Trail**: Full audit trail for clinical decision support

## Project Metrics

- **Hours Spent**: 6 hours
- **Completion Date**: March 17, 2025
- **Project Day**: 1 of 10
- **LLM Dollars Spent**: $13.94
- **New Technologies Learned**: scikit-learn
- **Skills Improved**: Python
- **Model Performance**: 
  - Accuracy: 0.87 (test set)
  - ROC AUC: 0.92 (test set)
  - Sensitivity: 0.95 (validation set)
  - Specificity: 0.75 (validation set)
  - F1 Score: 0.84 (test set)

## Conclusion

The Active Patient Follow-Up Alert Dashboard successfully demonstrates how machine learning can be applied to improve patient safety by reducing missed abnormal lab results. The system's focus on clinical safety, with high sensitivity and transparent explanations, addresses a critical healthcare need. The active learning approach ensures the system improves over time based on real-world usage, creating a continuously evolving solution. This project showcases both technical capabilities in full-stack development and machine learning, as well as domain knowledge in healthcare and clinical safety.