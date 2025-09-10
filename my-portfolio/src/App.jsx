import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Github, Linkedin, Mail, ArrowDown, Code, BrainCircuit, Server, Database } from 'lucide-react';

// --- Interactive Particles Background Configuration ---
const particlesOptions = {
    background: {
        color: {
            value: '#0d1117',
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#38bdf8',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 1.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};


// --- Data extracted from your resume and GitHub ---
const portfolioData = {
    name: "Ashwin Premani",
    tagline: "Crafting Intelligent Systems, from Pixels to Petabytes.",
    about: "Aspiring Software Engineer with a strong foundation in building scalable systems and a passion for solving complex challenges in AI and machine learning. I thrive in fast-paced environments, transforming innovative ideas into robust, high-quality software.",
    contact: {
        email: "ashwinpremanil@gmail.com",
        linkedin: "https://linkedin.com/in/ashwin-premani",
        github: "https://github.com/Ashwin-premani",
    },
    skills: [
        { name: "Python", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "JavaScript", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "C++", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "Java", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "Node.js", icon: <Server style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "React", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "SQL", icon: <Database style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "MongoDB", icon: <Database style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "TensorFlow", icon: <BrainCircuit style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "Scikit-learn", icon: <BrainCircuit style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "Generative AI", icon: <BrainCircuit style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
        { name: "Git", icon: <Code style={{ width: '2rem', height: '2rem', margin: '0 auto' }} /> },
    ],
    experience: [
        {
            role: "Research Assistant",
            company: "Lassonde School of Engineering, York University",
            date: "Jun 2025 – Present",
            description: "Researching transformer architectures for Dynamic Blockage Prediction in Millimeter Wave Cellular Networks. Implementing and testing predictive models in Python and TensorFlow."
        },
        {
            role: "Machine Learning Intern",
            company: "NeuroNexus Innovations",
            date: "", // Date not specified in resume
            description: "Developed a credit card fraud detection model on a large-scale, imbalanced financial dataset, applying rigorous data preprocessing, feature engineering, and model tuning."
        },
    ],
    projects: [
        {
            title: "DL-Powered LoS Blockage Prediction in 6G Networks",
            description: "A hybrid deep learning model combining Vision Transformers (ViT), CNNs, and a GRU to predict Line-of-Sight blockages in 6G vehicular networks.",
            tags: ["Python", "TensorFlow", "ViT", "CNN", "GRU"],
            link: "https://github.com/Ashwin-premani"
        },
        {
            title: "Scalable Real Estate Platform",
            description: "Full-stack system with a scalable backend using Node.js and optimized databases (MongoDB/PostgreSQL), with secure JWT authentication and a responsive React frontend.",
            tags: ["Node.js", "React", "MongoDB", "PostgreSQL", "JWT"],
            link: "https://github.com/Ashwin-premani"
        },
        {
            title: "Modular Healthcare Prediction Platform",
            description: "A modular Python/Flask platform integrating multiple disease prediction models with over 90% accuracy, visualized on an interactive React dashboard.",
            tags: ["Python", "Flask", "React", "Machine Learning"],
            link: "https://github.com/Ashwin-premani"
        },
    ]
};

// --- Embedded CSS Styles ---
const GlobalStyles = () => (
    <style>{`
        :root {
            --bg-color: #0d1117;
            --primary-text: #e2e8f0;
            --secondary-text: #94a3b8;
            --accent-color: #38bdf8;
            --accent-color-dark: #0ea5e9;
            --card-bg: #1e293b;
            --border-color: #334155;
        }
        body {
            background-color: var(--bg-color);
            color: var(--primary-text);
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        main { position: relative; z-index: 10; }
        .section {
            padding: 5rem 1rem;
        }
        .section-title {
            font-size: 2.25rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            color: var(--accent-color);
        }
        .max-w-6xl { max-width: 72rem; margin-left: auto; margin-right: auto; }
        .bg-dark { background-color: rgba(15, 23, 42, 0.5); }
        
        /* Hero Section */
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; position: relative; }
        .hero-content { z-index: 10; padding: 1rem; }
        .hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
        .hero-tagline { font-size: 1.25rem; color: var(--accent-color); margin-bottom: 2rem; }
        .hero-scroll-down { position: absolute; bottom: 2.5rem; z-index: 10; animation: bounce 2s infinite; }
        
        /* Social Links */
        .social-links { display: flex; justify-content: center; margin-top: 2rem; gap: 1.5rem; }
        .social-links a { color: var(--secondary-text); transition: color 0.3s; }
        .social-links a:hover { color: var(--accent-color); }
        
        /* About Section */
        .about-text { max-width: 48rem; margin: 0 auto; text-align: center; font-size: 1.125rem; line-height: 1.75; color: var(--secondary-text); }
        
        /* Skills Section */
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .skill-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem; background-color: var(--card-bg); border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: all 0.3s; }
        .skill-card:hover { transform: translateY(-0.5rem); box-shadow: 0 0 15px rgba(56, 189, 248, 0.2); }
        .skill-card-icon { color: var(--accent-color); margin-bottom: 0.75rem; }
        .skill-card-name { font-weight: 600; color: var(--primary-text); }

        /* Experience Section */
        .timeline { position: relative; max-width: 42rem; margin: 0 auto; }
        .timeline::after { content: ''; position: absolute; width: 2px; background-color: var(--border-color); top: 0; bottom: 0; left: 50%; margin-left: -1px; }
        .timeline-item { position: relative; margin-bottom: 3rem; }
        .timeline-dot { position: absolute; left: 50%; top: 0.375rem; transform: translateX(-50%); width: 1rem; height: 1rem; background-color: var(--accent-color); border-radius: 50%; border: 4px solid #0f172a; z-index: 1; }
        .timeline-content-container { width: 100%; display: flex; }
        .timeline-content-container.right { justify-content: flex-end; }
        .timeline-content { width: 50%; padding: 1.5rem; background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .timeline-item:nth-child(odd) .timeline-content { text-align: right; padding-right: 2rem; }
        .timeline-item:nth-child(even) .timeline-content { text-align: left; padding-left: 2rem; }
        .timeline-role { font-size: 1.25rem; font-weight: 700; color: var(--accent-color); }
        .timeline-company { color: var(--secondary-text); margin-bottom: 0.5rem; }
        .timeline-date { font-size: 0.875rem; color: #64748b; margin-bottom: 0.75rem; }

        /* Projects Section */
        .projects-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 2rem; }
        .project-card { background-color: var(--card-bg); border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; display: flex; flex-direction: column; border: 1px solid var(--border-color); transition: border-color 0.3s; }
        .project-card:hover { border-color: rgba(56, 189, 248, 0.5); }
        .project-card-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;}
        .project-card-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--accent-color); }
        .project-card-desc { color: var(--secondary-text); margin-bottom: 1rem; flex-grow: 1; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
        .project-tag { background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 9999px; }
        .project-link { display: inline-flex; align-items: center; color: var(--accent-color); font-weight: 600; transition: color 0.3s; }
        .project-link:hover { color: #7dd3fc; }
        .project-link svg { margin-left: 0.5rem; width: 1rem; height: 1rem; }
        
        /* Contact Section */
        .contact-content { text-align: center; max-width: 42rem; margin: 0 auto; }
        .contact-text { font-size: 1.125rem; color: var(--secondary-text); margin-bottom: 2rem; }
        .contact-button { display: inline-block; background-color: var(--accent-color); color: white; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.5rem; transition: background-color 0.3s; text-decoration: none; font-size: 1.125rem; }
        .contact-button:hover { background-color: var(--accent-color-dark); }
        
        /* Footer */
        .footer { padding: 2rem 0; text-align: center; color: var(--secondary-text); }

        /* Animations */
        @keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }

        /* Responsive Breakpoints */
        @media (min-width: 768px) {
            .section { padding: 5rem 2rem; }
            .hero-title { font-size: 4.5rem; }
            .hero-tagline { font-size: 1.5rem; }
            .skills-grid { grid-template-columns: repeat(4, 1fr); }
            .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
            .section { padding: 5rem 4rem; }
            .skills-grid { grid-template-columns: repeat(6, 1fr); }
            .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
    `}</style>
);


// --- Reusable Components ---
const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`section ${className}`}>
        <div className="max-w-6xl">
            <h2 className="section-title">{title}</h2>
            {children}
        </div>
    </section>
);

const SocialLinks = () => (
    <div className="social-links">
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"><Github size={28} /></a>
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={28} /></a>
        <a href={`mailto:${portfolioData.contact.email}`}><Mail size={28} /></a>
    </div>
);

// --- Page Sections ---
const HeroSection = () => (
    <div className="hero">
        <div className="hero-content">
            <h1 className="hero-title">{portfolioData.name}</h1>
            <p className="hero-tagline">{portfolioData.tagline}</p>
            <SocialLinks />
        </div>
        <div className="hero-scroll-down">
            <a href="#about" aria-label="Scroll to about section">
                <ArrowDown style={{ width: '2rem', height: '2rem', color: '#94a3b8' }} />
            </a>
        </div>
    </div>
);

const AboutSection = () => (
    <Section id="about" title="About Me">
        <p className="about-text">{portfolioData.about}</p>
    </Section>
);

const SkillsSection = () => (
    <Section id="skills" title="Technical Skills" className="bg-dark">
        <div className="skills-grid">
            {portfolioData.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <div className="skill-card-icon">{skill.icon}</div>
                    <p className="skill-card-name">{skill.name}</p>
                </div>
            ))}
        </div>
    </Section>
);

const ExperienceSection = () => (
    <Section id="experience" title="Experience">
        <div className="timeline">
            {portfolioData.experience.map((job, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className={`timeline-content-container ${index % 2 === 0 ? '' : 'right'}`}>
                        <div className={`timeline-content ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            <h3 className="timeline-role">{job.role}</h3>
                            <p className="timeline-company">{job.company}</p>
                            <p className="timeline-date">{job.date}</p>
                            <p>{job.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ProjectsSection = () => (
    <Section id="projects" title="Projects" className="bg-dark">
        <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="project-card-content">
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                            ))}
                        </div>
                         <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View on GitHub <Github />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ContactSection = () => (
    <Section id="contact" title="Get In Touch">
        <div className="contact-content">
            <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
            </p>
            <a href={`mailto:${portfolioData.contact.email}`} className="contact-button">
                Say Hello
            </a>
            <SocialLinks />
        </div>
    </Section>
);

const Footer = () => (
    <footer className="footer bg-dark">
        <div className="max-w-6xl">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <div>
            <GlobalStyles />
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
            />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

