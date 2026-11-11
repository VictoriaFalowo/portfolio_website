import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import StitchDivider from '../components/StitchDivider.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { content } from '../data/content.js'
import '../styles/home.css'

export default function Home() {
  return <><Header /><main>
    <section className="hero"><p className="eyebrow">SOFTWARE ENGINEERING · PAN-ATLANTIC UNIVERSITY</p><h1>{content.name}</h1><p className="hero-copy">{content.intro}</p><a className="button" href={`mailto:${content.email}`}>GET IN TOUCH</a></section>
    <StitchDivider />
    <section id="about" className="home-section"><SectionHeading>ABOUT</SectionHeading></section>
    <StitchDivider />
    <section id="experience" className="home-section"><SectionHeading>EXPERIENCE</SectionHeading></section>
    <StitchDivider />
    <section id="projects" className="home-section"><SectionHeading>PROJECTS</SectionHeading></section>
    <StitchDivider />
    <section id="contact" className="home-section contact-shell"><SectionHeading>GET IN TOUCH</SectionHeading><a className="button" href={`mailto:${content.email}`}>EMAIL ME</a></section>
  </main><Footer /></>
}
