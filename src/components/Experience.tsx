import { experience } from '../data/experience'

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="section-inner">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experience.map((exp, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <p className="exp-company">{exp.company}</p>
                                    </div>
                                    <span className="exp-duration">{exp.duration}</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                                <div className="tag-list">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
