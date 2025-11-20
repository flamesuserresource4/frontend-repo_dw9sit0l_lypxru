export default function EducationCerts() {
  const certs = [
    'Certified Salesforce Associate',
    'Introduction to HTML5 — Coursera',
    'Introduction to CSS3 — Coursera',
    'Completion of C++ Training — IIT Bombay (Spoken Tutorial)',
    'Completion of C Training — IIT Bombay (Spoken Tutorial)',
    'Interactivity with JavaScript — Coursera',
    'Advanced Styling with Responsive Design — Coursera',
    'Decisions - Business Analyst',
    'Decisions - UI App Developer',
    'Decisions - Rules Engine Developer',
  ]

  return (
    <section id="education" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Education</h2>
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-cyan-300">B. Tech in Computer Science & Engineering</h3>
              <p className="mt-2 text-slate-300">Dr. APJ Abdul Kalam Technical University · 04/2019 - 01/2023 · Lucknow, U.P.</p>
              <p className="mt-4 text-slate-200/90">Capstone: Built "Artistic Impression" — a full‑stack project for an Architecture & Interior Design company using HTML, CSS, JavaScript, and SQL.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Certifications</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certs.map((c) => (
                <div key={c} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200/90">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
