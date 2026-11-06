import { useState } from "react";
import { X, Download, Printer, FileText, Phone, Mail, Code2, Brain, Bot } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PERSONAL_INFO, WORK_EXPERIENCES, PROJECTS, ACHIEVEMENTS } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ResumeTab = "agentic" | "fullstack" | "aiml";

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<ResumeTab>("agentic");

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getResumeMeta = () => {
    switch (activeTab) {
      case "agentic":
        return {
          downloadPath: PERSONAL_INFO.agenticResumePath,
          filename: "Abhishek_Gupta_Agentic_GenAI_Resume.pdf",
          title: "Agentic AI & GenAI Systems Engineer",
          summary:
            "Final-year B.Tech CSE student building agentic AI systems with LangGraph and LangChain: multi-agent pipelines, RAG, and LLM tool-calling, shipped as full-stack apps with FastAPI and React. 4+ internships (SAA Technologies, PM Accelerator, Stellar, AWS Gen-AI), IEEE-published researcher.",
          skills: [
            { label: "Agentic AI & Automation", val: "LangGraph Multi-Agent Orchestration, LangChain, Groq API, Tavily API, LLM Tool-Calling, Prompt Chaining, RAG" },
            { label: "Languages", val: "C++, Python, JavaScript, SQL, HTML/CSS" },
            { label: "AI/ML & Data", val: "TensorFlow, PyTorch, Scikit-learn, OpenCV, NumPy, Streamlit" },
            { label: "Web & Cloud", val: "React, Node.js, Express.js, TypeScript, Supabase, Flask, Django, FastAPI, AWS, Docker, Git, MongoDB, PostgreSQL, MySQL" },
            { label: "Blockchain & Web3", val: "Stellar, Soroban SDK, Smart Contracts, Blockchain Architecture" }
          ],
          filterProjects: (p: (typeof PROJECTS)[0]) => p.id === "autonomous-research-agent" || p.id === "triage-iq" || p.id === "smart-medtech-gloves"
        };
      case "fullstack":
        return {
          downloadPath: PERSONAL_INFO.fullstackResumePath,
          filename: "Abhishek_Gupta_FullStack_Resume.pdf",
          title: "Full-Stack Software Engineer & Cloud Systems",
          summary:
            "Final-year B.Tech CSE student (CGPA 9.19) and full stack developer building web apps with React, TypeScript, FastAPI, Node.js, and PostgreSQL. Currently interning at SAA Technologies; previously shipped features backed by 550+ tests at PM Accelerator. Experienced with REST APIs, Docker, AWS, and LLM features (RAG, tool-calling). First-author IEEE publication.",
          skills: [
            { label: "Languages", val: "JavaScript, TypeScript, Python, SQL, C++, HTML/CSS" },
            { label: "Frontend", val: "React, Next.js, Tailwind CSS, Bootstrap, Responsive Design, Vitest, Jest/React Testing Library" },
            { label: "Backend", val: "Node.js, Express, FastAPI, Django, Flask, REST APIs, JWT Authentication, Prisma" },
            { label: "Databases & Cloud", val: "PostgreSQL, Supabase, MongoDB, MySQL, AWS (EC2, S3), Docker, Git, CI/CD, GitHub Actions, Vercel, Render" },
            { label: "Applied AI & Methodologies", val: "LangChain, LangGraph, RAG, LLM Tool-Calling, Scikit-learn, Agile, OOP, Microservices" }
          ],
          filterProjects: (p: (typeof PROJECTS)[0]) => p.id === "smart-panchayat" || p.id === "dhaka-tesla-pool" || p.id === "nuzio-ai"
        };
      case "aiml":
      default:
        return {
          downloadPath: PERSONAL_INFO.aimlResumePath,
          filename: "Abhishek_Gupta_AIML_Resume.pdf",
          title: "AI / ML Engineer & Data Science Specialist",
          summary:
            "Final-year B.Tech CSE student with hands-on ML and GenAI experience: classification, NLP, model explainability, and deploying models as REST APIs, plus LLM agents built with LangGraph. 3 internships (SAA Technologies, PM Accelerator, Stellar), IEEE-published researcher.",
          skills: [
            { label: "AI/ML & Data", val: "Scikit-learn, XGBoost, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, NLP (TF-IDF), SHAP, SMOTE, Feature Engineering, Model Evaluation, Streamlit" },
            { label: "GenAI & LLM", val: "LangGraph Multi-Agent Orchestration, LangChain, RAG, LLM Tool-Calling, Prompt Chaining, Groq API, Tavily API" },
            { label: "Languages", val: "Python, C++, SQL, JavaScript, TypeScript, HTML/CSS" },
            { label: "Web & Cloud", val: "FastAPI, Flask, React, Node.js, Supabase, PostgreSQL, MongoDB, REST APIs, AWS, Docker, Git" },
            { label: "Blockchain & Methodologies", val: "Stellar, Soroban SDK, Smart Contracts, Agile, CI/CD, Microservices, OOP, TDD" }
          ],
          filterProjects: (p: (typeof PROJECTS)[0]) => p.id === "autonomous-research-agent" || p.id === "ai-resume-analyzer" || p.id === "loan-default-prediction"
        };
    }
  };

  const meta = getResumeMeta();

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
                Select from 3 specialized profiles below
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={meta.downloadPath}
              download={meta.filename}
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

        {/* 3 Specialized Resume Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
          <button
            onClick={() => setActiveTab("agentic")}
            className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              activeTab === "agentic"
                ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-cyan-400 shadow-md"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Bot className="w-4 h-4 text-cyan-500" />
            <span>Agentic & GenAI Resume</span>
          </button>

          <button
            onClick={() => setActiveTab("fullstack")}
            className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              activeTab === "fullstack"
                ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-cyan-400 shadow-md"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span>Full-Stack Engineer Resume</span>
          </button>

          <button
            onClick={() => setActiveTab("aiml")}
            className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              activeTab === "aiml"
                ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-cyan-400 shadow-md"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Brain className="w-4 h-4 text-purple-500" />
            <span>AI / ML & Data Science Resume</span>
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
              {meta.title}
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
              Summary
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {meta.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {meta.skills.map((s, idx) => (
                <div key={idx}>
                  <strong className="text-neutral-900 dark:text-neutral-100">{s.label}: </strong>
                  <span className="text-neutral-700 dark:text-neutral-300">{s.val}</span>
                </div>
              ))}
            </div>
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
              Key Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS.filter(meta.filterProjects).map((proj) => (
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

          {/* Honors & Achievements */}
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
            href={meta.downloadPath}
            download={meta.filename}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg transition"
          >
            <Download className="w-4 h-4" /> Download {meta.filename}
          </a>
        </div>
      </div>
    </div>
  );
}
