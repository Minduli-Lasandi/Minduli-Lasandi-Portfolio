import { useState, useEffect } from 'react'

const links = ['About', 'Education', 'Experience', 'Projects', 'Publications']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    ML
                </span>
                <div className="nav-links desktop">
                    {links.map(l => (
                        <button key={l} onClick={() => scrollTo(l)}>{l}</button>
                    ))}
                </div>
                <div></div>
                <a href="./Minduli_Lasandi_Resume.pdf" download className="cv-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 11l-5 5zm-7 3h14v-2H5v2z" />
                    </svg>
                    Download CV
                </a>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
            {menuOpen && (
                <div className="nav-mobile">
                    {links.map(l => (
                        <button key={l} onClick={() => scrollTo(l)}>{l}</button>
                    ))}
                </div>
            )}
        </nav>
    )
}
