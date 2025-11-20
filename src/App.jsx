import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import EducationCerts from './components/EducationCerts'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-white">KARTIC SINGH RAWAT</a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education & Certifications</a>
          </nav>
          <a href="mailto:rawatkartic2301@gmail.com" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-cyan-400/30">Contact</a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <EducationCerts />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Kartic Singh Rawat. All rights reserved.
      </footer>
    </div>
  )
}

export default App
