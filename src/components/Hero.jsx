import Spline from '@splinetool/react-spline'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            <span className="text-sm text-cyan-200">Available for opportunities</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            KARTIC SINGH RAWAT
          </h1>
          <p className="mt-2 text-lg font-medium text-cyan-200/90">Software Developer</p>

          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <li className="flex items-center gap-2 text-cyan-100/90"><MapPin size={18} className="text-cyan-300" /> Noida, UP 201301</li>
            <li className="flex items-center gap-2 text-cyan-100/90"><Phone size={18} className="text-cyan-300" /> 7428857095</li>
            <li className="flex items-center gap-2 text-cyan-100/90"><Mail size={18} className="text-cyan-300" /> rawatkartic2301@gmail.com</li>
            <li className="flex items-center gap-2 text-cyan-100/90"><Linkedin size={18} className="text-cyan-300" /> <a className="underline decoration-cyan-400/40 hover:text-white" href="https://www.linkedin.com/in/kartic-rawat-0216a81b0" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li className="flex items-center gap-2 text-cyan-100/90 sm:col-span-2"><Globe size={18} className="text-cyan-300" /> Bold Profile</li>
          </ul>

          <p className="mt-8 max-w-2xl text-slate-200">
            Proactive and detail-oriented Software Developer with 1 year of experience in designing, developing, and maintaining software applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#skills" className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 shadow-md shadow-cyan-400/30 transition-transform hover:-translate-y-0.5">View Skills</a>
            <a href="#experience" className="rounded-full border border-cyan-400/50 bg-white/5 px-5 py-2.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">Experience</a>
          </div>
        </div>
      </div>
    </section>
  )
}
