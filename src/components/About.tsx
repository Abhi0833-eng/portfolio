import { PERSONAL_INFO } from "../data/portfolioData";
import { GraduationCap, Award, Brain, Code, Cloud, Layers, CheckCircle2, Cpu } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Agentic AI & LLMs",
      desc: "Building self-revision multi-agent pipelines using LangGraph, LangChain, Groq, and RAG over context stores.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI / ML & Deep Learning",
      desc: "Training and deploying machine learning models using PyTorch, TensorFlow, XGBoost, Scikit-Learn, and SHAP.",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Full-Stack Web Engineering",
      desc: "Developing high-throughput web apps and REST microservices using React, Node.js, FastAPI, Flask, and Django.",
      icon: Code,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Cloud & DevOps Pipelines",
      desc: "Deploying production services on AWS (EC2, S3, SageMaker, Lambda) with Docker containerization and GitHub Actions.",
      icon: Cloud,
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Blockchain & Web3",
      desc: "Developing smart contracts in Soroban SDK (Rust) and deploying decentralized applications on Stellar network.",
      icon: Layers,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          Background & Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
          Engineering AI/ML, Agentic & Full-Stack Systems
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
          I bridge the gap between cutting-edge LLM orchestration research, deep machine learning models, and robust full-stack software architecture.
        </p>
      </div>

      {/* Grid of Specialization Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Education & Academic Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 font-bold">
                Academic Background
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                {PERSONAL_INFO.education.degree}
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-1">
                {PERSONAL_INFO.education.period}
              </p>
            </div>
          </div>

          {/* CGPA Badge */}
          <div className="shrink-0 bg-blue-600 dark:bg-cyan-500 text-white dark:text-neutral-950 px-5 py-3 rounded-2xl shadow-md text-center">
            <span className="text-xs font-semibold block uppercase tracking-wider">
              Cumulative CGPA
            </span>
            <span className="text-2xl font-black font-[var(--font-heading)]">
              {PERSONAL_INFO.education.cgpa}
            </span>
          </div>
        </div>

        {/* Coursework Tags */}
        <div className="pt-6">
          <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-500" />
            Core Technical Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_INFO.education.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-200/60 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-300/40 dark:border-neutral-700/40 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
