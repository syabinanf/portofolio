import { Link, useParams } from 'react-router-dom';
import { experienceGroups } from '../const/experienceCatalog';
import PhotoSlider from './PhotoSlider';

export default function ExperienceDetail() {
  const { slug } = useParams();
  const exp = experienceGroups.flatMap((group) => group.items).find((item) => item.slug === slug);
  return (
    <article className="section-shell project-detail experience-page">
      <div className="container">
        <Link className="detail-back" to="/experience">← Back to experience</Link>
        {!exp ? <h1>Experience not found</h1> : <>
          <header className="section-heading">
            <span className="section-kicker">{exp.projectType || 'Experience'}</span>
            <h1>{exp.title}</h1>
          </header>
          {(exp.photos?.length > 0 || exp.img) && <PhotoSlider key={slug} title={exp.title} photos={exp.photos || [{ src: exp.img, alt: exp.title }]} />}
          <div className="experience-description">
            {exp.role && <p className="experience-role"><strong>My Role:</strong> {exp.role}</p>}
            <section className="experience-detail"><h2>Overview</h2><p>{exp.desc}</p></section>
            {exp.details?.map((detail) => <section className="experience-detail" key={detail.title}><h2>{detail.title}</h2><p>{detail.text}</p></section>)}
          </div>
        </>}
      </div>
    </article>
  );
}