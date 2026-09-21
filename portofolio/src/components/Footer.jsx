
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>© {year} Syabina Nur Pajriyanti. Crafted with care.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/syabina-nur-pajriyanti-b082aa199/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/sybninanf" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/sybninanf" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
