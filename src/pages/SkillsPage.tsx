import { skills } from '../data/skills'
import { certifications } from '../data/certifications'
import { useNavigate } from 'react-router-dom'

export default function SkillsPage() {
    const navigate = useNavigate()

    return (
        <div className="subpage">
            <div className="subpage-header">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                    Back
                </button>
            </div>

            <section className="section">
                <div className="section-inner">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((group) => (
                            <div key={group.category} className="skills-card">
                                <h3 className="skills-category">{group.category}</h3>
                                <div className="tag-list">
                                    {group.items.map(item => (
                                        <span key={item} className="tag tag-skill">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="section-inner">
                    <h2 className="section-title">Certifications</h2>
                    <div className="cert-list">
                        {certifications.map((cert, i) => (
                            <div key={i} className="cert-card">
                                <div className="cert-left">
                                    <div className="cert-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="cert-name">{cert.name}</h3>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="cert-right">
                                    <span className="cert-date">{cert.date}</span>
                                    {cert.link && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            View
                                        </a>
                                    )}
                                    {!cert.link && cert.date === 'Ongoing' && (
                                        <span className="cert-ongoing">In Progress</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
