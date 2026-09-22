import { Link } from 'react-router-dom';
import { experienceGroups as groups } from '../const/experienceCatalog';

export default function Experience() {
  return (
    <section className="section-shell quest-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">04 / Experience</span>
          <h2>The quest log.</h2>
          <p>Learning by building. Growing by sharing.</p>
        </div>

        <div className="timeline-stack">
          {groups.map((group) => (
            <div key={group.title} className="timeline-group">
              <h3>{group.title}</h3>

              <div className="project-grid">
                {group.items.map((exp, index) => (
                  <article className="project-card" key={exp.slug}>
                    {exp.img && <Link className="project-image" to={`/experience/${exp.slug}`} aria-label={`View details: ${exp.title}`}>
                      <img src={exp.img} alt={exp.title} loading="lazy" />
                    </Link>}
                    <Link className="project-body project-preview-link" to={`/experience/${exp.slug}`}>
                      <div className="project-meta">{exp.projectType || group.title}</div>
                      <span className="quest-number">QUEST {String(index + 1).padStart(2, '0')}</span>
                      <h3>{exp.title}</h3>
                      {exp.role && <p>{exp.role}</p>}
                      <div className="project-actions"><span className="project-link">View details <span aria-hidden="true">→</span></span></div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
