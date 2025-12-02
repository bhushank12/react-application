import React from 'react';
import "../UserInfo.css";
import { useTheme } from '../contexts/ThemeContext';
import { userInfo } from '../data/userInfo';

function UserInfo() {
  const {
    basicInformation,
    educationDetails,
    experianceDetails,
    technicalSkils,
    keyAchievments,
    summary,
  } = userInfo;

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard-container ${theme}`}>
      <section className="basic-info">
        <h1>{basicInformation.name}</h1>
        <h2>{basicInformation.title}</h2>
        <p>Total Experience: {basicInformation.totalExperiance}</p>
      </section>

    <section className="education-details">
        <h2>Education</h2>
        <ul>
          {educationDetails.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      <section className="experience-details">
        <h2>Experience</h2>
        {experianceDetails.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} at {exp.company}</h3>
            <p>{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="technical-skills">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          {technicalSkils.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="key-achievements">
        <h2>Key Achievements</h2>
        <ul>
          {Object.values(keyAchievments).map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>
    </div>
  );
}

export default UserInfo;
