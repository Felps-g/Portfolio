import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Lock, ArrowUpRight, Sun, Moon } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Volleyball Scouting & Analytics Platform',
    description:
      "A full-stack system for tracking volleyball athlete performance and match efficiency in real time. REST API in Node.js/Express with PostgreSQL (hosted on Supabase), and a JavaScript frontend with Chart.js for live performance views. Hardened with rate limiting, timing-safe key comparison, Helmet.js and strict CORS.",
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'API security'],
    repoUrl: 'https://github.com/Felps-g/SCOUT-VOLEIBOL-TCC',
    linkLabel: 'View repo',
  },
  {
    id: 3,
    title: 'Real-Time Weather Lookup',
    description:
      'A weather interface built in React integrating the OpenWeather API, with geolocation support and live data refresh. Deployed on Vercel.',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'Vercel'],
    repoUrl: 'https://github.com/Felps-g/CLima-api2',
    liveUrl: 'https://clima-api2.vercel.app/',
    linkLabel: 'View repo',
  },
  {
    id: 4,
    title: 'Restaurant Management REST API',
    description:
      'A CRUD API for managing restaurant records, built in Python with a SQL database and tested end-to-end in Postman — create, list, update and delete operations.',
    tags: ['Python', 'SQL', 'REST', 'Postman'],
    repoUrl: 'https://github.com/Felps-g/API-restful',
    linkLabel: 'View repo',
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Java', 'SQL'] },
  { label: 'Backend & data', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
  { label: 'Frontend', items: ['React', 'HTML/CSS', 'Chart.js'] },
  { label: 'Practices', items: ['API security hardening', 'Competitive programming (OBI)', 'Git'] },
];

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function Portfolio() {
  const [theme, setTheme] = useState(getInitialTheme);
  useScrollReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <span className="nav-name">Felipe Gianinni</span>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-icons">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={17} strokeWidth={1.75} /> : <Moon size={17} strokeWidth={1.75} />}
            </button>
            <a href="https://github.com/Felps-g" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a href="https://linkedin.com/in/felipe-g-99a05a329" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner" data-reveal>
            <p className="hero-kicker">Final-year student · Campinas, Brazil</p>
            <h1 className="hero-title">
              I build backend-heavy software<br />and make sure it holds up.
            </h1>
            <p className="hero-sub">
              Full-stack developer focused on Node.js, PostgreSQL and React — from REST
              APIs hardened against real abuse to interfaces people actually use. No
              professional title yet, just projects built, shipped and documented.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                See the work
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
              <a className="btn btn-secondary" href="mailto:felipegianinni33@gmail.com">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-inner" data-reveal>
            <h2>About</h2>
            <p>
              I learned to code by finishing things — APIs, dashboards, small
              integrations — rather than by following tutorials to the end
              and stopping. I pay as much attention to the parts nobody sees,
              like input validation and error handling, as to the parts that
              end up on screen. Competitive programming keeps the fundamentals
              sharp between projects, and I'm more interested in why a design
              decision was made than in which framework is trending.
            </p>
          </div>
        </section>

        <section id="work" className="work">
          <div className="section-head" data-reveal>
            <h2>Selected projects</h2>
            <p>Three projects that span the stack — a security-minded API, a live data integration, and a backend CRUD service.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="project"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="project-main">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {project.private ? (
                    <span className="project-link project-link-muted">
                      <Lock size={15} strokeWidth={1.75} />
                      Private client project
                    </span>
                  ) : (
                    <>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={15} strokeWidth={1.75} />
                        {project.linkLabel}
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={15} strokeWidth={1.75} />
                          Live demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="stack">
          <div className="section-head" data-reveal>
            <h2>Stack & practice</h2>
            <p>What I reach for, and what I keep practicing between projects.</p>
          </div>
          <div className="stack-grid">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className="stack-group"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-inner" data-reveal>
          <div>
            <h2>Let's talk</h2>
            <p>Open to internships, contract work and anything that involves building something real.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:felipegianinni33@gmail.com">
              <Mail size={16} strokeWidth={1.75} />
              felipegianinni33@gmail.com
            </a>
            <a href="https://github.com/Felps-g" target="_blank" rel="noopener noreferrer">
              <Github size={16} strokeWidth={1.75} />
              github.com/Felps-g
            </a>
            <a href="https://linkedin.com/in/felipe-g-99a05a329" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
          </div>
        </div>
        <p className="footer-note">© 2026 Felipe Gianinni.</p>
      </footer>
    </div>
  );
}
