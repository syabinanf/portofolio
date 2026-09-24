import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { projects } from '../const/projectCatalog';

const filters = ['All', 'UI/UX', 'Web', 'Mobile', 'Graphic Design', 'Curriculum Development'];
const featuredProjects = [
  'wsq-leveraging-ai-to-enhance-service-led-hospitality',
  'skin-cancer-detection-application-for-thesis-project',
  'customer-satisfaction-system-website',
].map((slug) => projects.find((item) => item.slug === slug));

const matchesFilter = (item, filter) => {
  if (filter === 'All') return true;

  const tags = item.tag.map((tag) => tag.toLowerCase());

  if (filter === 'Curriculum Development') {
    return tags.includes('curriculum development');
  }

  if (filter === 'UI/UX') {
    return tags.some((tag) => tag.includes('ui') || tag.includes('design') || tag.includes('figma'));
  }

  if (filter === 'Web') {
    return tags.some((tag) => tag.includes('website') || tag.includes('web'));
  }

  if (filter === 'Mobile') {
    return tags.some((tag) => tag.includes('mobile') || tag.includes('android') || tag.includes('flutter'));
  }

  if (filter === 'Graphic Design') {
    return tags.some((tag) => tag.includes('graphic') || tag.includes('grapic') || tag.includes('banner') || tag.includes('instagram'));
  }

  return true;
};

function ProjectReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return <div ref={ref} className={`reveal${inView ? ' is-visible' : ''}`} style={{ '--reveal-delay': `${delay}s` }}>{children}</div>;
}

export default function Projects({ featured = false }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(
    () => featured ? featuredProjects : projects.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter, featured]
  );

  return (
    <section className="section-shell project-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">05 / Projects</span>
          <h2>The mission board.</h2>
          <p>Ideas made tangible, from the first sketch to working code.</p>
        </div>

        {!featured && <div className="project-controls" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>}

        {!featured && <p className="result-count" role="status">{visibleProjects.length} missions · {activeFilter}</p>}
        {visibleProjects.length === 0 && <p>No missions in this category. Choose All to see every project.</p>}
        <div className="project-grid">
          {visibleProjects.map((item, index) => {
            const firstTag = item.tag?.[0] || 'Project';
            const hasResource = Boolean(item.link);

            return (
              <ProjectReveal key={`${item.title}-${index}`} delay={index * 0.06}>
                <Link to={`/projects/${item.slug}`} className="project-card project-card--compact project-preview-link">
                <div className="project-image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="project-badges">
                    <span className="project-pill project-pill--type">{firstTag}</span>
                    <span className={`project-pill ${hasResource ? 'project-pill--live' : 'project-pill--concept'}`}>
                      {hasResource ? 'Resource available' : 'Case study'}
                    </span>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span>{firstTag}</span>
                    <span>{hasResource ? 'Explore project' : 'Case study'}</span>
                  </div>

                  <h3>{item.title}</h3>
                  {item.desc && <p className="project-contribution"><strong>Contribution:</strong> {item.desc}</p>}

                  <div className="project-actions">
                    <span className="project-link">
                      View details <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                </Link>
              </ProjectReveal>
            );
          })}
        </div>
        {featured && <div className="collection-more"><Link className="secondary-btn" to="/projects" aria-label="View more projects">View more <span aria-hidden="true">→</span></Link></div>}
      </div>
    </section>
  );
}
