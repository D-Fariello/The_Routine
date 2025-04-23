import React from "react";
import team from "../data/team.json";

const TeamSection = () => {
  return (
    <section className="team">
      <h2 className="team__title">Il nostro team</h2>
      <div className="team__members">
        {team.map((person) => (
          <div className="team__card" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="team__overlay">
              <h3>{person.name}</h3>
              <h4>{person.role}</h4>
              <p>{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
