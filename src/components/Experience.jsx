export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Professional Experience</h2>

        <div className="mt-10 space-y-6">
          {/* AAPNA Infotheek */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <h3 className="text-xl font-semibold text-cyan-300">Software Developer · AAPNA Infotheek Pvt Ltd</h3>
              <span className="text-sm text-slate-400">04/2024 - Current · New Delhi, India</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200/90">
              <li>Currently working on a Title Automation Project for the insurance domain using Mendix to automate title processing and verification workflows.</li>
              <li>6 months of hands-on experience in Decisions Rule Engine — designing, implementing, and optimizing business rules and workflows.</li>
              <li>Earned all Decisions certifications, demonstrating deep knowledge of workflow automation and process orchestration.</li>
              <li>Improved software efficiency by troubleshooting and resolving coding issues.</li>
              <li>Updated old code bases to modern development standards, improving functionality.</li>
            </ul>
          </div>

          {/* Analysed Systems */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <h3 className="text-xl font-semibold text-cyan-300">Web Developer Intern · Analysed Systems</h3>
              <span className="text-sm text-slate-400">01/2023 - 03/2023 · Remote</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200/90">
              <li>Worked as a Web Development Intern focused on user interface tasks.</li>
            </ul>
          </div>

          {/* Quadrafort Technologies */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <h3 className="text-xl font-semibold text-cyan-300">Salesforce Developer Intern · Quadrafort Technologies Pvt Ltd</h3>
              <span className="text-sm text-slate-400">05/2022 - 08/2022 · Noida, India</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200/90">
              <li>Supported Salesforce administration, development, and user assistance tasks.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
