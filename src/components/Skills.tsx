import { skills } from '../data/skills'

export default function Skills() {
    return (
        <section id="skills" className="section section-alt">
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
    )
}
