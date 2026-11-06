import fitz  # PyMuPDF
import os

PAGE_WIDTH = 595.276   # A4 width in points
PAGE_HEIGHT = 841.890  # A4 height in points
MARGIN_LEFT = 38
MARGIN_RIGHT = PAGE_WIDTH - 38
USABLE_WIDTH = MARGIN_RIGHT - MARGIN_LEFT

FONT_REG = "helv"
FONT_BOLD = "hebo"
FONT_ITALIC = "heit"
FONT_BOLD_ITALIC = "hebi"

COLOR_BLACK = (0.08, 0.08, 0.08)
COLOR_DARK = (0.2, 0.2, 0.2)
COLOR_GRAY = (0.4, 0.4, 0.4)
COLOR_LINE = (0.7, 0.7, 0.7)
COLOR_LINK = (0.05, 0.35, 0.75)

class ResumeBuilder:
    def __init__(self):
        self.doc = fitz.open()
        self.page = self.doc.new_page(width=PAGE_WIDTH, height=PAGE_HEIGHT)
        self.y = 30

    def draw_header(self, name, phone, email, linkedin, github):
        # Name
        rect = fitz.Rect(MARGIN_LEFT, self.y, MARGIN_RIGHT, self.y + 20)
        self.page.insert_textbox(rect, name, fontsize=17, fontname=FONT_BOLD, align=fitz.TEXT_ALIGN_CENTER, color=COLOR_BLACK)
        self.y += 20

        # Contact info
        contact = f"Phone: {phone}   —   Email: {email}   —   LinkedIn: {linkedin}   —   GitHub: {github}"
        rect2 = fitz.Rect(MARGIN_LEFT, self.y, MARGIN_RIGHT, self.y + 12)
        self.page.insert_textbox(rect2, contact, fontsize=8.0, fontname=FONT_REG, align=fitz.TEXT_ALIGN_CENTER, color=COLOR_DARK)
        self.y += 14

    def draw_section(self, title):
        self.y += 2
        p = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p, title, fontsize=9.8, fontname=FONT_BOLD, color=COLOR_BLACK)
        self.y += 9
        shape = self.page.new_shape()
        shape.draw_line(fitz.Point(MARGIN_LEFT, self.y), fitz.Point(MARGIN_RIGHT, self.y))
        shape.finish(color=COLOR_LINE, width=0.6)
        shape.commit()
        self.y += 4

    def draw_summary(self, text):
        rect = fitz.Rect(MARGIN_LEFT, self.y, MARGIN_RIGHT, self.y + 40)
        self.page.insert_textbox(rect, text, fontsize=8.2, fontname=FONT_REG, color=COLOR_DARK, lineheight=10.0)
        # Approximate height
        lines = len(text) / 108.0
        self.y += int(lines + 1) * 10.0 + 1

    def draw_skill(self, cat, items):
        p = fitz.Point(MARGIN_LEFT, self.y + 7)
        cat_str = f"{cat}: "
        self.page.insert_text(p, cat_str, fontsize=8.1, fontname=FONT_BOLD, color=COLOR_BLACK)
        w = fitz.get_text_length(cat_str, fontname=FONT_BOLD, fontsize=8.1)
        
        rect = fitz.Rect(MARGIN_LEFT + w, self.y, MARGIN_RIGHT, self.y + 24)
        self.page.insert_textbox(rect, items, fontsize=8.1, fontname=FONT_REG, color=COLOR_DARK, lineheight=9.8)
        
        full_len = w + fitz.get_text_length(items, fontname=FONT_REG, fontsize=8.1)
        lines = int(full_len // USABLE_WIDTH) + 1
        self.y += lines * 9.8 + 0.5

    def draw_job(self, role, company, period, bullets, subheader=""):
        # Role & period
        p1 = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p1, role, fontsize=8.9, fontname=FONT_BOLD, color=COLOR_BLACK)
        
        p_len = fitz.get_text_length(period, fontname=FONT_REG, fontsize=8.2)
        p2 = fitz.Point(MARGIN_RIGHT - p_len, self.y + 7)
        self.page.insert_text(p2, period, fontsize=8.2, fontname=FONT_REG, color=COLOR_DARK)
        self.y += 9.5

        # Company
        comp_str = company + (f"  —  {subheader}" if subheader else "")
        p3 = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p3, comp_str, fontsize=8.2, fontname=FONT_ITALIC, color=COLOR_DARK)
        self.y += 9.5

        for b in bullets:
            self.draw_bullet(b)

    def draw_bullet(self, text, indent=6):
        sym = "•  "
        p = fitz.Point(MARGIN_LEFT + indent, self.y + 6.5)
        self.page.insert_text(p, sym, fontsize=7.8, fontname=FONT_REG, color=COLOR_BLACK)
        
        w_sym = fitz.get_text_length(sym, fontname=FONT_REG, fontsize=7.8)
        rect = fitz.Rect(MARGIN_LEFT + indent + w_sym, self.y, MARGIN_RIGHT, self.y + 40)
        self.page.insert_textbox(rect, text, fontsize=7.9, fontname=FONT_REG, color=COLOR_DARK, lineheight=9.5)
        
        lines = int(len(text) // 106) + 1
        self.y += lines * 9.5 + 1.0

    def draw_project(self, title, tech_stack, bullets, link="[Live Demo]"):
        p1 = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p1, title, fontsize=8.7, fontname=FONT_BOLD, color=COLOR_BLACK)
        t_w = fitz.get_text_length(title + "  ", fontname=FONT_BOLD, fontsize=8.7)
        
        p2 = fitz.Point(MARGIN_LEFT + t_w, self.y + 7)
        self.page.insert_text(p2, f"{tech_stack}", fontsize=8.0, fontname=FONT_ITALIC, color=COLOR_GRAY)
        
        if link:
            l_len = fitz.get_text_length(link, fontname=FONT_BOLD, fontsize=8.0)
            p3 = fitz.Point(MARGIN_RIGHT - l_len, self.y + 7)
            self.page.insert_text(p3, link, fontsize=8.0, fontname=FONT_BOLD, color=COLOR_LINK)
            
        self.y += 9.5
        for b in bullets:
            self.draw_bullet(b)

    def draw_education(self, inst, period, degree, cgpa, coursework):
        p1 = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p1, inst, fontsize=8.9, fontname=FONT_BOLD, color=COLOR_BLACK)
        
        p_len = fitz.get_text_length(period, fontname=FONT_REG, fontsize=8.2)
        p2 = fitz.Point(MARGIN_RIGHT - p_len, self.y + 7)
        self.page.insert_text(p2, period, fontsize=8.2, fontname=FONT_REG, color=COLOR_DARK)
        self.y += 9.5
        
        p3 = fitz.Point(MARGIN_LEFT, self.y + 7)
        deg_str = f"{degree}   —   CGPA: {cgpa}"
        self.page.insert_text(p3, deg_str, fontsize=8.2, fontname=FONT_REG, color=COLOR_DARK)
        self.y += 9.5
        
        p4 = fitz.Point(MARGIN_LEFT, self.y + 7)
        self.page.insert_text(p4, f"Coursework: {coursework}", fontsize=7.9, fontname=FONT_REG, color=COLOR_GRAY)
        self.y += 10.5

    def draw_two_col(self, items):
        mid = MARGIN_LEFT + USABLE_WIDTH / 2
        for i in range(0, len(items), 2):
            p1 = fitz.Point(MARGIN_LEFT + 6, self.y + 6.5)
            self.page.insert_text(p1, f"•  {items[i]}", fontsize=7.9, fontname=FONT_REG, color=COLOR_DARK)
            if i + 1 < len(items):
                p2 = fitz.Point(mid + 6, self.y + 6.5)
                self.page.insert_text(p2, f"•  {items[i+1]}", fontsize=7.9, fontname=FONT_REG, color=COLOR_DARK)
            self.y += 9.5

    def save(self, path):
        self.doc.save(path)
        print(f"Generated {path}: {os.path.getsize(path)} bytes")


def build_agentic_resume(out_path):
    rb = ResumeBuilder()
    rb.draw_header(
        "Abhishek Gupta",
        "+91-7643020833",
        "abhishekgupta0834@gmail.com",
        "linkedin.com/in/abhishek-gupta-102079287",
        "github.com/Abhi0833-eng"
    )
    
    rb.draw_section("Summary")
    rb.draw_summary(
        "Final-year B.Tech CSE student building agentic AI systems with LangGraph and LangChain: multi-agent pipelines, RAG, and LLM tool-calling, shipped as full-stack apps with FastAPI and React. 4+ internships (SAA Technologies, PM Accelerator, Stellar, AWS Gen-AI), IEEE-published researcher."
    )
    
    rb.draw_section("Technical Skills")
    rb.draw_skill("Languages", "C++, Python, JavaScript, SQL, HTML/CSS")
    rb.draw_skill("Agentic AI & Automation", "LangGraph Multi-Agent Orchestration, LangChain, Groq API, Tavily API, LLM Tool-Calling, Prompt Chaining, RAG")
    rb.draw_skill("AI/ML & Data", "TensorFlow, PyTorch, Scikit-learn, OpenCV, NumPy, Streamlit")
    rb.draw_skill("Web & Cloud", "React, Node.js, Express.js, TypeScript, Supabase, Flask, Django, FastAPI, AWS, Docker, Git, MongoDB, PostgreSQL, MySQL")
    rb.draw_skill("Blockchain & Web3", "Stellar, Soroban SDK, Smart Contracts, Blockchain Architecture")
    rb.draw_skill("Methodologies", "Agile, CI/CD, Microservices, OOP, REST APIs, TDD")
    
    rb.draw_section("Work Experience")
    rb.draw_job(
        "Full Stack Software Engineer Intern",
        "SAA Technologies",
        "Oct 2026 – Present",
        [
            "Building Spreezy, an e-commerce app, as a full stack engineer: developing React front-end features, backend APIs, and database logic, including product browsing, search, cart, and user accounts, with clean, tested code."
        ]
    )
    rb.draw_job(
        "AI Engineer Intern – Full Stack",
        "PM Accelerator, Cohort 10 [Certificate]",
        "Aug 2026 – Oct 2026",
        [
            "Built the Spreezy.ai React/TypeScript front end (search, cuisine filtering, item editing) and AI recipe-chat workflows that turn natural-language goals into shopping lists with purchase-history restock suggestions; contributed to 20+ FastAPI endpoints and 19 Supabase/PostgreSQL migrations, backed by 550+ tests at a 98% pass rate."
        ]
    )
    rb.draw_job(
        "Stellar Blockchain Developer – Belt Progression Program",
        "Rise In — Stellar Development Foundation [Certificate]",
        "April 2026 – May 2026",
        [
            "Cleared five belt levels, building 5+ Stellar dApps and Soroban smart contracts on testnet/mainnet."
        ]
    )
    
    rb.draw_section("Projects")
    rb.draw_project(
        "Autonomous Research and Report Agent",
        "LangGraph, Groq API, Tavily API, Streamlit",
        [
            "Designed a multi-agent LangGraph pipeline (Research → Fact-check → Write → Critique) with an iterative self-revision loop orchestrating Groq-hosted LLMs and Tavily web search, exposed via a FastAPI/Uvicorn REST interface and Streamlit UI, containerized with Docker and deployed across Render and Hugging Face Spaces."
        ]
    )
    rb.draw_project(
        "TriageIQ – AI SOC Alert Triage Copilot",
        "LangGraph, LangChain, VirusTotal, AbuseIPDB",
        [
            "Built a 5-node LangGraph multi-agent pipeline (Ingestion → Enrichment → Correlation → Triage → Reporting) using VirusTotal and AbuseIPDB to link multi-stage attacks and generate MITRE ATT&CK incident reports; auto-dismissed 66% of false positives and cut batch triage from 25 min to 3.8 s in testing."
        ]
    )
    
    rb.draw_section("Certifications")
    rb.draw_two_col([
        "NPTEL – Python for Data Science",
        "AlgoUniversity – Graph Theory",
        "NPTEL – Technical Communication for Engineers",
        "Blockchain Technology Virtual Internship",
        "GenAI Virtual Internship",
        "PM Accelerator – Certified AI Engineer"
    ])
    
    rb.draw_section("Education")
    rb.draw_education(
        "University of Engineering & Management (UEM), Jaipur",
        "Aug 2023 – May 2027",
        "B.Tech, Computer Science & Engineering",
        "9.19 / 10.0",
        "Machine Learning, Data Structures & Algorithms, Generative AI, DBMS, Operating Systems, CN"
    )
    
    rb.draw_section("Extracurricular Activities")
    rb.draw_bullet("Technical Head – Codesta Coding Club, UEMJ: Directed 15+ AI/ML workshops, upskilled 1,500+ students.")
    rb.draw_bullet("Winner – Esya’23 (NexTech’23), IIIT Delhi [Certificate]  |  Winner – Iomatic (Technex’25), IIT BHU [Certificate]")
    rb.draw_bullet("Runner-up – Makers Carnival Hackathon: Ranked Top 2 among 300+ participants.")
    rb.draw_bullet("First-Author – IEEE Xplore: Intelligent Accident Detection using FPGA.")
    
    rb.save(out_path)


def build_fullstack_resume(out_path):
    rb = ResumeBuilder()
    rb.draw_header(
        "Abhishek Gupta",
        "+91-7643020833",
        "abhishekgupta0834@gmail.com",
        "linkedin.com/in/abhishek-gupta-102079287",
        "github.com/Abhi0833-eng"
    )
    
    rb.draw_section("Summary")
    rb.draw_summary(
        "Final-year B.Tech CSE student (CGPA 9.19) and full stack developer building web apps with React, TypeScript, FastAPI, Node.js, and PostgreSQL. Currently interning at SAA Technologies; previously shipped features backed by 550+ tests at PM Accelerator. Experienced with REST APIs, Docker, AWS, and LLM features (RAG, tool-calling). First-author IEEE publication."
    )
    
    rb.draw_section("Technical Skills")
    rb.draw_skill("Languages", "JavaScript, TypeScript, Python, SQL, C++, HTML/CSS")
    rb.draw_skill("Frontend", "React, Next.js, Tailwind CSS, Bootstrap, Responsive Design, Vitest, Jest/React Testing Library")
    rb.draw_skill("Backend", "Node.js, Express, FastAPI, Django, Flask, REST APIs, JWT Authentication, Prisma")
    rb.draw_skill("Databases", "PostgreSQL, Supabase, MongoDB, MySQL")
    rb.draw_skill("Cloud & DevOps", "AWS (EC2, S3), Docker, Git, CI/CD, GitHub Actions, Vercel, Render")
    rb.draw_skill("Methodologies & Applied AI", "Agile, OOP, LangChain, LangGraph, RAG, LLM Tool-Calling, Scikit-learn")
    
    rb.draw_section("Work Experience")
    rb.draw_job(
        "Full Stack Software Engineer Intern",
        "SAA Technologies",
        "Oct 2026 – Present",
        [
            "Building Spreezy, a grocery-list PWA, as a full stack engineer with React, TypeScript, FastAPI, and Supabase: shipped the Dashboard, Weekly Essentials and Restock suggestions, and trip play mode, with Vitest tests."
        ]
    )
    rb.draw_job(
        "AI Engineer Intern – Full Stack",
        "PM Accelerator, Cohort 10 [Certificate]",
        "Aug 2026 – Oct 2026",
        [
            "Built the Spreezy.ai React/TypeScript front end (search, cuisine filtering, item editing) and contributed to 20+ FastAPI endpoints and 19 Supabase/PostgreSQL migrations, plus AI recipe-chat and purchase-history restock features, backed by 550+ tests at a 98% pass rate."
        ]
    )
    rb.draw_job(
        "Stellar Blockchain Developer – Belt Progression Program",
        "Rise In — Stellar Development Foundation [Certificate]",
        "April 2026 – May 2026",
        [
            "Cleared five belt levels, building 5+ Stellar dApps and Soroban smart contracts on testnet/mainnet."
        ]
    )
    
    rb.draw_section("Projects")
    rb.draw_project(
        "Smart Panchayat",
        "Django, React, MongoDB, Docker, AWS EC2/S3, Render, Vercel",
        [
            "Built a Django-React civic platform digitizing 10+ rural administrative services with REST APIs and MongoDB models; containerized with Docker and deployed across AWS EC2/S3, Render, and Vercel."
        ]
    )
    rb.draw_project(
        "Dhaka Tesla Pool",
        "Next.js, Express, TypeScript, Prisma, PostgreSQL, Docker",
        [
            "Built a 3-seat EV ride-pooling app with JWT auth, a validated ride-state machine, and atomic seat-booking transactions that prevent overbooking; Dockerized and deployed on Vercel."
        ]
    )
    rb.draw_project(
        "Nuzio AI",
        "React, Tailwind CSS, Node.js, Express, JWT",
        [
            "Built a personalized audio-news platform with a REST API for JWT auth, topic-based feeds, likes, bookmarks, and an Ask-AI endpoint, plus in-browser text-to-speech with a live transcript."
        ]
    )
    
    rb.draw_section("Certifications")
    rb.draw_two_col([
        "NPTEL – Python for Data Science",
        "AlgoUniversity – Graph Theory",
        "NPTEL – Technical Communication for Engineers",
        "Blockchain Technology Virtual Internship",
        "GenAI Virtual Internship",
        "PM Accelerator – Certified AI Engineer"
    ])
    
    rb.draw_section("Education")
    rb.draw_education(
        "University of Engineering & Management (UEM), Jaipur",
        "Aug 2023 – May 2027",
        "B.Tech, Computer Science & Engineering",
        "9.19 / 10.0",
        "Machine Learning, Data Structures & Algorithms, Generative AI, DBMS, Operating Systems, CN"
    )
    
    rb.draw_section("Extracurricular Activities")
    rb.draw_bullet("Technical Head – Codesta Coding Club, UEMJ: Directed 15+ AI/ML workshops, upskilled 1,500+ students.")
    rb.draw_bullet("Winner – Esya’23 (NexTech’23), IIIT Delhi [Certificate]  |  Winner – Iomatic (Technex’25), IIT BHU [Certificate]")
    rb.draw_bullet("Runner-up – Makers Carnival Hackathon: Ranked Top 2 among 300+ participants.")
    rb.draw_bullet("First-Author – IEEE Xplore: Intelligent Accident Detection using FPGA.")
    
    rb.save(out_path)


def build_aiml_resume(out_path):
    rb = ResumeBuilder()
    rb.draw_header(
        "Abhishek Gupta",
        "+91-7643020833",
        "abhishekgupta0834@gmail.com",
        "linkedin.com/in/abhishek-gupta-102079287",
        "github.com/Abhi0833-eng"
    )
    
    rb.draw_section("Summary")
    rb.draw_summary(
        "Final-year B.Tech CSE student with hands-on ML and GenAI experience: classification, NLP, model explainability, and deploying models as REST APIs, plus LLM agents built with LangGraph. 3 internships (SAA Technologies, PM Accelerator, Stellar), IEEE-published researcher."
    )
    
    rb.draw_section("Technical Skills")
    rb.draw_skill("Languages", "Python, C++, SQL, JavaScript, TypeScript, HTML/CSS")
    rb.draw_skill("AI/ML & Data", "Scikit-learn, XGBoost, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, NLP (TF-IDF), SHAP, SMOTE, Feature Engineering, Model Evaluation, Streamlit")
    rb.draw_skill("GenAI & LLM", "LangGraph Multi-Agent Orchestration, LangChain, RAG, LLM Tool-Calling, Prompt Chaining, Groq API, Tavily API")
    rb.draw_skill("Web & Cloud", "FastAPI, Flask, React, Node.js, Supabase, PostgreSQL, MongoDB, REST APIs, AWS, Docker, Git")
    rb.draw_skill("Blockchain & Methodologies", "Stellar, Soroban SDK, Smart Contracts, Agile, CI/CD, Microservices, OOP, TDD")
    
    rb.draw_section("Work Experience")
    rb.draw_job(
        "Full Stack Software Engineer Intern",
        "SAA Technologies",
        "Oct 2026 – Present",
        [
            "Building Spreezy, an e-commerce app, as a full stack engineer with React, TypeScript, FastAPI, and Supabase: developing front-end features, REST APIs, and database migrations with automated tests."
        ]
    )
    rb.draw_job(
        "AI Engineer Intern – Full Stack",
        "PM Accelerator, Cohort 10 [Certificate]",
        "Aug 2026 – Oct 2026",
        [
            "Built AI recipe-chat workflows that turn natural-language goals into shopping lists, plus purchase-history logic that prefills item details and suggests restocks; contributed to 20+ FastAPI endpoints, 19 Supabase/PostgreSQL migrations, and React/TypeScript search and editing features, backed by 550+ tests at a 98% pass rate."
        ]
    )
    rb.draw_job(
        "Stellar Blockchain Developer – Belt Progression Program",
        "Rise In — Stellar Development Foundation [Certificate]",
        "April 2026 – May 2026",
        [
            "Cleared five belt levels, building 5+ Stellar dApps and Soroban smart contracts on testnet/mainnet."
        ]
    )
    
    rb.draw_section("Projects")
    rb.draw_project(
        "Autonomous Research and Report Agent",
        "LangGraph, Groq/Tavily API, FastAPI, Streamlit",
        [
            "Built a multi-agent LangGraph pipeline (Research → Fact-check → Write → Critique) with a self-revision loop over Groq LLMs and Tavily search; served via FastAPI, Dockerized, deployed on Render and Hugging Face."
        ]
    )
    rb.draw_project(
        "AI Resume Analyzer",
        "Python, NLP, TF-IDF, Flask, GitHub Actions",
        [
            "Built an NLP resume scorer that uses TF-IDF vectorization to match resumes against job descriptions and return an ATS-style score; served through a Flask REST API with GitHub Actions CI/CD."
        ]
    )
    rb.draw_project(
        "Loan Default Prediction",
        "XGBoost, SMOTE, SHAP, Flask, Scikit-learn",
        [
            "Built an XGBoost loan-default classifier (94% accuracy), handling class imbalance with SMOTE and explaining each prediction with SHAP; deployed as a Flask REST API with a Streamlit demo."
        ]
    )
    
    rb.draw_section("Certifications")
    rb.draw_two_col([
        "NPTEL – Python for Data Science",
        "AlgoUniversity – Graph Theory",
        "NPTEL – Technical Communication for Engineers",
        "Blockchain Technology Virtual Internship",
        "GenAI Virtual Internship",
        "PM Accelerator – Certified AI Engineer"
    ])
    
    rb.draw_section("Education")
    rb.draw_education(
        "University of Engineering & Management (UEM), Jaipur",
        "Aug 2023 – May 2027",
        "B.Tech, Computer Science & Engineering",
        "9.19 / 10.0",
        "Machine Learning, Data Structures & Algorithms, Generative AI, DBMS, Operating Systems, CN"
    )
    
    rb.draw_section("Extracurricular Activities")
    rb.draw_bullet("Technical Head – Codesta Coding Club, UEMJ: Directed 15+ AI/ML workshops, upskilled 1,500+ students.")
    rb.draw_bullet("Winner – Esya’23 (NexTech’23), IIIT Delhi [Certificate]  |  Winner – Iomatic (Technex’25), IIT BHU [Certificate]")
    rb.draw_bullet("Runner-up – Makers Carnival Hackathon: Ranked Top 2 among 300+ participants.")
    rb.draw_bullet("First-Author – IEEE Xplore: Intelligent Accident Detection using FPGA.")
    
    rb.save(out_path)


if __name__ == "__main__":
    pub_dir = r"C:\Users\abhis\.gemini\antigravity\scratch\portfolio\public"
    
    f_agentic = os.path.join(pub_dir, "Abhishek_Gupta_Agentic_GenAI_Resume.pdf")
    f_fullstack = os.path.join(pub_dir, "Abhishek_Gupta_FullStack_Resume.pdf")
    f_aiml = os.path.join(pub_dir, "Abhishek_Gupta_AIML_Resume.pdf")
    f_default = os.path.join(pub_dir, "Abhishek_Gupta_Resume.pdf")
    
    build_agentic_resume(f_agentic)
    build_fullstack_resume(f_fullstack)
    build_aiml_resume(f_aiml)
    
    # Also generate the default resume
    build_agentic_resume(f_default)
    print("All resumes generated successfully!")
