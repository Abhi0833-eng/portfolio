import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import type { Project } from "../types";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Sparkles, ArrowRight, Activity } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "agentic-ai" | "full-stack" | "ml-analytics">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "agentic-ai", label: "Agentic AI & LLMs" },
    { id: "full-stack", label: "Full-Stack & IoT" },
    { id: "ml-analytics", label: "ML & Data Science" }
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
          Projects & AI Systems
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
          Production web applications, multi-agent LLM systems, and machine learning pipelines.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Badge Row */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 dark:bg-cyan-950/60 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800/60">
                  {project.category === "agentic-ai"
                    ? "Agentic AI"
                    : project.category === "full-stack"
                    ? "Full-Stack"
                    : "ML & Analytics"}
                </span>

                {project.featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> Featured Project
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-4 font-mono">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Metrics Pill */}
              {project.metrics && (
                <div className="mb-6 p-3 rounded-xl bg-blue-50/70 dark:bg-neutral-950/60 border border-blue-100 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Bottom Row: Tech Stack & Action Links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5 hover:underline"
                >
                  Architecture & Details <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
