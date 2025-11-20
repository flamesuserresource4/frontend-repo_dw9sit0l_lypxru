import { BadgeCheck } from 'lucide-react'

const skillGroups = [
  {
    title: 'Platforms & Low-Code',
    items: ['Mendix', 'Decisions', 'Salesforce Administration', 'Salesforce Automation (Flows, Process Builder)'],
  },
  {
    title: 'Salesforce Dev Basics',
    items: ['Apex Triggers (Basics)', 'Apex Classes (Basics)', 'LWC (Basics)', 'Data Import Wizard'],
  },
  {
    title: 'Programming',
    items: ['C', 'C++', 'JavaScript (familiar)'],
  },
  {
    title: 'Web & Tools',
    items: ['HTML', 'CSS', 'Visual Studio Code'],
  },
  {
    title: 'Database & OS',
    items: ['SQL', 'Windows'],
  },
]

function Pill({ label }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm text-slate-200">
      <BadgeCheck size={16} className="text-cyan-400" />
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.07),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
            <p className="mt-2 text-slate-300">Technologies and tools I work with</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-900/60">
              <h3 className="mb-4 text-lg font-semibold text-cyan-300">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
