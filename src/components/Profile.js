import React from "react";
import { userInfo } from "../data/userInfo";
import "../Profile.css";
import { useTheme } from '../contexts/ThemeContext';

function Profile() {
  const { userProfileData, experianceDetails } = userInfo;
  const { theme } = useTheme();

  return (
    <div className={`profile-container ${theme}`}>
      <section className="current-role">
        <h2>Profile Data</h2>
        <p>
          <strong>Name:</strong> {userProfileData.name}
        </p>
        <p>
          <strong>Title:</strong> {userProfileData.title}
        </p>
        <p>
          <strong>Company:</strong> {experianceDetails[0].company}
        </p>
        <p>
          <strong>Role:</strong> {experianceDetails[0].role}
        </p>
        <p>
          <strong>Experience:</strong> {userProfileData.totalExperiance}
        </p>
      </section>
    </div>
  );
}

export default Profile;
