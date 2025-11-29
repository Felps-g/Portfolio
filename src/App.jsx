import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Triangle } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: "API RESTful (CRUD para restaurantes)",
      description: "Uma aplicação web moderna construída com Python e SQL, testada no Postman, CRUD. Inclui criação de novos restaurantes, listar os restaurantes, alterar os restaurantes existentes, e deletar cadastrados.",
      tags: ["Python", "SQL", "PostMan"],
      repoUrl: "https://github.com/Felps-g/API-restful"
    },
    {
      id: 2,
      title: "Landing Page (Animações)",
      description: "Landing Page do filme Oppenheimer, teste para diversas animações no site. Desenvolvida em React, Node.js e JavaScript. Com deploy na Vercel ",
      tags: ["React", "Node.js", "Vercel"],
      
      repoUrl: "https://animation-landing-one.vercel.app/"
    },
    {
      id: 3,
      title: "Interface e integração da API OpenWeather",
      description: "Interface completa com barra de pesquisa, ícones e a integração da API de clima OpenWeather. Funcionalidades incluem geolocalização, e atualização em tempo real. Deploy na Vercel",
      tags: ["React", "Node.js", "Vercel"],
      
      repoUrl: "https://clima-api2.vercel.app/"
    },
    {
      id: 4,
      title: "Página de anúncios Nike",
      description: "Página de anúncios, com slider de produtos e vídeos. Desenvolvido com React, Node.js e utilizando Swiper e deploy na Vercel.",
      tags: ["React", "Node.js", "Vercel"],
      repoUrl: "https://slider-ex-nike.vercel.app/"
    },
    {
      id: 5,
      title: "Checklist Windows",
      description: "Formulário em checkbox para descobrir quantos % sua máquina windows está segura, com base nas medidas marcadas. Desenvolvido em React, e Node.js e deploy na Vercel",
      tags: ["Node.js", "React", "Vercel"],
      repoUrl: "https://checklist-windows-zeta.vercel.app/"
    },
    {
      id: 6,
      title: "Landing page de Vendas",
      description: "E-book completo com integração completa para página de checkout. Utiliza HTML, CSS, e JavaScript. ",
      tags: ["HTML", "CSS", "JavaScript"],
      repoUrl: "https://github.com/Felps-g/Focus21"
    }
  ]);

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <div className="header-content">
          <h1 className="header-title">Portfólio</h1>
          <div className="social-links">
            <a href="https://github.com/Felps-g" target="_blank" rel="noopener noreferrer" 
               className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/felipe-g-99a05a329" target="_blank" rel="noopener noreferrer"
               className="social-link">
              <Linkedin size={24} />
            </a>
            {/* alterar o links corretamente */}
            <a href="https://gmail.com/felipegianinni33@gmail.com"
               className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Prazer, sou <span className="hero-highlight">Dev Felipe Gianinni</span>
          </h2>
          <p className="hero-description">
            Desenvolvedor Front-End apaixonado por criar soluções criativas.
            Especializado em React, Node.js e as tecnologias mais atuais no mercado.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3 className="projects-title">Meus Projetos</h3>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Triangle size={20} />
                Ver Projeto
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p>© 2025 Meu Portfólio. Desenvolvido por Felipe Gianinni</p>
        </div>
      </footer>
    </div>
  );
}