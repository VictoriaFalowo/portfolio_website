import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { content } from '../data/content.js'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = content.projects.find(item => item.slug === slug)
  return <><Header /><main className="project-stub"><h1>{project ? project.name : 'PROJECT NOT FOUND'}</h1><p>{project ? 'PROJECT DETAILS PLACEHOLDER' : 'THE REQUESTED PROJECT COULD NOT BE FOUND.'}</p><Link to="/#projects">BACK TO PROJECTS</Link></main><Footer /></>
}
