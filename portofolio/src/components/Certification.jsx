import { itemData } from '../const/cer';

export default function CertificationCard() {
  return (
    <section className="section-shell achievement-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">06 / Certifications</span>
          <h2>Achievements collected.</h2>
          <p>Certifications and learning milestones along the way.</p>
        </div>

        <div className="cert-grid">
          {itemData.map((item, index) => (
            <a key={`${item.title}-${index}`} className="cert-card" href={item.img} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} certificate ${index + 1} (new tab)`}>
              <img src={item.img} alt={`${item.title} certificate ${index + 1}`} loading="lazy" />
              <div className="cert-label"><span className="achievement-seal" aria-hidden="true">✦</span><span>{item.title}<small>View certificate ↗</small></span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
