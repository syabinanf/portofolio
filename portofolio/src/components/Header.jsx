import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openLocation, setOpenLocation] = useState(null);
  const isOpen = openLocation === location;
  const closeMenu = () => setOpenLocation(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certification', path: '/certification' },
  ];

  return (
    <header className="portfolio-navbar">
      <nav className="container nav-shell" aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isOpen) {
            closeMenu();
            event.currentTarget.querySelector('.menu-toggle')?.focus();
          }
        }}>
        <Link to="/" className="brand-mark" onClick={closeMenu}>
          Syabina<span>Nur</span>
        </Link>

        <button type="button" className="menu-toggle" aria-controls="main-nav"
          aria-expanded={isOpen} onClick={() => setOpenLocation(isOpen ? null : location)}>
          {isOpen ? 'Close menu' : 'Menu'}
        </button>
        <div id="main-nav" className={`nav-menu${isOpen ? ' is-open' : ''}`}>
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                aria-current={currentPath === path ? 'page' : undefined}
                className={currentPath === path ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          <a className="nav-cta" href="mailto:syabinanurpajriyanti@gmail.com" onClick={closeMenu}>
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
