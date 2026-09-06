import { useState } from "react";
import { X, Download, Printer, FileText, Phone, Mail, Code2, Brain } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PERSONAL_INFO, WORK_EXPERIENCES, PROJECTS, ACHIEVEMENTS } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"aiml" | "fullstack">("aiml");

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDownloadPath =
    activeTab === "aiml"
      ? PERSONAL_INFO.aimlResumePath
      : PERSONAL_INFO.fullstackResumePath;

  const currentFilename =
    activeTab === "aiml"
      ? "Abhishek_Gupta_AIML_Resume.pdf"
      : "Abhishek_Gupta_FullStack_Resume.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-10 shadow-2xl space-y-6">
        {/* Top Control & Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Curriculum Vitae Preview
              </h2>
              <p className="text-xs text-neutral-500 font-mono">
                Select specialized resume profile below
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={currentDownloadPath}
              download={currentFilename}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition"
            >
              <Download className="w-4 h-4" /> Download Selected PDF
            </a>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual Resume Selector Tabs */}
        <div className="flex items-center gap-3 p-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
          <button
            onClick={() => setActiveTab("aiml")}
            className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              activeTab === "aiml"
                ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-cyan-400 shadow-md"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Brain className="w-4 h-4 text-cyan-500" />
            <span>AI / ML & Agentic AI Resume</span>
          </button>

          <button
            onClick={() => setActiveTab("fullstack")}
            className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              activeTab === "fullstack"
                ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-cyan-400 shadow-md"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span>Full-Stack Web Engineering Resume</span>
          </button>
        </div>

        {/* Printable Resume Document View */}
        <div className="space-y-6 text-neutral-800 dark:text-neutral-200">
          {/* Header Contact Details */}
          <div className="text-center pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1">
              {activeTab === "aiml"
                ? "AI / ML Engineer & Agentic AI Specialist"
                : "Full-Stack Web Engineer & Cloud Systems Developer"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-3">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-500" /> {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-500" /> {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-blue-500" /> {PERSONAL_INFO.github}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Executive Summary
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {activeTab === "aiml"
                ? "Final-year B.Tech CSE AI Engineer specializing in agentic AI systems, deep machine learning pipelines, and LLM orchestration. Experienced with LangGraph multi-agent systems, RAG, PyTorch, TensorFlow, XGBoost, Groq, and Tavily APIs. First-author IEEE-published researcher and lead organizer of Acehack 4.0 & 5.0."
                : "Final-year B.Tech CSE Full-Stack Developer with hands-on experience architecting production web applications using React, Redux, Node.js, Express, FastAPI, Flask, and Django, backed by cloud deployment (AWS EC2/S3, Docker, CI/CD). First-author IEEE researcher and Lead Organizer of Acehack 4.0 & 5.0."}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Education
            </h3>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                  {PERSONAL_INFO.education.institution}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {PERSONAL_INFO.education.degree} — CGPA:{" "}
                  <strong className="text-blue-600 dark:text-cyan-400">
                    {PERSONAL_INFO.education.cgpa}
                  </strong>
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Work Experience
            </h3>
            <div className="space-y-4">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.role} —{" "}
                        <span className="text-blue-600 dark:text-cyan-400">
                          {exp.company}
                        </span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-300 space-y-1 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              {activeTab === "aiml" ? "AI / ML & Agentic Projects" : "Full-Stack Web & IoT Projects"}
            </h3>
            <div className="space-y-3">
              {PROJECTS.filter((p) =>
                activeTab === "aiml"
                  ? p.category === "agentic-ai" || p.category === "ml-analytics"
                  : p.category === "full-stack" || p.category === "agentic-ai"
              ).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                    {proj.title}{" "}
                    <span className="text-[11px] font-normal text-neutral-500 font-mono">
                      ({proj.techStack.slice(0, 4).join(", ")})
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Leadership */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Honors & Achievements
            </h3>
            <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-neutral-900 dark:text-neutral-100">
                    {ach.title}:
                  </strong>{" "}
                  {ach.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
          <a
            href={currentDownloadPath}
            download={currentFilename}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg transition"
          >
            <Download className="w-4 h-4" /> Download PDF Resume ({activeTab === "aiml" ? "AI/ML" : "Full-Stack"})
          </a>
        </div>
      </div>
    </div>
  );
}
