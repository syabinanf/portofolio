import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../const/projectCatalog';

const filters = ['All', 'UI/UX', 'Web', 'Mobile', 'Graphic Design', 'Curriculum Development'];

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(
    () => projects.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter]
  );

  return (
    <section className="section-shell project-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Portfolio</span>
          <h2>Ideas, made tangible.</h2>
        </div>

        <div className="project-controls">
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
        </div>

        <div className="project-grid">
          {visibleProjects.map((item, index) => {
            const firstTag = item.tag?.[0] || 'Project';
            const isFeatured = Boolean(item.link);

            return (
              <Link to={`/projects/${item.slug}`} className="project-card project-preview-link" key={`${item.title}-${index}`}>
                <div className="project-image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="project-badges">
                    <span className="project-pill project-pill--type">{firstTag}</span>
                    <span className={`project-pill ${isFeatured ? 'project-pill--live' : 'project-pill--concept'}`}>
                      {isFeatured ? 'Featured' : 'Concept'}
                    </span>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span>{firstTag}</span>
                    <span>{isFeatured ? 'Explore project' : 'Case study'}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <div className="project-actions">
                    <span className="project-link">
                      View details <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
