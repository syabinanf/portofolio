import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certification', path: '/certification' },
  ];

  return (
    <Navbar bg="transparent" data-bs-theme="dark" expand="lg" sticky="top">
      <Container style={{ padding: '15px 20px' }} className="navbar-container">
        <Navbar.Brand style={{ color:'#ffc1cc', fontWeight: 'bold', fontSize: '24px' }}>
          Na's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ label, path }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                style={{
                  fontSize: '18px',
                  fontWeight: currentPath === path ? 'bold' : 'normal',
                  color: currentPath === path ? '#ffc1cc' : 'grey',
                  margin: '0 10px',
                  transition: 'all 0.3s',
                }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
