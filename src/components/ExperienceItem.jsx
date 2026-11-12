import '../styles/experience-item.css'

export default function ExperienceItem({ item }) {
  return <li className="experience-item"><article className="experience-panel"><div className="experience-panel-inner">
    <p className="eyebrow">{item.type}</p>
    <h3>{item.company}</h3>
    <p className="experience-meta">{item.role} <span aria-hidden="true">·</span> {item.dates}</p>
    <p>{item.description}</p>
  </div></article></li>
}
