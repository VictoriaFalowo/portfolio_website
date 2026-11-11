import { content, LINKEDIN_URL } from '../data/content.js'
import '../styles/footer.css'

export default function Footer() {
  return <footer className="site-footer"><span>© {content.name}</span><div><a href={LINKEDIN_URL}>LINKEDIN</a><a href={`mailto:${content.email}`}>EMAIL</a></div></footer>
}
