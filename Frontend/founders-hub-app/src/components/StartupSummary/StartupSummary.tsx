import React from 'react';

interface StartupSummaryProps {
  name: string;
  industry: string;
  stage: string;
  description: string;
  founderNames: string[];
  fundingStatus: string;
  goals: string[];
  technologies: string[];
}

const StartupSummary: React.FC<StartupSummaryProps> = ({
  name,
  industry,
  stage,
  description,
  founderNames,
  fundingStatus,
  goals,
  technologies,
}) => {
  return (
    <div style={styles.container}>
      <h2>Startup Summary</h2>
      <div style={styles.summarySection}>
        <strong>Name:</strong> {name}
      </div>
      <div style={styles.summarySection}>
        <strong>Industry:</strong> {industry}
      </div>
      <div style={styles.summarySection}>
        <strong>Stage:</strong> {stage}
      </div>
      <div style={styles.summarySection}>
        <strong>Description:</strong> <p>{description}</p>
      </div>
      <div style={styles.summarySection}>
        <strong>Founders:</strong> {founderNames.join(', ')}
      </div>
      <div style={styles.summarySection}>
        <strong>Funding Status:</strong> {fundingStatus}
      </div>
      <div style={styles.summarySection}>
        <strong>Goals:</strong>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
      <div style={styles.summarySection}>
        <strong>Technologies:</strong>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '80%',
    margin: '20px auto',
  },
  summarySection: {
    marginBottom: '15px',
  },
};

export default StartupSummary;
