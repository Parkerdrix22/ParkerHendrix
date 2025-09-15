import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import aboutme1 from "../assets/aboutme1.jpg";
import aboutme2 from "../assets/aboutme2.jpg";
import "../App.css";

const Base = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="base-layout">
      {/* Page Title */}
      <title>Parker Hendrix</title>

      {/* Header/Nav */}
      <header>
        <nav className="navbar">
          <div className="nav-left">
            {/* 👇 logo on the left */}
            <Link to="/">
                <img src="/favicon-32x32.png" alt="Logo" className="nav-logo" />
            </Link>
          </div>

          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            {isHome && <li><a href="#aboutme">ABOUT ME</a></li>}
            <li><Link to="/Projects">PROJECTS</Link></li>
            <li><Link to="/Resume">RESUME</Link></li>
            {isHome && <li><a href="#contact">CONTACT</a></li>}
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* About Me + Contact only on Home */}
      {isHome && (
        <>
          <section id="aboutme">
            <h2>ABOUT ME</h2>
            <div className="aboutme-container">
              <div className="aboutme-box aboutme1-box">
                <img src={aboutme1} alt="aboutme 1" />
              </div>
              <div className="aboutme-box urgent-box">
                <h3>WEB DEVELOPMENT</h3>
              </div>
              <div className="aboutme-box events-box">
                <h3>STEM-CERTIFIED IS PROGRAM at BYU</h3>
                <p>
                  I was recently accepted into the <strong>Information Systems program</strong> at the 
                  <strong> BYU Marriott School of Business</strong>, where I will continue developing both my 
                  technical expertise and overall business knowledge. Over the next two semesters, I will 
                  be taking the following courses:
                </p>
                <ul>
                  <li>IS 401 – Project Management & Systems Design</li>
                  <li>IS 402 – Database Systems</li>
                  <li>IS 403 – Principles of Business Programming</li>
                  <li>IS 404 – Data Communications</li>
                  <li>IS 413 – Enterprise Application Development</li>
                  <li>IS 414 – Information Systems Security & Controls</li>
                  <li>IS 415 – Machine Learning</li>
                  <li>IS 455 – Predictive Data Analytics</li>
                </ul>
              </div>

              <div className="aboutme-box aboutme2-box">
                <img src={aboutme2} alt="aboutme 2" />
              </div>
              <div className="aboutme-box aboutme1-box">
                <img src={aboutme1} alt="aboutme 1" />
              </div>
              <div className="aboutme-box urgent-box">
                <h3>WEB DEVELOPMENT</h3>
                <p>
                  I’m a web developer at BYU Production Services, where I focus on modernizing legacy systems and building efficient, reliable web applications. My work includes:
                </p>
                <ul>
                  <li>
                    Reengineering 3+ legacy Pascal systems into automated web apps (Python/Flask, Angular, Oracle), eliminating 10+ hours of manual work weekly and saving the department $20K+ annually.
                  </li>
                  <li>
                    Designing and implementing responsive interfaces (HTML, TypeScript, Tailwind) and secure APIs, deploying applications with Docker and Git to improve reliability and streamline development.
                  </li>
                  <li>
                    Developing an internal shipment validation program that processes 500+ records weekly and reduces billing errors by 20%, increasing pre-billing accuracy.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contact">
            <h2>CONTACT INFO</h2>
            <div className="contact-container">
              <div className="contact-box">

                {/* Phone */}
                <div className="contact-section">
                  <div className="icon-circle">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                    >
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                    </svg>
                  </div>
                  <div>
                    <div>(702) 494-9011</div>
                    <div>parkerdrix@hotmail.com</div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="contact-section">
                  <div className="icon-circle linkedin-circle">
                    <span className="linkedin-in">in</span>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/parker-hendrix-byu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.linkedin.com/in/parker-hendrix-byu/
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-section">
                  <div className="icon-circle">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>Provo, UT</div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer>
        <p>
          &copy; Web Developer | Python & UI/UX design | STEM-Certified IS Program | BYU Grad Fall 2027
        </p>
      </footer>
    </div>
  );
};

export default Base;
