import { PERSONAL_INFO } from "../data/portfolioData";
import AgenticAIDemo from "./AgenticAIDemo";
import { ArrowUpRight, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./SocialIcons";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-blue-700 dark:text-cyan-300 font-mono">
              Open to AI / ML & Full-Stack Engineering Roles
            </span>
          </div>

          {/* Main Title with Avatar Photo */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white dark:border-neutral-900 shadow-xl"
              />
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                Hi, I'm{" "}
                <span className="gradient-text font-extrabold">
                  Abhishek Gupta
                </span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 font-[var(--font-heading)]">
                AI / ML Engineer & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Bio Summary */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Specializing in <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">AI/ML models, Agentic AI systems</strong> (LangGraph, Groq, Tavily, RAG), and production full-stack web applications. First-author IEEE researcher and Lead Organizer of Acehack 4.0 & 5.0.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-blue-500" />
              <span>Resume Options</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-500" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Redesigned Stats Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-900/60 backdrop-blur-md space-y-1 hover:border-blue-500/50 transition-all"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 font-[var(--font-heading)] flex items-center gap-1">
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-blue-600 dark:text-cyan-400 text-sm font-bold">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-mono font-medium text-neutral-500 dark:text-neutral-400 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Agent Sandbox */}
        <div className="lg:col-span-5">
          <AgenticAIDemo />
        </div>
      </div>
    </section>
  );
}
