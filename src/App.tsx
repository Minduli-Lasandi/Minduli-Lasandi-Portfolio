import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Publications />
      </main>
      <footer className="footer">
        <p>© Minduli Lasandi Portfolio</p>
      </footer>
    </>
  )
}
