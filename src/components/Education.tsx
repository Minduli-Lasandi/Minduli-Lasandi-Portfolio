import { education } from '../data/education'

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="section-inner">
                <h2 className="section-title">Education</h2>
                <div className="timeline">
                    {education.map((edu, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="exp-role">{edu.degree}</h3>
                                        <p className="exp-company">{edu.institution}</p>
                                    </div>
                                    <span className="exp-duration">{edu.duration}</span>
                                </div>
                                {edu.grade && (
                                    <p className="edu-grade">Grade: {edu.grade}</p>
                                )}
                                {edu.Research_Project && (
                                    <p className="edu-research"><strong>Research Project:</strong> {edu.Research_Project}</p>
                                )}
                                {edu.Main_modules && (
                                    <div className="edu-modules">
                                        <p className="edu-modules-label">Key Modules</p>
                                        <div className="tag-list">
                                            {edu.Main_modules.map(mod => (
                                                <span key={mod} className="tag">{mod}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
