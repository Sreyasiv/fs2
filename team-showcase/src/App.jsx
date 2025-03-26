import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";

function App() {
  const Members = [
    {
      id: 1, // Use `id` instead of `div=1`
      name: "John Doe",
      jobTitle: "SDE",
    },
    {
      id: 2, // Use `id` instead of `div=2`
      name: "Megan",
      jobTitle: "Manager",
    },
  ];

  return (
    <div>
      <h1>About Us</h1>
      <div className="Team-List">
        {Members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default App;
