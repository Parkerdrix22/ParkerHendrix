import React from "react";
import "./Resume.css";

const Resume = () => (
  <div>
    {/* Header */}
    <div className="resume-header">
      <p>RESUME</p>
    </div>

    {/* PDF Viewer */}
    <div className="resume-pdf-container">
      <embed
        src="./resume.pdf"
        type="application/pdf"
        width="70%"
        style={{ height: "100vh" }}
      />
    </div>
  </div>
);

export default Resume;