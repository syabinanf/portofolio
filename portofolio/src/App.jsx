import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import ExperienceDetail from './components/ExperienceDetail.jsx';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Certif from './components/Certification';
import mcewekAsset from './assets/MCewek.png';

const journeySections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Quest log' },
  { id: 'projects', label: 'Missions' },
  { id: 'certification', label: 'Achievements' },
];

const journeyMessages = {
  home: 'Start the journey',
  skills: 'Skills equipped',
  experience: 'Quest log unlocked',
  projects: 'Mission board ahead',
  certification: 'Achievements collected',
  connect: "Let's connect",
};

function JourneyCharacter() {
  const { pathname } = useLocation();
  const [direction, setDirection] = useState('down');
  const [isWaving, setIsWaving] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [position, setPosition] = useState(50);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const waveTimer = useRef(null);
  const lastScrollY = useRef(0);
  const frame = useRef(null);
  const pauseTimer = useRef(null);
  const scrollDirection = useRef('down');
  const isWavingRef = useRef(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener?.('change', updateMotionPreference);

    const updatePosition = () => {
      frame.current = null;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextPosition = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const delta = window.scrollY - lastScrollY.current;
      const nextDirection = delta === 0 ? scrollDirection.current : delta < 0 ? 'up' : 'down';
      lastScrollY.current = window.scrollY;
      scrollDirection.current = nextDirection;
      if (!isWavingRef.current && !motionQuery.matches) setDirection(nextDirection);
      if (!motionQuery.matches) setPosition(Math.min(94, Math.max(6, nextPosition)));
      const footer = document.getElementById('connect');
      if (footer && footer.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        setCurrentSection('connect');
        return;
      }
      const marker = window.innerHeight * 0.42;
      const current = journeySections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1);
      setCurrentSection(current?.id || 'home');
    };
    const handleScroll = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(updatePosition);
    };
    updatePosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      motionQuery.removeEventListener?.('change', updateMotionPreference);
    };
  }, [pathname]);

  useEffect(() => () => {
    window.clearTimeout(waveTimer.current);
    window.clearTimeout(pauseTimer.current);
  }, []);

  useEffect(() => {
    const observedSections = journeySections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const enteredSection = entries.find((entry) => entry.isIntersecting);
      if (!enteredSection || reducedMotion || isWavingRef.current) return;
      setIsPaused(true);
      window.clearTimeout(pauseTimer.current);
      pauseTimer.current = window.setTimeout(() => setIsPaused(false), 500);
    }, { rootMargin: '-12% 0px -70% 0px', threshold: 0.1 });
    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [reducedMotion, pathname]);

  useEffect(() => {
    const projects = document.getElementById('projects');
    if (!projects || sessionStorage.getItem('projects-hint-seen')) return undefined;
    let hintTimer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      sessionStorage.setItem('projects-hint-seen', 'true');
      setShowHint(true);
      hintTimer = window.setTimeout(() => setShowHint(false), 2400);
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(projects);
    return () => {
      observer.disconnect();
      window.clearTimeout(hintTimer);
    };
  }, [pathname]);

  const wave = () => {
    if (isWavingRef.current) return;
    isWavingRef.current = true;
    setIsWaving(true);
    setIsPaused(false);
    window.clearTimeout(waveTimer.current);
    waveTimer.current = window.setTimeout(() => {
      isWavingRef.current = false;
      setIsWaving(false);
      setDirection(scrollDirection.current);
    }, 900);
  };

  return (
    <div className="journey-character-wrap" style={{ top: reducedMotion ? '50%' : `${position}%` }}>
      <span className={`journey-speech${showHint ? ' is-hint' : ''}`} aria-hidden="true">
        {journeyMessages[currentSection]}
      </span>
      <button
        type="button"
        className={`journey-character is-${direction}${isWaving ? ' is-waving' : ''}${isPaused ? ' is-paused' : ''}`}
        aria-label="Sapa karakter"
        onClick={wave}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            wave();
          }
        }}
        style={{ backgroundImage: `url("${mcewekAsset}")` }}
      >
        <span className="sr-only">Wave hello</span>
      </button>
    </div>
  );
}

function JourneyProgress() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const frame = useRef(null);

  useEffect(() => {
    const update = () => {
      frame.current = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const routeSection = pathname.split('/')[1];
      if (journeySections.some(({ id }) => id === routeSection)) {
        setActiveSection(routeSection);
        return;
      }
      const marker = window.innerHeight * 0.35;
      const current = journeySections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1);
      setActiveSection(current?.id || 'home');
    };
    const scheduleUpdate = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [pathname]);

  return (
    <nav className="journey-progress" aria-label="Journey progress">
      <span className="scroll-progress-track" aria-hidden="true"><span style={{ height: `${progress}%` }} /></span>
      <ol className="journey-progress-list">
        {journeySections.map((section) => (
          <li key={section.id} className={activeSection === section.id ? 'is-active' : ''}>
            <a href={`${pathname === '/' ? '' : '/'}#${section.id}`} aria-current={activeSection === section.id ? 'location' : undefined}>{section.label}</a>
          </li>
        ))}
      </ol>
      <span className="scroll-progress-flag" aria-hidden="true">★</span>
    </nav>
  );
}

function RouteScrollReset() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      <Router>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <RouteScrollReset />
        <Header />
        <main id="main-content" className="page-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:slug" element={<ExperienceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/certification" element={<Certif />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        <JourneyCharacter />
        <JourneyProgress />
      </Router>
    </div>
  );
}

export default App
