"use client";

import "./portfolio.css";
import ParticleBackground from "@/components/ParticleBackground";
import TypingText from "./TypingText";


const projects = [
  {
    title: "Prompt Eval",
    status: "Completed",
    image: "/images/projects/prompt-eval.png",
    description:
      "A tool for comparing AI responses across different prompt techniques and checking their quality.",
    tags: ["Prompt evaluation", "API usage", "SQLite" , "Python" , "React" , "Next.js"],
    github: "https://github.com/OrevaEvelyn01/prompt-grade-app",
  },
  {
  title: "InkPress",
  description:
    "A book review app where readers can explore books and share their thoughts and reviews.",
  image: "/images/projects/inkpress.png",
  tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
  github: "https://github.com/OrevaEvelyn01/inkpress.git",
  status: "Completed",
},
  {
    title: "WajuHeavens",
    status: "Completed",
    image: "/images/projects/wajuheavens.png",
    description:
      "A wedding website designed to bring wedding information together in one place.",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/OrevaEvelyn01/wajuheavens",
  },
  {
    title: "Hisgates Christian Hub",
    status: "In progress",
    image: "/images/projects/hisgates.png",
    description:
      "A website for sharing fellowship information, events and church resources. Still in progress.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github:
      "https://github.com/OrevaEvelyn01/his-gates-christian-hub",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Database",
  "API usage",
];

export default function Home() {
  return (
    <main className="portfolio-shell" id="top">
      <ParticleBackground />

      <div className="site-content">
        <header className="nav-wrap">
          <a href="#top" className="wordmark">
            <span className="wordmark-star">✦</span>
            Orevaoghene Obison
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a
              className="outline-button small-button"
              href="https://github.com/OrevaEvelyn01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              className="outline-button small-button"
              href="/cv.pdf"
              download
            >
              Download CV ↓
            </a>
          </div>
        </header>

        <section className="hero section-width">
          <div className="profile-wrap">
            <div className="profile-orbit" />

            <div className="profile-frame">
              <img
                src="/images/profile.png"
                alt="Evelyn"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="profile-fallback">
                <span className="photo-symbol">＋</span>
                <span>Add your photo</span>
              </div>
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Hello, I'm</p>

            <h1>
              Orevaoghene Obison<span className="name-period">.</span>
            </h1>

            <p className="hero-role">
               Computer Science Graduate
              <span>·</span>
              Web Developer
            </p>

            <p className="hero-description">
              I enjoy building <TypingText /> and learning by making things.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                See my projects <span>→</span>
              </a>

              <a
                className="outline-button"
                href="https://github.com/OrevaEvelyn01"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a className="outline-button" href="#contact">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>✦</span>
        </div>

        <section className="intro-grid section-width" id="about">
          <div className="about-block">
            <p className="section-kicker">A little about me</p>

            <h2>Hi, nice to meet you.</h2>

            <p>
              I'm a Computer Science graduate who enjoys
              working on web projects and learning by building. I like
              making websites that are clear, useful and pleasant to use.
            </p>

            <a className="text-link" href="#contact">
              Get in touch <span>→</span>
            </a>
          </div>

          <div className="skills-block" id="skills">
            <p className="section-kicker">Tools I work with</p>

            <h2>My skills</h2>

            <div className="skill-list">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <p className="skills-note">
              I'm still learning and improving through hands-on projects.
            </p>
          </div>
        </section>

        <div className="section-divider">
          <span>✦</span>
        </div>

        <section
          className="projects-section section-width"
          id="projects"
        >
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">
                Things I've been working on
              </p>
              <h2>Selected projects</h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/OrevaEvelyn01"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <span>↗</span>
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="image-placeholder">
                    <span>Project screenshot</span>
                    <small>{project.image.split("/").pop()}</small>
                  </div>

                  {project.status && (
                    <span
                      className={`project-status ${
                        project.status === "Featured"
                          ? "featured-status"
                          : ""
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="project-card-body">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source code <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>


       
      </div>
    </main>
  );
}