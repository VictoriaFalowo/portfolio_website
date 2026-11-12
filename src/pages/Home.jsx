import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import StitchDivider from '../components/StitchDivider.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'
import { content } from '../data/content.js'
import '../styles/home.css'

export default function Home() {
  return <><Header /><main>
    <section className="hero"><div className="hero-copy-block"><p className="eyebrow">{content.roleLabel}</p><h1>{content.name}</h1><p className="hero-copy">{content.intro}</p><a className="button" href={`mailto:${content.email}`}>GET IN TOUCH</a></div></section>
    <StitchDivider />
    <section id="about" className="home-section about-section"><SectionHeading>ABOUT</SectionHeading><div className="about-copy">
      <article><h3>{content.about.labels.who}</h3><p>{content.about.who}</p></article>
      <article><h3>{content.about.labels.what}</h3><p>{content.about.what}</p></article>
      <article><h3>{content.about.labels.focus}</h3><p>{content.about.focus}</p></article>
      <p className="about-note">{content.about.outsideWork}</p>
    </div></section>
    <StitchDivider />
    <section id="experience" className="home-section experience-section"><SectionHeading>EXPERIENCE</SectionHeading><ol className="experience-list">{content.experience.map(item => <ExperienceItem key={item.company} item={item} />)}</ol></section>
    <StitchDivider />
    <section id="projects" className="home-section"><SectionHeading>PROJECTS</SectionHeading></section>
    <StitchDivider />
    <section id="contact" className="home-section contact-shell"><SectionHeading>GET IN TOUCH</SectionHeading><a className="button" href={`mailto:${content.email}`}>EMAIL ME</a></section>
  </main><Footer /></>
}
