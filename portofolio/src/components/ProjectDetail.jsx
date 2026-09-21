import { Link, useParams } from 'react-router-dom';
import { projects } from '../const/projectCatalog';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-shell">
        <div className="container">
          <h1>Project not found</h1>
          <Link className="project-link" to="/projects">← Back to projects</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section-shell project-detail">
      <div className="container">
        <Link className="detail-back" to="/projects">← Back to projects</Link>
        <header className="section-heading">
          <span className="section-kicker">{project.tag?.[0] || 'Project'}</span>
          <h1>{project.title}</h1>
        </header>
        <figure className="detail-preview">
          <img src={project.img} alt={project.title} fetchPriority="high" />
        </figure>
        <div className="detail-content">
          <section>
            <h2>About the project</h2>
            <p>{project.desc}</p>
            {project.details?.map((detail) => (
              <section className="experience-detail" key={detail.title}>
                <h2>{detail.title}</h2>
                <p>{detail.text}</p>
              </section>
            ))}
          </section>
          <aside aria-label="Project information">
            {project.organization && <p className="experience-role"><strong>Organization:</strong> {project.organization}</p>}
            {project.projectType && <p className="experience-role"><strong>Project Type:</strong> {project.projectType}</p>}
            {project.role && <p className="experience-role"><strong>My Role:</strong> {project.role}</p>}
            <h2>Project focus</h2>
            <div className="tag-list">
              {(project.tag || []).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {project.link ? (
              <a className="primary-btn" href={project.link} target="_blank" rel="noreferrer">
                {project.linkLabel || 'Open project'} <span aria-hidden="true">↗</span>
              </a>
            ) : <p>External preview is not available yet.</p>}
          </aside>
        </div>
      </div>
    </article>
  );
}