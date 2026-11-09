import { useState, useEffect } from "react";
import profileImage from "./assets/boy.png";
import {
  
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [turtleImage, setTurtleImage] = useState(
    "/turtles/turtle-hover-assets/turtle-3.png"
  );

  const handleTurtleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const horizontal = x - centerX;
  const vertical = y - centerY;

  if (horizontal < -120 && vertical < -80) {
    setTurtleImage(
      "/turtles/turtle-hover-assets/turtle-1.png"
    );
  } else if (horizontal > 120 && vertical < -80) {
    setTurtleImage(
      "/turtles/turtle-hover-assets/turtle-2.png"
    );
  } else if (Math.abs(horizontal) < 120 && Math.abs(vertical) < 100) {
    setTurtleImage(
      "/turtles/turtle-hover-assets/turtle-3.png"
    );
  } else if (horizontal < 0) {
    setTurtleImage(
      "/turtles/turtle-hover-assets/turtle-4.png"
    );
  } else {
    setTurtleImage(
      "/turtles/turtle-hover-assets/turtle-5.png"
    );
  }
};
  return (
    <div className="portfolio">

      {/* Navbar */}
       <nav className="navbar">
  <a href="#home" className="logo">
    SIMHA3
  </a>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

    <a href="#education" onClick={() => setMenuOpen(false)}>
      Education
    </a>
  </div>
   <a href="#contact" className="nav-button">
          Let's Talk
        </a>
</nav>

      {/* Hero Section */}
      <main id="home" className="hero">

        <div className="hero-content">

          <p className="hello">
             I'm
          </p>

          <h1 className="hero-title">
            Simhadri
            <span> Nalagondla</span>
          </h1>

          <h2 className="hero-title">
            Full Stack 
              <span> Developer</span>
          </h2>
           
          

          <p className="hero-description">
            Building exceptional digital experiences that combine innovative design with robust engineering. Specialized in MERN Stack and AI applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Projects
              <ArrowDown size={18} />
            </a>

            <a
                href="/resume.pdf"
                download="Simhadri_Nalagondla_Resume.pdf"
                className="secondary-button"
                >
                Download Resume
                <Download size={18} />
                  </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/nalagondlasimhadri"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
               <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/simhadri-nalagondla/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nalagondlasimhadri@gmail.com"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

          </div>

        </div>

        {/* Profile */}
        <div className="hero-image-container">

          <div className="image-glow"></div>

          <div className="profile-placeholder">
            <img src={profileImage} alt="Simhadri Nalagondla" />
          </div>

        </div>

      </main>
      {/* About Section */}
      
<section id="about" className="about-section">
  <div className="about-container">

    {/* Left - Profile Image */}
    <div className="about-image-wrapper">
      <div className="about-image-frame">
        <img
          src={profileImage}
          alt="Simhadri Nalagondla"
        />
      </div>
    </div>

    {/* Right - About Content */}
    <div className="about-content">

      <p className="section-label">ABOUT ME</p>

      <h2>
        Building Digital Projects wth
        <span> Passion & Purpose</span>
      </h2>

      <p className="about-description">
        I'm a Computer Science Engineering student at Audisankara Engineering College with a deep obsession for full-stack development. I combine technical precision with creative problem-solving to build applications that don't just work—they excel.
      </p>

     

      {/* Info Cards */}
       <div className="about-stats">

  <div className="about-stat">
    <div className="about-stat-icon">💻</div>
    <div>
      <h3>15+</h3>
      <p>PROJECTS</p>
    </div>
  </div>

  <div className="about-stat">
    <div className="about-stat-icon">🧠</div>
    <div>
      <h3>90+</h3>
      <p>DSA PROBLEMS</p>
    </div>
  </div>

  <div className="about-stat">
    <div className="about-stat-icon">🎥</div>
    <div>
      <h3>CONTENT</h3>
      <p>CREATOR</p>
    </div>
  </div>

</div>

      {/* Philosophy Card */}
      <div className="philosophy-card">
        <div className="philosophy-icon">💡</div>

        <div>
          <h3>My Philosophy</h3>
          <p>
             I believe that every line of code should contribute to a seamless user experience. My goal is to bridge the gap between complex backend logic and intuitive frontend design.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Skills Section */}
<section id="skills" className="skills-section">
  <div className="section-container">
    <p className="section-label">MY SKILLS</p>

    <h2>Technologies I <span>work with.</span></h2>

    <p className="skills-intro">
      Here are some of the technologies and tools I'm currently learning
      and using to build projects.
    </p>

    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon">🌐</div>
        <h3>HTML</h3>
        <p>Building structured and accessible web pages.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🎨</div>
        <h3>CSS</h3>
        <p>Creating responsive and modern user interfaces.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚡</div>
        <h3>JavaScript</h3>
        <p>Adding functionality and interactivity to websites.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚛️</div>
        <h3>React</h3>
        <p>Building component-based modern web applications.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🐍</div>
        <h3>Python</h3>
        <p>Learning programming, automation and problem solving.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🔧</div>
        <h3>Git & GitHub</h3>
        <p>Managing code and collaborating on projects.</p>
      </div>
    </div>
  </div>
</section>
{/* Projects Section */}
<section id="projects" className="projects-section">
  <div className="section-container">
    <p className="section-label">MY PROJECTS</p>

    <h2>Things I've <span>built.</span></h2>

    <p className="projects-intro">
      A few projects that showcase my learning, creativity, and
      development skills.
    </p>

    <div className="projects-grid">

      <div className="project-card">
        <div className="project-number">01</div>

        <h3>Personal Portfolio</h3>

        <p>
          A responsive personal portfolio website built with React,
          showcasing my skills, projects, and contact information.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>Vite</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>
      </div>


      <div className="project-card">
        <div className="project-number">02</div>

        <h3>ML-ChatBot</h3>

        <p>
           AceChat –  Academic ML Chatbot :Developed a machine learning-based chatbot & Built an application integrating backend APIs, AI-powered evaluation workflows, structured outputs, and automated reporting.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
         
         <a
             href="https://ml-chatbot-gilt.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="project-link"
             >
            View Project <span>↗</span>
</a>
      </div>


      <div className="project-card">
        <div className="project-number">03</div>

        <h3>Python Project</h3>

        <p>
          A Python-based project created to practice programming,
          problem solving, and application development.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Programming</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>
      </div>

    </div>
  </div>
</section>
{/* Education Section */}
<section id="education" className="education-section">
  <div className="section-container">
    <p className="section-label">EDUCATION</p>

    <h2>My <span>academic journey.</span></h2>

    <p className="education-intro">
      My educational background and the journey that helped me
      develop my technical and problem-solving skills.
    </p>

    <div className="education-timeline">

      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-year">2023 — Present</span>

          <h3>Bachelor's Degree</h3>

          <h4>Computer Science & Engineering</h4>

          <p>
            Currently pursuing my bachelor's degree  at audisankara university and building a
            strong foundation in programming, web development,
            databases, and software engineering.
          </p>
        </div>
      </div>


      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-year">2021 — 2023</span>

          <h3>Intermediate / Higher Secondary</h3>

          <h4>Your College Name</h4>

          <p>
            Completed higher secondary education with a focus on
            developing analytical, mathematical, and technical skills.
          </p>
        </div>
      </div>


      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-year">2011 — 2021</span>

          <h3>Secondary School</h3>

          <h4>Your School Name</h4>

          <p>
            Completed secondary education and developed an interest
            in technology and computer science.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="section-container contact-container">
    <p className="section-label">CONTACT</p>

    <h2>Let's build something <span>together.</span></h2>

    <p className="contact-intro">
      Have a project idea, collaboration opportunity, or just want to
      say hello? Feel free to reach out.
    </p>

    <div className="contact-buttons">
      <a
        href="mailto:nalagondlasimhadri@gmail.com"
        className="primary-button"
      >
        <Mail size={18} />
        Send Me an Email
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="secondary-button"
      >
        LinkedIn
      </a>
    </div>

    <div className="contact-details">
      <p>📧 nalagondlasimhadri@gmail.com</p>
      <p>📍 India</p>
    </div>
  </div>
</section>


      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </div>

    </div>
  );
}

export default App;