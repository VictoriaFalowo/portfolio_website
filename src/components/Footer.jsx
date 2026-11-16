import { content, LINKEDIN_URL } from '../data/content.js'
import '../styles/footer.css'

export default function Footer() {
  return <footer className="site-footer">
    <span>{content.name} | {content.copy.footer.tagline}</span>
    <div>
      <a href="/#projects">{content.copy.footer.projects}</a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">{content.copy.footer.linkedin}</a>
      <a href={`mailto:${content.email}`}>{content.copy.footer.email}</a>
      <span>{content.copy.footer.copyright} {new Date().getFullYear()}</span>
    </div>
  </footer>
}
