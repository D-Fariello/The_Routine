import React from "react";
import team from "../data/team.json";

const TeamSection = () => {
  return (
    <section className="team" aria-labelledby="team-title">
      <h2 id="team-title" className="team__title">
        À propos du podcast
      </h2>

      <div className="team__members">
        {team && team.length > 0 ? (
          team.map((person) => (
            <div className="team__card" key={person.id}>
              <img
                src={person.image}
                alt={`${person.name} — ${person.role}`}
                loading="lazy"
              />
              <div className="team__overlay">
                <h3>{person.name}</h3>
                <h4>{person.role}</h4>
                <p>{person.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="team__empty">
            <p>
              L’équipe sera bientôt dévoilée. Restez à l’écoute de{" "}
              <strong>The Routine</strong> !
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
