import { extracurricular } from '../data/extracurricular'
import { useNavigate } from 'react-router-dom'

export default function ActivitiesPage() {
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
                    <h2 className="section-title">Extracurricular Activities</h2>
                    <div className="timeline">
                        {[...extracurricular].reverse().map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-dot" />
                                <div className="timeline-card">
                                    <div className="timeline-header">
                                        <div>
                                            <h3 className="exp-role">{item.role.trim()}</h3>
                                            <p className="exp-company">{item.organization}</p>
                                        </div>
                                        <span className="exp-duration">{item.duration.trim()}</span>
                                    </div>
                                    {item.event && (
                                        <p className="activity-event">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                                                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                                            </svg>
                                            {item.event.trim()}
                                        </p>
                                    )}
                                    <p className="activity-contribution">
                                        <strong>Contribution:</strong> {item.contribution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
