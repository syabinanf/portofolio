import { Link } from 'react-router-dom';
import { experienceGroups } from '../const/experienceCatalog';
import { projects } from '../const/projectCatalog';

const experiences = experienceGroups.flatMap((group) => group.items);
const highlights = [
  {
    item: experiences.find((item) => item.slug === 'ai-curriculum-development-teacher-training-genza'),
    route: 'experience', label: 'AI Training', title: 'Practical AI for Genza teachers',
    contribution: 'Developed AI fundamentals and applied-AI materials, then delivered training tailored to teachers’ everyday tasks.',
  },
  {
    item: projects.find((item) => item.slug === 'wsq-leveraging-ai-to-enhance-service-led-hospitality'),
    route: 'projects', label: 'Curriculum Development', title: '16-hour hospitality AI curriculum',
    contribution: 'Core contributor in a group project for NTUC LearningHub: developed the syllabus and instructional modules around the guest journey.',
  },
  {
    item: experiences.find((item) => item.slug === 'n8n-workflow-automation-curriculum-development-training'),
    route: 'experience', label: 'Automation', title: 'Teaching practical n8n workflows',
    contribution: 'Designed materials and taught n8n fundamentals and workflows for chatbots, dashboard reporting, Gmail, and lead management.',
  },
];

export default function FeaturedQuests() {
  return (
    <section className="section-shell featured-quests" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Three selected quests</span>
          <h2 id="featured-title">From learning materials to practical skills.</h2>
          <p>A closer look at AI training, curriculum development, and automation.</p>
        </div>
        <div className="featured-grid">
          {highlights.map(({ item, route, label, title, contribution }, index) => (
            <article className="project-card featured-card" key={item.slug}>
              <div className="project-image"><img src={item.img} alt="" loading="lazy" /></div>
              <div className="project-body">
                <span className="section-kicker">0{index + 1} / {label}</span>
                <h3>{title}</h3>
                <p>{contribution}</p>
                <div className="project-actions">
                  <Link className="project-link" to={`/${route}/${item.slug}`} aria-label={`View details: ${title}`}>View quest <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="collection-more"><Link className="secondary-btn" to="/experience" aria-label="View more experience">View more <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}