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
import marioWaveAsset from './assets/processed/mario-wave-frames.png';
import marioClimbAsset from './assets/processed/mario-climb-frames.png';

function PhotoSpriteOverlay() {
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    let timer;
    const showSprite = (event) => {
      const profileCard = event.target.closest('[data-profile-photo]');
      if (!profileCard) return;
      const bounds = profileCard.getBoundingClientRect();
      setSprite({
        left: Math.min(Math.max(bounds.right - 54, 12), window.innerWidth - 84),
        top: Math.min(Math.max(bounds.top + 48, 72), window.innerHeight - 120),
      });
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setSprite(null), 1800);
    };
    const handleClick = (event) => showSprite(event);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      window.clearTimeout(timer);
    };
  }, []);

  if (!sprite) return null;
  return (
    <div
      className="photo-sprite-pop is-clicked"
      style={{ left: sprite.left, top: sprite.top }}
      aria-hidden="true"
    >
      <span className="mario-wave-sprite" style={{ backgroundImage: `url("${marioWaveAsset}")` }} />
      {sprite.clicked && <span className="photo-mushroom">🍄</span>}
    </div>
  );
}

function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress-mario" style={{ backgroundImage: `url("${marioClimbAsset}")` }} />
      <span className="scroll-progress-track"><span style={{ height: `${progress}%` }} /></span>
      <span className="scroll-progress-flag">★</span>
    </div>
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
      </Router>
      <PhotoSpriteOverlay />
      <ScrollProgressIndicator />
    </div>
  );
}

export default App
