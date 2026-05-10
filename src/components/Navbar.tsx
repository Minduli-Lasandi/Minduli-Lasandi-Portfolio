import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Projects', 'Publications', 'Skills']

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
