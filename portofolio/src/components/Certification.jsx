import { itemData } from '../const/cer';

export default function CertificationCard() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Recognition</span>
          <h2>Certifications and learning milestones.</h2>
        </div>

        <div className="cert-grid">
          {itemData.map((item, index) => (
            <div key={`${item.title}-${index}`} className="cert-card">
              <img src={item.img} alt={`${item.title} certificate ${index + 1}`} loading="lazy" />
              <div className="cert-label">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
