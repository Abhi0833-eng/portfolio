import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            AG
          </div>
          <div>
            <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm font-[var(--font-heading)]">
              Abhishek Gupta
            </span>
            <p className="text-xs text-neutral-500 font-mono">
              AI Engineer & Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono text-center">
          © {new Date().getFullYear()} Abhishek Gupta. Built with React & Tailwind CSS.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:shadow-md transition"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
