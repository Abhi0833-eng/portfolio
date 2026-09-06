import { useState } from "react";
import { Bot, Search, ShieldCheck, FileEdit, CheckCircle2, Play, RefreshCw, Terminal, Sparkles } from "lucide-react";

interface AgentStep {
  id: number;
  name: string;
  role: string;
  icon: typeof Bot;
  color: string;
  status: "idle" | "running" | "completed";
  output: string;
}

export default function AgenticAIDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [selectedTopic] = useState("Agentic LLM Architectures in Production");

  const [steps, setSteps] = useState<AgentStep[]>([
    {
      id: 0,
      name: "Researcher Agent",
      role: "Tavily Web Search & Context Extraction",
      icon: Search,
      color: "from-cyan-500 to-blue-500",
      status: "idle",
      output: "Retrieved 14 live web citations on Groq LLM latency & LangGraph state graphs."
    },
    {
      id: 1,
      name: "Fact-Checker Agent",
      role: "Ground-Truth Verification & Filter",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      status: "idle",
      output: "Cross-verified 98.4% claim accuracy. Filtered out 2 unverified blog posts."
    },
    {
      id: 2,
      name: "Report Writer Agent",
      role: "Groq LLM Synthesis & Drafting",
      icon: FileEdit,
      color: "from-purple-500 to-indigo-500",
      status: "idle",
      output: "Generated structured 4-section executive summary with benchmark tables."
    },
    {
      id: 3,
      name: "Critique & Refinement Agent",
      role: "Self-Revision Loop & Polish",
      icon: CheckCircle2,
      color: "from-amber-500 to-orange-500",
      status: "idle",
      output: "Score: 9.8/10. Applied self-correction loop. Report finalized for FastAPI delivery."
    }
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);

    // Reset steps
    setSteps((prev) =>
      prev.map((step) => ({ ...step, status: "idle" }))
    );

    let stepIndex = 0;
    const interval = setInterval(() => {
      setSteps((prev) =>
        prev.map((step, idx) => {
          if (idx < stepIndex) return { ...step, status: "completed" };
          if (idx === stepIndex) return { ...step, status: "running" };
          return { ...step, status: "idle" };
        })
      );

      setCurrentStep(stepIndex);
      stepIndex++;

      if (stepIndex > 4) {
        clearInterval(interval);
        setSteps((prev) => prev.map((step) => ({ ...step, status: "completed" })));
        setIsRunning(false);
      }
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-5 md:p-6 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Interactive Demo • LangGraph Engine</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            Multi-Agent Autonomous Pipeline
          </h3>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={`px-4 py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
            isRunning
              ? "bg-neutral-300 dark:bg-neutral-800 text-neutral-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-200" />
              <span>Orchestrating...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Simulate Pipeline</span>
            </>
          )}
        </button>
      </div>

      {/* Preset Query */}
      <div className="mb-6 flex items-center gap-2 text-xs font-mono bg-neutral-100 dark:bg-neutral-950 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
        <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
        <span className="text-neutral-400">Target Query:</span>
        <span className="font-semibold truncate">"{selectedTopic}"</span>
      </div>

      {/* Step Flow Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {steps.map((step) => {
          const StepIcon = step.icon;
          const isCurrent = currentStep === step.id && isRunning;
          const isDone = step.status === "completed";

          return (
            <div
              key={step.id}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isCurrent
                  ? "border-blue-500 dark:border-cyan-500 bg-blue-50/50 dark:bg-cyan-950/20 shadow-lg scale-[1.01]"
                  : isDone
                  ? "border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-950/10"
                  : "border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white shadow-sm`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                      {step.name}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {step.role}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  {isCurrent && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-cyan-950 dark:text-cyan-300 animate-pulse">
                      Processing...
                    </span>
                  )}
                  {isDone && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Done
                    </span>
                  )}
                  {!isCurrent && !isDone && (
                    <span className="text-[10px] text-neutral-400 font-mono">Idle</span>
                  )}
                </div>
              </div>

              {/* Output snippet */}
              <div className="mt-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-white/60 dark:bg-neutral-900/60 p-2 rounded border border-neutral-200/50 dark:border-neutral-800/50">
                {isCurrent ? (
                  <span className="text-blue-600 dark:text-cyan-400 animate-pulse font-semibold">
                    &gt; Executing step...
                  </span>
                ) : isDone ? (
                  <span>{step.output}</span>
                ) : (
                  <span className="text-neutral-400 italic">Waiting in graph queue...</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time State Output Footer */}
      <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-800 font-mono">
        <span>State Engine: LangGraph + Groq LLMs</span>
        <span className="text-emerald-500 font-semibold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          System Operational
        </span>
      </div>
    </div>
  );
}
