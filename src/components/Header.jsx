import { useState } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content.js'
import '../styles/header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <Link className="wordmark" to="/" onClick={close}>{content.name}</Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? content.copy.navigation.close : content.copy.navigation.menu}</button>
    <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label={content.copy.navigation.label}>
      <a href="/#about" onClick={close}>{content.copy.navigation.about}</a><a href="/#experience" onClick={close}>{content.copy.navigation.experience}</a><a href="/#projects" onClick={close}>{content.copy.navigation.projects}</a><a href="/#contact" onClick={close}>{content.copy.navigation.contact}</a>
    </nav>
  </header>
}
