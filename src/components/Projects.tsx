import { projects } from '../data/projects'

const linkMeta: Record<string, { label: string; icon: string }> = {
    github: { label: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
    huggingface: { label: 'HuggingFace', icon: 'M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-1.5 7.5a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm-4.25 4.5s.5 2.5 2.75 2.5 2.75-2.5 2.75-2.5H9.25z' },
    demo: { label: 'Live Demo', icon: 'M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8l-3.528-3.536-5.643 5.65-1.414-1.414 5.642-5.65L13 3h8z' },
    publication: { label: 'Paper', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16zm0-6h3v1.5H8V10z' },
}

export default function Projects() {
    return (
        <section id="projects" className="section section-alt">
            <div className="section-inner">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <div key={i} className="project-card">
                            <div className="project-top">
                                <div>
                                    <h3 className="project-name">{proj.name}</h3>
                                    <span className="project-date">{proj.date}</span>
                                </div>
                            </div>
                            <p className="project-desc">{proj.description}</p>
                            {proj.outcomes && (
                                <p className="project-outcomes"><strong>Outcomes:</strong> {proj.outcomes}</p>
                            )}
                            <div className="tag-list">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {Object.entries(proj.links).map(([key, url]) => {
                                    const meta = linkMeta[key]
                                    if (!meta || !url) return null
                                    return (
                                        <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                                <path d={meta.icon} />
                                            </svg>
                                            {meta.label}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
