import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { content } from '../data/content.js'
import '../styles/project-details.css'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = content.projects.find(item => item.slug === slug && item.details)
  const copy = content.copy.projectDetails
  const pageTitle = project ? `${project.name} | ${content.name}` : `${copy.notFoundTitle} | ${content.name}`
  const pageDescription = project ? project.details.description : copy.notFoundDescription

  // Route changes should start at the top, even when the previous page was scrolled.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    document.title = pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription)
  }, [pageTitle, pageDescription])

  if (!project) return <><Header /><main className="project-details project-not-found"><p className="eyebrow">{copy.notFoundEyebrow}</p><h1>{copy.notFoundTitle}</h1><p>{copy.notFoundDescription}</p><Link className="project-back-link" to="/#projects">{copy.backToProjects}</Link></main><Footer /></>

  const { details } = project
  return <><Header /><main className="project-details">
    <Link className="project-back-link" to="/#projects">{copy.backToProjects}</Link>
    <header className="project-details-heading"><p className="eyebrow">{copy.eyebrow}</p><h1>{project.name}</h1><p>{details.description}</p><div className="project-details-links">
      {project.liveLink && <a className="button" href={project.liveLink} target="_blank" rel="noreferrer">{copy.liveSite}</a>}
      {project.repoLink && <a className="button" href={project.repoLink} target="_blank" rel="noreferrer">{copy.repository}</a>}
    </div></header>
    <section className="details-panel"><h2>{copy.problem}</h2><p>{details.problem}</p></section>
    <section className="details-panel"><h2>{copy.features}</h2><ul>{details.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
    <section className="details-panel"><h2>{copy.screenshots}</h2><div className="screenshot-grid">{details.screenshots.map(screenshot => <figure className="screenshot-frame" key={screenshot.src}><img className="project-screenshot" src={screenshot.src} alt={screenshot.caption} /><figcaption>{screenshot.caption}</figcaption></figure>)}</div></section>
    <section className="details-panel"><h2>{copy.technologies}</h2><ul className="tags">{details.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></section>
    <section className="details-panel"><h2>{copy.learned}</h2><p>{details.learned}</p></section>
    <Link className="project-back-link" to="/#projects">{copy.backToProjects}</Link>
  </main><Footer /></>
}
