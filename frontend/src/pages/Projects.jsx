import React from "react";
import { Link } from "react-router-dom"; // if using React Router
import "./projects.css"; // keep your page-specific styles

const Projects = () => (
  <div>
    <div className="projects-header">
      <p>PROJECTS</p>
    </div>

    {/* PDF Embed */}
    <div className="resume-pdf-container">
      <embed
        src="./Projects.pdf"
        type="application/pdf"
        width="70%"
        style={{ height: "100vh" }}
      />
    </div>

    {/* Link to Pokémon page */}
    <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a href="/pokemon" className="pokemon-link">Play My Pokémon Game</a>
    </div>
  </div>
);

export default Projects;


