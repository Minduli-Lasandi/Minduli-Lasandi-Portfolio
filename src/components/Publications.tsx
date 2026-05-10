import { parseBibtex } from '../utils/parseBibtex'
import { bibtexEntries } from '../data/publications'

const typeLabel: Record<string, string> = {
    inproceedings: 'Conference',
    article: 'Journal',
    misc: 'Preprint',
    phdthesis: 'Thesis',
}

export default function Publications() {
    const pubs = parseBibtex(bibtexEntries)

    return (
        <section id="publications" className="section">
            <div className="section-inner">
                <h2 className="section-title">Publications</h2>
                <div className="pub-list">
                    {pubs.map((pub) => (
                        <div key={pub.key} className="pub-card">
                            <div className="pub-meta">
                                <span className="pub-type">{typeLabel[pub.type] ?? pub.type}</span>
                                <span className="pub-year">{pub.year}</span>
                            </div>
                            <h3 className="pub-title">{pub.title}</h3>
                            <p className="pub-authors">{pub.author}</p>
                            {(pub.booktitle || pub.journal) && (
                                <p className="pub-venue">{pub.booktitle ?? pub.journal}{pub.address ? `, ${pub.address}` : ''}</p>
                            )}
                            {pub.abstract && (
                                <details className="pub-abstract">
                                    <summary>Abstract</summary>
                                    <p>{pub.abstract}</p>
                                </details>
                            )}
                            <div className="pub-links">
                                {pub.url && (
                                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16zm0-6h3v1.5H8V10z" />
                                        </svg>
                                        Paper
                                    </a>
                                )}
                                {pub.doi && (
                                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="project-link">
                                        DOI
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
