import type { WorkExperience, Project, SkillCategory, Achievement, Certification } from "../types";

export const PERSONAL_INFO = {
  name: "Abhishek Gupta",
  title: "AI / ML Engineer & Full-Stack Developer",
  tagline: "Building autonomous agentic AI pipelines, deep machine learning models, and high-throughput production web applications.",
  summary:
    "Final-year B.Tech CSE student specializing in Agentic AI systems, Machine Learning (PyTorch, TensorFlow, XGBoost, Scikit-Learn), and LLM orchestration (LangGraph, LangChain, Groq, RAG) alongside robust full-stack web engineering (React, Node.js, FastAPI, Flask, Django) and cloud deployment (AWS, Docker, CI/CD). Lead Organizer of Acehack 4.0 & 5.0, Technical Head @ Codesta, and IEEE-published researcher.",
  email: "abhishekgupta0834@gmail.com",
  phone: "+91-7643020833",
  github: "https://github.com/Abhi0833-eng",
  linkedin: "https://www.linkedin.com/in/abhishek-gupta-102079287/",
  leetcode: "https://leetcode.com/u/abhi_0834/",
  codechef: "https://www.codechef.com/users/abhi_0834",
  discord: "https://discord.com/users/1142083658010853416",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/Abhishek_Gupta_Resume.pdf",
  agenticResumePath: "/Abhishek_Gupta_Agentic_GenAI_Resume.pdf",
  fullstackResumePath: "/Abhishek_Gupta_FullStack_Resume.pdf",
  aimlResumePath: "/Abhishek_Gupta_AIML_Resume.pdf",
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI / ML & Web)",
    institution: "University of Engineering & Management (UEM), Jaipur",
    period: "Aug 2023 – May 2027",
    cgpa: "9.19 / 10.0",
    coursework: [
      "Machine Learning & Deep Learning",
      "Generative AI & LLM Systems",
      "Data Structures & Algorithms",
      "DBMS & Vector Databases",
      "Operating Systems",
      "Computer Networks"
    ]
  },
  stats: [
    { label: "B.Tech CGPA", value: "9.19", suffix: "/10" },
    { label: "Internships Completed", value: "4", suffix: "+" },
    { label: "Acehack 4.0 & 5.0", value: "Lead Organizer", suffix: "" },
    { label: "IEEE Publication", value: "First-Author", suffix: "" }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "saa-technologies",
    role: "Full Stack Software Engineer Intern",
    company: "SAA Technologies",
    period: "Oct 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Building Spreezy, an e-commerce grocery-list PWA, as a full stack engineer with React, TypeScript, FastAPI, and Supabase.",
      "Developing front-end features, REST APIs, and database migrations including product browsing, search, cart, user accounts, weekly essentials, and restock suggestions.",
      "Working on the Spreezy.ai application to launch in store for public commercial use, writing clean, tested code with Vitest suites."
    ],
    skills: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "REST APIs", "PWA", "Vitest"]
  },
  {
    id: "pm-accelerator",
    role: "AI Engineer Intern – Full Stack",
    company: "PM Accelerator",
    program: "Cohort 10",
    period: "Aug 2026 – Oct 2026",
    badge: "Completed",
    certificateUrl: "https://drive.google.com/file/d/1_ngx8NqSQrs74OqWDpLfHHRh9VLRwkMe/view",
    highlights: [
      "Built the Spreezy.ai React/TypeScript front end (search, cuisine filtering, item editing) and AI recipe-chat workflows that turn natural-language goals into shopping lists with purchase-history restock suggestions.",
      "Contributed to 20+ FastAPI endpoints and 19 Supabase/PostgreSQL migrations, backed by 550+ tests at a 98% pass rate."
    ],
    skills: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "LangChain", "RAG", "Vitest"]
  },
  {
    id: "stellar-blockchain",
    role: "Stellar Blockchain Developer",
    company: "Rise In — Stellar Development Foundation",
    program: "Belt Progression Program",
    period: "April 2026 – May 2026",
    certificateUrl: "https://drive.google.com/file/d/1WqB__o9pYqrjPt6tEoid9lVa3X_dv7jS/view?pli=1",
    highlights: [
      "Progressed through five belt levels (White → Orange), building 5+ Stellar blockchain dApps including StellarPay and Green Belt dApp.",
      "Developed and compiled Rust smart contracts using Soroban SDK, deploying to Stellar testnet and mainnet.",
      "Integrated decentralized state storage and event emitters for Web3 dApp frontends."
    ],
    skills: ["Stellar", "Soroban SDK", "Rust / Smart Contracts", "Web3 APIs", "Blockchain Architecture"]
  },
  {
    id: "eduskills-python",
    role: "Python Full Stack Virtual Intern",
    company: "EduSkills Academy",
    period: "Jan 2026 – Mar 2026",
    certificateUrl: "https://drive.google.com/file/d/1KCObUpHy0ysDzOuOclv-_hu-kAwcYJda/view",
    highlights: [
      "Completed an intensive 8-week full-stack development program covering modern web architectures.",
      "Built relational database schemas and REST APIs using Django, Flask, HTML5/CSS3, JavaScript, jQuery, and PostgreSQL."
    ],
    skills: ["Python", "Django", "Flask", "JavaScript", "SQL", "Git"]
  },
  {
    id: "aicte-genai",
    role: "Gen-AI Virtual Intern",
    company: "AICTE, Ministry of Education – EduSkills",
    program: "AWS Academy Curriculum",
    period: "Oct 2025 – Dec 2025",
    badge: "Grade 'O' (Outstanding)",
    certificateUrl: "https://drive.google.com/file/d/1XYuu9CqfepG3xGR-R585gz7T163kb2py/view",
    highlights: [
      "Completed 10-week Generative AI virtual internship under the National Internship Portal, securing top Grade 'O'.",
      "Trained and evaluated foundation models on AWS SageMaker, implementing prompt engineering and fine-tuning loops."
    ],
    skills: ["AWS SageMaker", "Generative AI", "LLMs", "Python", "Prompt Engineering"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "autonomous-research-agent",
    title: "Autonomous Research & Report Agent",
    subtitle: "Multi-Agent LangGraph System with Iterative Self-Revision",
    category: "agentic-ai",
    description:
      "A state-of-the-art multi-agent AI system designed to conduct deep autonomous web research, verify facts, generate comprehensive reports, and perform critical self-revision loops.",
    metrics: "Sub-second multi-agent state orchestration & automated critique loops",
    architectureDetails:
      "Orchestrates 4 distinct LLM agents (Research → Fact-Check → Write → Critique) using LangGraph. Utilizes Groq-hosted LLMs for high-speed inference and Tavily Web Search API for real-time ground-truth data retrieval. Exposed via FastAPI backend & Streamlit UI, fully containerized with Docker and deployed live.",
    techStack: ["LangGraph", "Groq API", "Tavily API", "FastAPI", "Streamlit", "Docker", "Python"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://research-agent-langgraph-ha7fnjceqtsjtbxhdpppmu.streamlit.app/",
    featured: true,
    hasInteractiveSim: true
  },
  {
    id: "triage-iq",
    title: "TriageIQ – AI SOC Alert Triage Copilot",
    subtitle: "5-Node Multi-Agent Pipeline & MITRE ATT&CK Incident Reporting",
    category: "agentic-ai",
    description:
      "Built a 5-node LangGraph multi-agent pipeline (Ingestion → Enrichment → Correlation → Triage → Reporting) using VirusTotal and AbuseIPDB to link multi-stage attacks and generate MITRE ATT&CK incident reports.",
    metrics: "Auto-dismissed 66% false positives | Cut batch triage from 25 min to 3.8 s",
    architectureDetails:
      "Combines vector embeddings, VirusTotal, and AbuseIPDB with Groq LLM inference for precise threat intelligence correlation. Deployed with Streamlit frontend and FastAPI REST backend.",
    techStack: ["LangGraph", "LangChain", "VirusTotal", "AbuseIPDB", "Python", "Streamlit", "Groq API"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://triageiq-leypvsxcvivea98tt22hy7.streamlit.app/",
    featured: true
  },
  {
    id: "dhaka-tesla-pool",
    title: "Dhaka Tesla Pool",
    subtitle: "EV Ride-Pooling App with Atomic Concurrency & State Machine",
    category: "full-stack",
    description:
      "Built a 3-seat EV ride-pooling app with JWT authentication, a validated ride-state machine, and atomic seat-booking transactions that prevent race conditions and overbooking.",
    metrics: "Zero overbooking with atomic SQL transactions | Dockerized & deployed on Vercel",
    architectureDetails:
      "Full-stack Next.js and Express architecture utilizing TypeScript, Prisma ORM, and PostgreSQL. Containerized using Docker for production readiness.",
    techStack: ["Next.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Vercel"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://dhaka-tesla-pool-yvnn.vercel.app",
    featured: true
  },
  {
    id: "smart-panchayat",
    title: "Smart Panchayat Civic Platform",
    subtitle: "AWS-Cloud & IoT MQTT Civic Infrastructure Platform",
    category: "full-stack",
    description:
      "Architected a robust Django-React civic management platform on AWS with IoT MQTT telemetry pipelines, digitizing 10+ rural administrative services with REST APIs and MongoDB models.",
    metrics: "99.5% uptime | 30% Infrastructure Cost Reduction via Docker & Auto-scaling",
    architectureDetails:
      "Real-time sensor data streaming via MQTT brokers to a Django backend. React dashboard displays real-time telemetry, service requests, and citizen analytics. Containerized with Docker and deployed live on AWS EC2/S3, Render, and Vercel.",
    techStack: ["Django", "React", "MongoDB", "AWS EC2/S3", "MQTT", "Docker", "Vercel", "Render"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://smart-panchayat-six.vercel.app/",
    featured: true
  },
  {
    id: "nuzio-ai",
    title: "Nuzio AI Audio-News Platform",
    subtitle: "Personalized Audio-News with In-Browser TTS & Live Transcript",
    category: "full-stack",
    description:
      "Built a personalized audio-news platform with a REST API for JWT auth, topic-based feeds, likes, bookmarks, and an Ask-AI endpoint, plus in-browser text-to-speech with a live transcript.",
    metrics: "Real-time TTS speech synthesis with synchronised live text highlight",
    architectureDetails:
      "Engineered with React frontend, Tailwind CSS, Node.js and Express backend, JWT secure authorization, and client-side speech synthesis engines.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "Text-to-Speech"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://nuzio-ai-nine.vercel.app",
    featured: true
  },
  {
    id: "smart-medtech-gloves",
    title: "Smart MedTech IoT Health Gloves",
    subtitle: "Hardware ESP32 Vital Sensing & Emergency Alert System (IIIT Delhi Winner)",
    category: "full-stack",
    description:
      "Engineered an IoT MedTech health glove using ESP32 microcontrollers, touch sensors, and biomedical sensors (heart rate, pulse rate, blood pressure, sugar monitoring). Sends real-time telemetry and automated emergency SOS alerts upon detecting vital anomalies.",
    metrics: "1st Place Winner @ IIIT Delhi Esya'23 (NexTech'23) | Low-latency emergency SOS trigger",
    architectureDetails:
      "ESP32 microcontroller interfacing with PPG pulse sensors, touch capacitive sensors, and GSM/MQTT telemetry modules. Processes real-time bio-signals and triggers instant emergency alerts.",
    techStack: ["ESP32", "IoT", "Sensors", "MQTT", "Embedded C++", "Python", "REST API"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://drive.google.com/file/d/15Jai0Fh2TVjJ_sPeLmjcrEhYu6-8I3HT/view?usp=sharing",
    featured: false
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & ATS Scorer",
    subtitle: "NLP-Powered Resume Screening Engine with CI/CD",
    category: "ml-analytics",
    description:
      "Built an NLP-driven Applicant Tracking System (ATS) engine using custom TF-IDF vectorization to automatically score resumes against job descriptions and return ATS match analytics.",
    metrics: "40% reduction in screening time | Sub-100ms latency on 500+ daily requests",
    architectureDetails:
      "High-throughput Flask REST API optimized with NumPy vectorized matrix operations. Deployed live on Vercel with GitHub Actions CI/CD pipelines.",
    techStack: ["Python", "NLP", "Flask", "TF-IDF", "GitHub Actions", "Vercel"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://ai-resume-analyzer-phi-lilac.vercel.app/",
    featured: false
  },
  {
    id: "loan-default-prediction",
    title: "Explainable Loan Default Predictor",
    subtitle: "XGBoost Machine Learning Classifier with SHAP Interpretability",
    category: "ml-analytics",
    description:
      "Engineered an explainable machine learning model to predict loan default risks in financial datasets using SMOTE oversampling and SHAP feature importance.",
    metrics: "94% Model Accuracy | Live interactive web deployment on Streamlit",
    architectureDetails:
      "Trained XGBoost classifier with SMOTE to handle class imbalance. Integrated SHAP values into an interactive Streamlit UI to output human-interpretable risk explanations.",
    techStack: ["XGBoost", "Python", "SHAP", "SMOTE", "Scikit-Learn", "Streamlit"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://loan-default-abhi.streamlit.app/",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Agentic AI & LLM Systems",
    iconName: "Bot",
    skills: [
      { name: "LangGraph Multi-Agent Systems", level: "Expert", highlight: true },
      { name: "LangChain Agent Pipelines", level: "Expert", highlight: true },
      { name: "Groq & Tavily APIs", level: "Expert", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Expert", highlight: true },
      { name: "LLM Tool-Calling & Prompt Chaining", level: "Expert" },
      { name: "Contextual Bandits & Agentic Loops", level: "Advanced" },
      { name: "FastAPI REST Services", level: "Advanced" }
    ]
  },
  {
    title: "Full-Stack & Web Engineering",
    iconName: "Code",
    skills: [
      { name: "React / Redux / TypeScript", level: "Expert", highlight: true },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "FastAPI, Django & Flask", level: "Expert", highlight: true },
      { name: "Supabase & PostgreSQL", level: "Expert", highlight: true },
      { name: "Tailwind CSS & Responsive UI", level: "Expert" },
      { name: "REST APIs & Microservices", level: "Advanced" }
    ]
  },
  {
    title: "AI / ML, Deep Learning & Data Science",
    iconName: "Brain",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Expert", highlight: true },
      { name: "Scikit-Learn & XGBoost", level: "Expert", highlight: true },
      { name: "SHAP Interpretability & SMOTE", level: "Advanced", highlight: true },
      { name: "OpenCV & Computer Vision", level: "Advanced" },
      { name: "NumPy, Pandas & Matplotlib", level: "Expert" },
      { name: "Streamlit AI UI Applications", level: "Expert" }
    ]
  },
  {
    title: "Cloud, DevOps & Databases",
    iconName: "Cloud",
    skills: [
      { name: "AWS (EC2, S3, Lambda, SageMaker)", level: "Advanced", highlight: true },
      { name: "Docker & Containerization", level: "Advanced", highlight: true },
      { name: "GitHub Actions CI/CD", level: "Advanced" },
      { name: "PostgreSQL, Supabase & MongoDB", level: "Advanced" },
      { name: "Vitest & Test-Driven Development", level: "Advanced" },
      { name: "Vercel & Render Deployment", level: "Proficient" }
    ]
  },
  {
    title: "Blockchain & Web3",
    iconName: "Blocks",
    skills: [
      { name: "Stellar Network Architecture", level: "Advanced" },
      { name: "Soroban SDK (Rust)", level: "Advanced" },
      { name: "Smart Contract Development", level: "Advanced" },
      { name: "MQTT IoT Telemetry Protocol", level: "Advanced" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "iiit-delhi-medtech",
    title: "1st Place Winner – Esya'23 (NexTech'23)",
    organization: "IIIT Delhi",
    type: "Hardware & IoT",
    badge: "1st Place Winner",
    description:
      "Built Smart MedTech IoT Gloves with ESP32 microcontrollers, PPG pulse, BP, and sugar sensors providing real-time vital monitoring and automated emergency family SOS alerts.",
    linkUrl: "https://drive.google.com/file/d/1fTp2wzx0exGoCJawEtZZVnTW29YYP3kH/view?usp=sharing",
    certificateUrl: "https://drive.google.com/file/d/1fTp2wzx0exGoCJawEtZZVnTW29YYP3kH/view?usp=sharing"
  },
  {
    id: "iit-bhu-wheelchair",
    title: "1st Place Winner – Iomatic (Technex'25)",
    organization: "IIT BHU",
    type: "Hardware & IoT",
    badge: "1st Place Winner",
    description:
      "Engineered a Hand-Gesture Controlled Smart Wheelchair using MPU6050 accelerometer gesture sensors translating hand directions into instant directional wheelchair locomotion.",
    linkUrl: "https://drive.google.com/file/d/1U_yx0kvkbw45UmNXKKMmtb3PQRcZXyzU/view?usp=sharing",
    certificateUrl: "https://drive.google.com/file/d/1U_yx0kvkbw45UmNXKKMmtb3PQRcZXyzU/view?usp=sharing"
  },
  {
    id: "ieee-paper",
    title: "First-Author IEEE Xplore Publication",
    organization: "IEEE Xplore",
    type: "Publication",
    badge: "Published IEEE Paper",
    description:
      "Authored and published research paper titled 'Intelligent Accident Detection using FPGA' focusing on low-latency hardware sensor processing.",
    linkUrl: "https://ieeexplore.ieee.org/document/11101305"
  },
  {
    id: "acehack-organizer",
    title: "Lead Organizer – Acehack 4.0 & Acehack 5.0",
    organization: "Acehack National Tech Event",
    type: "Leadership",
    badge: "Core Lead Organizer",
    description:
      "Spearheaded organizing team for Acehack 4.0 and Acehack 5.0 national hackathons, managing platform ops, sponsor relations, logistics, and hundreds of developer participants.",
    linkUrl: "https://www.linkedin.com/company/acehack-5-0/posts/?feedView=all"
  },
  {
    id: "codesta-head",
    title: "Technical Head – Codesta Coding Club",
    organization: "UEM Jaipur",
    type: "Leadership",
    badge: "1,500+ Students Upskilled",
    description:
      "Directed 15+ hands-on AI/ML workshops, mentoring over 1,500+ engineering students in modern software and machine learning stacks.",
    linkUrl: "https://www.linkedin.com/company/codesta-uem-jaipur/?viewAsMember=true"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Cloud Training & Foundations",
    issuer: "LinkedIn Learning",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1-BY4lCcl7Pihpsyzkgcg18kK6YSWCJYb/view?usp=sharing"
  },
  {
    name: "SQL Essential Training & Advanced Querying",
    issuer: "LinkedIn Learning",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1fVCsYfAJtwWgbrVWn-2hFM25FJtToHNr/view?usp=sharing"
  },
  {
    name: "Professional Technical Achievement Badge",
    issuer: "Verified Credential",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1WXwmpufTTuLrpoznpS9cW_TA-En9X8as/view?usp=sharing"
  },
  {
    name: "Blockchain Developer Virtual Internship",
    issuer: "EduSkills Academy / AICTE",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1_XCaQyFpSzw0y1VYpUM5uJdhnyDTQsKD/view"
  },
  {
    name: "Generative AI Developer Certification",
    issuer: "Coursera",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1gb0MrnimP1XWXiJKZtFEd1reCsl4DvO4/view?usp=sharing"
  },
  {
    name: "Natural Language Processing (NLP)",
    issuer: "Coursera",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1kRpxae509o1Dz0xQ0P5VJr28xLmVQ18U/view?usp=sharing"
  },
  {
    name: "Cybersecurity Bootcamp",
    issuer: "AICTE",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/11tf712cZ3dNDYxogv4K5vdqegkA5vd--/view?usp=sharing"
  },
  {
    name: "NPTEL – Python for Data Science",
    issuer: "IIT / NPTEL",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1cIH9tOdngmN6eWuXoqx3ImsKR_jMkIDL/view"
  },
  {
    name: "NPTEL – Technical Communication for Engineers",
    issuer: "IIT / NPTEL",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/1YDeXvVI-LLI4bO6_PEF1-jotnhUiO9eA/view"
  },
  {
    name: "AlgoUniversity – Graph Theory",
    issuer: "AlgoUniversity",
    status: "Verified",
    certificateUrl: "https://drive.google.com/file/d/19AK81KJ2w9lnDd2FOW80EBF2CiyuEEOV/view"
  }
];
