# 🚀 Abhishek Gupta — AI / ML & Full-Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Live Portfolio](https://img.shields.io/badge/Live_Website-abhishekgupta--ai.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://abhishekgupta-ai.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Active_&_Open_For_Roles-22c55e?style=for-the-badge)](https://linkedin.com/in/abhishek-gupta-102079287/)

Welcome to the official portfolio repository of **Abhishek Gupta** — Final-Year B.Tech CSE Student (CGPA **9.19/10.0**), **AI/ML Engineer & Full-Stack Software Developer**, **IEEE Published Researcher**, and **Lead Organizer of Acehack 4.0 & 5.0**.

🌐 **Live Website**: [https://abhishekgupta-ai.vercel.app](https://abhishekgupta-ai.vercel.app)

---

## 🌟 Key Features

- 🧠 **Interactive LangGraph Agentic AI Sandbox**: Live step-by-step simulator showcasing autonomous multi-agent state transitions (`Researcher` ➔ `Fact-Checker` ➔ `Report Writer` ➔ `Critique & Self-Revision`).
- 🌓 **Adaptive Dark / Light Theme Engine**: Powered by Tailwind CSS v4 custom variant class strategy with `localStorage` preference persistence.
- 📄 **Triple-Resume Specialization Engine**: Recruiter modal with instant live previews and dedicated authentic PDF downloads for:
  - 🤖 **Agentic & GenAI Systems Engineer Resume**
  - 💻 **Full-Stack Software Engineering Resume**
  - 🧠 **AI / ML & Data Science Specialist Resume**
- 🎯 **Filterable Projects Showcase**: Categorized project cards with live metrics, architecture breakdowns, and verified production links:
  - **Dhaka Tesla Pool**: EV ride-pooling app with atomic SQL transactions deployed live on [Vercel](https://dhaka-tesla-pool-yvnn.vercel.app).
  - **Nuzio AI Audio-News**: Personalized audio news with speech synthesis deployed live on [Vercel](https://nuzio-ai-nine.vercel.app).
  - **Autonomous Research & Report Agent**: LangGraph multi-agent pipeline with self-revision loops deployed live on Streamlit.
  - **TriageIQ**: AI SOC Alert Copilot with VirusTotal, AbuseIPDB, and MITRE ATT&CK integration.
  - **Smart Panchayat**: AWS Cloud and IoT MQTT civic infrastructure platform.
  - **Smart MedTech IoT Health Gloves**: 1st Place Winner @ IIIT Delhi Esya'23.
- 💼 **Professional Experience Timeline**:
  - **SAA Technologies**: Full Stack Software Engineer Intern (*Oct 2026 – Present*) — Building Spreezy e-commerce grocery-list PWA for public store launch.
  - **PM Accelerator**: AI Engineer Intern – Full Stack (*Aug 2026 – Oct 2026*) — Certified AI Engineer, Spreezy.ai recipes, 20+ FastAPI endpoints & 19 migrations.
  - **Rise In / Stellar Development Foundation**: Stellar Blockchain Developer (Belt Progression Program).
  - **EduSkills Academy / AICTE**: Blockchain Developer & Python Full Stack Virtual Intern.
- 🏆 **IEEE Publication & Honors**: First-Author IEEE Xplore publication (*Intelligent Accident Detection using FPGA*), Winner @ IIIT Delhi, Winner @ IIT BHU.
- ⚡ **Direct Message Delivery**: 1-click prefilled Gmail Web compose, default mail client fallback, and instant WhatsApp chat.

---

## 🛠️ Technology Ecosystem

| Domain | Technologies & Frameworks |
|---|---|
| **Agentic AI & Automation** | LangGraph Multi-Agent Systems, LangChain, Groq API, Tavily Web Search, RAG, LLM Tool-Calling, Prompt Chaining |
| **AI / ML & Data Science** | PyTorch, TensorFlow, Scikit-Learn, XGBoost, SHAP Interpretability, SMOTE, OpenCV, NumPy, Pandas, Streamlit |
| **Frontend & UI** | React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Glassmorphism CSS |
| **Backend & Microservices** | Node.js, Express, FastAPI, Flask, Django, REST APIs, Prisma ORM |
| **Cloud, DevOps & Databases** | AWS (EC2, S3, SageMaker, Lambda), Docker, GitHub Actions CI/CD, PostgreSQL, Supabase, MongoDB, MySQL, Vitest |
| **Blockchain & Web3** | Stellar Network, Soroban SDK (Rust), Smart Contracts, MQTT Telemetry |

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── Abhishek_Gupta_Agentic_GenAI_Resume.pdf  # Exact Agentic & GenAI Resume PDF
│   ├── Abhishek_Gupta_FullStack_Resume.pdf      # Exact Full-Stack Resume PDF
│   ├── Abhishek_Gupta_AIML_Resume.pdf           # Exact AI/ML & Data Science Resume PDF
│   ├── Abhishek_Gupta_Resume.pdf                # Default Resume PDF
│   ├── profile.jpg                              # Profile avatar image
│   ├── icons.svg
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx             # Specialization pillars & UEM Jaipur academic card
│   │   ├── Achievements.tsx      # IEEE paper, Acehack leadership & verified certs
│   │   ├── AgenticAIDemo.tsx     # Interactive multi-agent sandbox simulator
│   │   ├── Contact.tsx           # Direct Gmail, WhatsApp, Phone dialer & message form
│   │   ├── Experience.tsx        # Career timeline (SAA Technologies, PM Accelerator, Stellar, etc.)
│   │   ├── Footer.tsx            # Signature footer & scroll to top
│   │   ├── Hero.tsx              # Hero banner, avatar photo, CTAs & stats grid
│   │   ├── Navbar.tsx            # Sticky header, brand logo, dark/light toggle & drawer
│   │   ├── ProjectModal.tsx      # Architecture deep-dive modal drawer
│   │   ├── Projects.tsx          # Filterable projects grid with live demos
│   │   ├── ResumeModal.tsx       # 3-specialization resume selector & PDF downloader
│   │   ├── Skills.tsx            # Categorized skill tree with proficiency badges
│   │   └── SocialIcons.tsx       # Reusable GitHub, LinkedIn, LeetCode, CodeChef icons
│   ├── data/
│   │   └── portfolioData.ts      # Structured resume data, metrics & credentials
│   ├── hooks/
│   │   └── useTheme.ts           # Dark/light theme state hook
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app component assembly
│   └── index.css                 # Tailwind v4 import & custom CSS animations
├── package.json
└── vite.config.ts
```

---

## 💻 Local Setup & Quick Start

Follow these steps to run the portfolio on your local machine:

### 1. Clone Repository
```bash
git clone https://github.com/Abhi0833-eng/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 📬 Contact & Professional Links

- **Email**: [abhishekgupta0834@gmail.com](mailto:abhishekgupta0834@gmail.com)
- **Phone / WhatsApp**: [+91-7643020833](https://wa.me/917643020833)
- **LinkedIn**: [linkedin.com/in/abhishek-gupta-102079287](https://www.linkedin.com/in/abhishek-gupta-102079287/)
- **GitHub**: [github.com/Abhi0833-eng](https://github.com/Abhi0833-eng)
- **LeetCode**: [leetcode.com/u/abhi_0834](https://leetcode.com/u/abhi_0834/)
- **CodeChef**: [codechef.com/users/abhi_0834](https://www.codechef.com/users/abhi_0834)
- **Discord**: [discord.com/users/1142083658010853416](https://discord.com/users/1142083658010853416)

---

⭐ **If you find this project interesting, feel free to give it a star on GitHub!**
