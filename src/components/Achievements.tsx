import { ACHIEVEMENTS, CERTIFICATIONS } from "../data/portfolioData";
import { Trophy, BookOpen, Users, Award, ExternalLink, CheckCircle2, Cpu } from "lucide-react";

export default function Achievements() {
  const typeIcons: Record<string, typeof Trophy> = {
    Publication: BookOpen,
    Hackathon: Trophy,
    Leadership: Users,
    Academic: Award,
    "Hardware & IoT": Cpu
  };

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          Honors & Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
          Publications, Hackathons & Awards
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
          Recognized at IEEE Xplore, IIIT Delhi, IIT BHU, national hackathons, and technical leadership roles.
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {ACHIEVEMENTS.map((item) => {
          const IconComponent = typeIcons[item.type] || Award;
          const linkLabel =
            item.type === "Publication"
              ? "View IEEE Publication"
              : item.type === "Leadership"
              ? "View Role / Organization"
              : "View Verified Award / Certificate";

          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3 font-mono">
                  {item.organization}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.linkUrl && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5 hover:underline pt-3 border-t border-neutral-100 dark:border-neutral-800"
                >
                  <span>{linkLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Certifications Bar */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-indigo-900/10 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
          Verified Professional Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, idx) => {
            const content = (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h4>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
                {cert.certificateUrl && (
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 shrink-0" />
                )}
              </div>
            );

            return cert.certificateUrl ? (
              <a
                key={idx}
                href={cert.certificateUrl}
                target="_blank"
                rel="noreferrer"
                title={`View ${cert.name} Certificate`}
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </section>
  );
}
