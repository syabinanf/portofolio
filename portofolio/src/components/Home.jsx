import { icons } from '../assets/icons';
import flutterLogo from '../assets/flutter-logo.png';
import hermesLogo from '../assets/hermes.jfif?url';
import n8nLogo from '../assets/n8n.svg';
import { profile } from '../const/profile';
import FeaturedQuests from './FeaturedQuests';
import { useState } from 'react';
import ProfileCard from './Id_card';
import { FaEnvelope, FaDownload, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Projects from '../components/Projects';
import Certification from './Certification';
import PixelLandscape from './PixelLandscape';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '3.79', label: 'GPA' },
  { value: '5+', label: 'Projects' },
  { value: 'Informatics', label: 'Engineering graduate' },
];

const focusAreas = [
  {
    title: 'Curriculum Development',
    desc: 'Turning complex AI concepts into structured modules, practical exercises, and learning materials tailored to each audience’s work.',
  },
  {
    title: 'Applied AI Training',
    desc: 'Helping teachers, public-sector staff, and business professionals connect AI fundamentals with tasks they handle every day.',
  },
  {
    title: 'Workflow Automation',
    desc: 'Developing and teaching n8n workflows for chatbots, reporting, email, and lead management, with a focus on reducing repetitive work.',
  },
];

const skillGroups = [
  {
    title: 'Soft Skills',
    items: ['Problem Solving', 'Communication', 'Time Management', 'Adaptability', 'Analytical Thinking'],
  },
  {
    title: 'Leadership',
    items: ['Team Leadership', 'Stakeholder Engagement', 'Strategic Communication'],
  },
  {
    title: 'Technical',
    items: ['Data Analysis', 'UI/UX Design', 'Web Development', 'Mobile Development'],
  },
];

function ScrollReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''}`}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [generatingCv, setGeneratingCv] = useState(false);
  const [cvError, setCvError] = useState('');
  const handleDownloadCv = async () => {
    setGeneratingCv(true);
    setCvError('');
    try {
      const { downloadCv } = await import('../utils/generateCv');
      downloadCv();
    } catch {
      setCvError('Unable to generate the CV. Please try again.');
    } finally {
      setGeneratingCv(false);
    }
  };
  return (
    <div className="portfolio-page">
      <section className="section-shell hero-shell" id="home">
        <div className="container">
          <div className="hero-grid">
            <div>
              <ScrollReveal>
                <div className="hero-copy">
                  <span className="section-kicker">The adventurer’s journal · Portfolio</span>
                  <h1>
                    Hi, I’m Syabina.<br />
                    <span>Learning is<br />an adventure.</span>
                  </h1>
                  <p className="hero-role">Applied AI trainer · Curriculum developer · Software developer</p>
                  <ul className="hero-skills" aria-label="Primary skills">
                    <li>AI Training</li><li>Curriculum Development</li><li>Automation</li>
                  </ul>
                  <p className="hero-summary-desktop">
                    {profile.summary}
                  </p>
                  <div className="hero-summary-mobile">
                    <p>I train, design curricula, and build practical web and mobile solutions for real-world work.</p>
                    <details>
                      <summary>More about my background</summary>
                      <p>{profile.summary}</p>
                    </details>
                  </div>

                  <div className="cta-row">
                    <Link className="primary-btn" to="/projects">Explore missions <span aria-hidden="true">→</span></Link>
                    <button
                      className="secondary-btn"
                      type="button"
                      onClick={() => {
                        window.open(
                          'https://mail.google.com/mail/?view=cm&fs=1&to=syabinanurpajriyanti@gmail.com&su=Halo%20Syabina&body=Perkenalkan%2C%20saya%20ingin%20terhubung%20dengan%20Anda.',
                          '_blank'
                        );
                      }}
                    >
                      <FaEnvelope /> Let&apos;s Connect
                    </button>

                    <button type="button" onClick={handleDownloadCv} disabled={generatingCv} aria-busy={generatingCv} className="secondary-btn">
                      <FaDownload /> {generatingCv ? 'Generating CV…' : 'Download CV'}
                    </button>
                  </div>
                  {cvError && <p role="alert">{cvError}</p>}

                  <div className="stat-grid">
                    {stats.map((item) => (
                      <div key={item.label} className="stat-card">
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.2}>
                <div className="profile-visual">
                  <ProfileCard />

                  <div className="social-stack">
                    <a href="https://www.linkedin.com/in/syabina-nur-pajriyanti-b082aa199/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/sybninanf" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://github.com/sybninanf" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <PixelLandscape />
      </section>

      <div className="discipline-strip" aria-label="UI/UX design, web development, mobile experiences">
        <div className="discipline-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="discipline-set" key={copy}>
                  <span>UI/UX design</span><i>✦</i><span>Web development</span><i>✦</i><span>Mobile experiences</span><i>✦</i>
            </div>
          ))}
        </div>
      </div>

      <div id="experience"><FeaturedQuests /></div>

      <section className="section-shell" id="specialties">
        <div className="container">
          <div className="section-heading center">
            <span className="section-kicker">01 / Character specialties</span>
            <h2>Making AI easier to learn and useful at work.</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div className="focus-card">
                    <span className="icon-wrap focus-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell inventory-section" id="skills">
        <div className="container">
          <div className="section-heading center">
            <span className="section-kicker">02 / Skill inventory</span>
            <h2>Tools packed for the journey.</h2>
            <p>My working toolkit for turning ideas into real products.</p>
          </div>

          <div className="skill-grid">
            {Object.keys(icons)
              .filter((key) => key !== 'ina')
              .map((key, index) => (
                  <ScrollReveal key={key} delay={index * 0.09}>
                    <div className="skill-card">
                      <img src={icons[key]} alt="" loading="lazy" />
                      <h3>{key.replace(/_/g, ' ')}</h3>
                    </div>
                  </ScrollReveal>
              ))}
            {[
              { name: 'Flutter', image: flutterLogo },
              { name: 'n8n', image: n8nLogo },
              { name: 'Hermes Agent', image: hermesLogo },
            ].map(({ name: tool, image }, index) => (
              <ScrollReveal key={tool} delay={index * 0.09}>
                <div className="skill-card">
                  <img src={image} alt="" loading="lazy" />
                  <h3 style={{ textTransform: 'none' }}>{tool}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="soft-skills">
        <div className="container">
          <div className="section-heading center">
            <span className="section-kicker">03 / Passive abilities</span>
            <h2>More than just technical skills.</h2>
          </div>

          <div className="soft-grid">
            {skillGroups.map((group, index) => (
              <ScrollReveal key={group.title} delay={index * 0.12}>
                <div className="soft-card">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div id="projects"><Projects featured /></div>

      <div id="certification"><Certification featured /></div>

      <section className="section-shell cta-shell">
        <div className="container">
          <ScrollReveal>
            <div className="cta-panel">
              <span className="section-kicker">The next chapter</span>
              <h2>Let’s make something useful.</h2>
              <p>
                I enjoy working with teams that care about user experience, impactful design, and product quality.
                If you need a creative problem-solver, let&apos;s connect.
              </p>
              <div className="cta-row">
                <button
                  className="primary-btn"
                  type="button"
                  onClick={() => {
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=syabinanurpajriyanti@gmail.com&su=Halo%20Syabina&body=Perkenalkan%2C%20saya%20ingin%20terhubung%20dengan%20Anda.',
                      '_blank'
                    );
                  }}
                >
                  <FaEnvelope /> Start a conversation
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
