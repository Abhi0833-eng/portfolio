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
  aimlResumePath: "/Abhishek_Gupta_AIML_Resume.pdf",
  fullstackResumePath: "/Abhishek_Gupta_FullStack_Resume.pdf",
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
    id: "pm-accelerator",
    role: "AI Engineer Intern – Full Stack & Data Science",
    company: "PM Accelerator",
    program: "Cohort 10",
    period: "Aug 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Architected and deployed WeatherWise, a full-stack weather application with real-time API integrations.",
      "Engineered core AI/ML modules for Spreezy.ai, an AI shopping assistant PWA utilizing LangChain and RAG pipelines.",
      "Implemented LLM-driven restock suggestions and voice-input shopping list creation, improving user engagement and checkout efficiency."
    ],
    skills: ["LangChain", "RAG", "React", "Node.js", "Python", "FastAPI", "PWA"]
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
    title: "TriageIQ & RAG Knowledge Engine",
    subtitle: "Contextual RAG Retrieval Pipeline & Patient Triage System",
    category: "agentic-ai",
    description:
      "Engineered an advanced RAG (Retrieval-Augmented Generation) pipeline providing intelligent context retrieval, automated document query synthesis, and automated triage scoring.",
    metrics: "Sub-100ms vector search retrieval over unstructured medical knowledge stores",
    architectureDetails:
      "Combines vector embeddings with Groq LLM inference for precise semantic document retrieval. Deployed with Streamlit frontend and REST microservice backend.",
    techStack: ["RAG", "LangChain", "Python", "Streamlit", "Vector DB", "Groq API"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://triageiq-leypvsxcvivea98tt22hy7.streamlit.app/",
    featured: true
  },
  {
    id: "smart-medtech-gloves",
    title: "Smart MedTech IoT Health Gloves",
    subtitle: "Hardware ESP32 Vital Sensing & Emergency Alert System (IIIT Delhi Winner)",
    category: "full-stack",
    description:
      "Engineered an IoT MedTech health glove using ESP32 microcontrollers, touch sensors, and biomedical sensors (heart rate, pulse rate, blood pressure, sugar monitoring). Sends real-time telemetry and automated emergency SOS SMS alerts to family members upon detecting vital anomalies.",
    metrics: "1st Place Winner @ IIIT Delhi Esya'23 (NexTech'23) | Low-latency emergency SOS trigger",
    architectureDetails:
      "ESP32 microcontroller interfacing with PPG pulse sensors, touch capacitive sensors, and GSM/MQTT telemetry modules. Processes real-time bio-signals and triggers instant REST API calls to notify emergency contacts.",
    techStack: ["ESP32", "IoT", "Sensors", "MQTT", "Embedded C++", "Python", "REST API"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://drive.google.com/file/d/1fTp2wzx0exGoCJawEtZZVnTW29YYP3kH/view?usp=sharing",
    featured: true
  },
  {
    id: "smart-panchayat",
    title: "Smart Panchayat Civic Platform",
    subtitle: "AWS-Cloud & IoT MQTT Civic Infrastructure Platform",
    category: "full-stack",
    description:
      "Architected a robust Django-React civic management platform on AWS with IoT MQTT telemetry pipelines, digitizing 10+ rural administrative services.",
    metrics: "99.5% uptime | 30% Infrastructure Cost Reduction via Docker & Auto-scaling",
    architectureDetails:
      "Real-time sensor data streaming via MQTT brokers to a Django backend. React dashboard displays real-time telemetry, service requests, and citizen analytics. Deployed live on Vercel.",
    techStack: ["Django", "React", "AWS EC2/S3", "MQTT", "Docker", "Vercel"],
    githubUrl: "https://github.com/Abhi0833-eng",
    liveDemoUrl: "https://smart-panchayat-six.vercel.app/",
    featured: true
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & ATS Scorer",
    subtitle: "NLP-Powered Resume Screening Engine with CI/CD",
    category: "ml-analytics",
    description:
      "Built an NLP-driven Applicant Tracking System (ATS) engine using custom TF-IDF vectorization to automatically score resumes against job descriptions.",
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
      { name: "Django & Flask", level: "Expert" },
      { name: "Tailwind CSS & Modern UI", level: "Expert" },
      { name: "HTML5 / CSS3 / Responsive Design", level: "Expert" },
      { name: "REST APIs & GraphQL Fundamentals", level: "Advanced" }
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
      { name: "PostgreSQL, MySQL & MongoDB", level: "Advanced" },
      { name: "Redis In-Memory Caching", level: "Proficient" },
      { name: "Kubernetes Fundamentals", level: "Proficient" }
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
    title: "1st Place Winner – Iomatic (Tehnex'25)",
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
    name: "Stellar Blockchain Developer Internship",
    issuer: "AICTE",
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
