import { experience } from '../data/experience'
import { useNavigate } from 'react-router-dom'

export default function Experience() {
    const navigate = useNavigate()

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
                <div className="section-footer">
                    <button onClick={() => navigate('/activities')} className="subtle-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                        View Extracurricular Activities
                    </button>
                </div>
            </div>
        </section>
    )
}
