import React from "react";
import "./SkillsCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`} // Use backticks for template literals
      onClick={onClick} // Directly pass onClick function
    >
      <div className="skills-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
