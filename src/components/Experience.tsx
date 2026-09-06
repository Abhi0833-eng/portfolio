import { WORK_EXPERIENCES } from "../data/portfolioData";
import { Briefcase, Calendar, ChevronRight, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          Work History & Internships
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
          Professional Experience
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
          Hands-on technical roles building production AI systems, blockchain smart contracts, and cloud web applications.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
        {WORK_EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Icon Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-2 border-blue-600 dark:border-cyan-400 flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Main Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-base font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-2">
                    <span>{exp.company}</span>
                    {exp.program && (
                      <span className="text-xs text-neutral-500 font-normal">
                        ({exp.program})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags & Certificate Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5"
                  >
                    <span>View Verified Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
