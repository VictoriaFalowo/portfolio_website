import { useState } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content.js'
import '../styles/header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <Link className="wordmark" to="/" onClick={close}>{content.name}</Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'MENU'}</button>
    <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
      <a href="/#about" onClick={close}>ABOUT</a><a href="/#experience" onClick={close}>EXPERIENCE</a><a href="/#projects" onClick={close}>PROJECTS</a><a href="/#contact" onClick={close}>CONTACT</a>
    </nav>
  </header>
}
