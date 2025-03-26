import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-card">
      <h3>{member.name}</h3>
      <p>Job Title: {member.jobTitle}</p>
    </div>
  );
};

export default TeamMemberCard;
