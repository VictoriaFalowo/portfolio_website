import { Link } from 'react-router-dom'
import { content } from '../data/content.js'
import TagList from './TagList.jsx'

export default function ProjectCard({ project }) {
  return <article className="project-card">
    {!project.hideImage && project.image && <div className="project-image"><img src={project.image} alt={project.imageAlt} /></div>}
    <div className="project-card-copy">
      <h3>{project.name}</h3><p>{project.description}</p><TagList tags={project.stack} />
      {project.details && <Link className="project-detail-link" to={`/projects/${project.slug}`}>{content.copy.projectCard.details}</Link>}
      <div className="project-actions">
        {project.liveLink && <a className="button" href={project.liveLink} target="_blank" rel="noreferrer">{content.copy.projectCard.liveSite}</a>}
        {project.prototypeLink && <a className="button" href={project.prototypeLink} target="_blank" rel="noreferrer">{content.copy.projectCard.prototype}</a>}
        {project.repoLink && <a className="button" href={project.repoLink} target="_blank" rel="noreferrer">{content.copy.projectCard.repository}</a>}
      </div>
    </div>
  </article>
}
