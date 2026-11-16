import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import StitchDivider from '../components/StitchDivider.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { content } from '../data/content.js'
import '../styles/home.css'

export default function Home() {
  useEffect(() => {
    document.title = content.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.pageDescription)
  }, [])

  return <><Header /><main>
    <section className="hero"><div className="hero-copy-block"><p className="eyebrow">{content.roleLabel}</p><h1>{content.name}</h1><p className="hero-copy">{content.intro}</p><a className="button" href={`mailto:${content.email}`}>{content.copy.home.contactAction}</a></div></section>
    <StitchDivider />
    <section id="about" className="home-section about-section"><SectionHeading>{content.copy.navigation.about}</SectionHeading><div className="about-copy">
      <article><h3>{content.about.labels.who}</h3><p>{content.about.who}</p></article>
      <article><h3>{content.about.labels.what}</h3><p>{content.about.what}</p></article>
      <article><h3>{content.about.labels.focus}</h3><p>{content.about.focus}</p></article>
      <p className="about-note">{content.about.outsideWork}</p>
    </div></section>
    <StitchDivider />
    <section id="experience" className="home-section experience-section"><SectionHeading>{content.copy.navigation.experience}</SectionHeading><ol className="experience-list">{content.experience.map(item => <ExperienceItem key={item.company} item={item} />)}</ol></section>
    <StitchDivider />
    <section id="projects" className="home-section projects-section"><SectionHeading>{content.copy.navigation.projects}</SectionHeading><div className="projects-grid">{content.projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <StitchDivider />
    <section id="contact" className="home-section contact-shell"><SectionHeading>{content.copy.navigation.contact}</SectionHeading><h3>{content.copy.home.contactHeading}</h3><p>{content.copy.home.contactMessage}</p><a className="button" href={`mailto:${content.email}`}>{content.copy.home.contactAction}</a></section>
  </main><Footer /></>
}
