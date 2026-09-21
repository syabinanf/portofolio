import { Link } from 'react-router-dom';
import { experienceGroups as groups } from '../const/experienceCatalog';

export default function Experience() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Experience</span>
          <h2>Learning by building.<br />Growing by sharing.</h2>
        </div>

        <div className="timeline-stack">
          {groups.map((group) => (
            <div key={group.title} className="timeline-group">
              <h3>{group.title}</h3>

              <div className="project-grid">
                {group.items.map((exp) => (
                  <article className="project-card" key={exp.slug}>
                    {exp.img && <Link className="project-image" to={`/experience/${exp.slug}`} aria-label={`View details: ${exp.title}`}>
                      <img src={exp.img} alt={exp.title} loading="lazy" />
                    </Link>}
                    <Link className="project-body project-preview-link" to={`/experience/${exp.slug}`}>
                      <div className="project-meta">{exp.projectType || group.title}</div>
                      <h3>{exp.title}</h3>
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
