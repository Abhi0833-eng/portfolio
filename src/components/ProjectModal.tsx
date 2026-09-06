import type { Project } from "../types";
import { X, ExternalLink, Sparkles, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            Project Deep Dive
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Highlight Metrics Callout */}
        {project.metrics && (
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase text-blue-800 dark:text-cyan-300">
                Key Performance Impact
              </span>
              <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {project.metrics}
              </p>
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Overview
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Details */}
        {project.architectureDetails && (
          <div>
            <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-500" />
              Technical Architecture & Pipeline
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
              {project.architectureDetails}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" />
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold text-xs flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              <GithubIcon className="w-4 h-4" /> View Repository
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
