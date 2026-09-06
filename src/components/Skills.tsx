import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Bot, Code, Cloud, Brain, Blocks, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const iconMap: Record<string, typeof Bot> = {
    Bot,
    Code,
    Cloud,
    Brain,
    Blocks
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          Technical Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
          Core technical competencies across Agentic AI, Full-Stack engineering, Cloud DevOps, and Blockchain.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => {
          const IconComponent = iconMap[category.iconName] || Code;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                        skill.highlight
                          ? "bg-blue-50/50 dark:bg-cyan-950/20 border-blue-200/80 dark:border-cyan-800/60"
                          : "bg-neutral-50/50 dark:bg-neutral-950/30 border-neutral-200/50 dark:border-neutral-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            skill.highlight
                              ? "text-blue-600 dark:text-cyan-400"
                              : "text-neutral-400"
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                      </div>

                      {skill.level && (
                        <span
                          className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-md ${
                            skill.level === "Expert"
                              ? "bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200"
                              : skill.level === "Advanced"
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200"
                              : "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
