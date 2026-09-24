import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { itemData } from '../const/cer';

const featuredCertificates = [
  'ToT Kemendikdas',
  'Fasilitator Jakarta Barat Kemendikdas',
  'Fasilitator Bekasi Kemendikdas',
].map((title) => itemData.find((item) => item.title === title));

export default function CertificationCard({ featured = false }) {
  const [selected, setSelected] = useState(null);
  const closeButton = useRef(null);

  useEffect(() => {
    if (!selected) return undefined;
    const previousFocus = document.activeElement;
    const root = document.getElementById('root');
    const previousInert = root?.inert;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeButton.current?.focus();
    if (root) root.inert = true;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButton.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (root) root.inert = previousInert;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [selected]);

  return (
    <section className="section-shell achievement-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">06 / Certifications</span>
          <h2>Achievements collected.</h2>
          <p>Certifications and learning milestones along the way.</p>
        </div>

        <div className="cert-grid">
          {(featured ? featuredCertificates : itemData).map((item, index) => (
            <button key={`${item.title}-${index}`} className="cert-card" type="button" onClick={() => setSelected(item)} aria-label={`Open ${item.title} certificate ${index + 1}`}>
              <img src={item.img} alt={`${item.title} certificate ${index + 1}`} loading="lazy" />
              <div className="cert-label"><span className="achievement-seal" aria-hidden="true">✦</span><span>{item.title}<small>Open certificate</small></span></div>
            </button>
          ))}
        </div>
        {featured && <div className="collection-more"><Link className="secondary-btn" to="/certification" aria-label="View more certifications">View more <span aria-hidden="true">→</span></Link></div>}
      </div>
      {selected && createPortal(
        <div className="certificate-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <div className="certificate-dialog" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
            <button ref={closeButton} type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close certificate">×</button>
            <h2 id="certificate-title">{selected.title}</h2>
            <img src={selected.img} alt={`${selected.title} certificate enlarged`} />
          </div>
        </div>, document.body
      )}
    </section>
  );
}
