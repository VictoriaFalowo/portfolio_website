import '../styles/section-heading.css'
export default function SectionHeading({ eyebrow, children, id }) {
  return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 id={id}>{children}</h2></div>
}
