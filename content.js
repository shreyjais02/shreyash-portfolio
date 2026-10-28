/* =====================================================================
   EDIT THIS FILE TO UPDATE YOUR WEBSITE.
   Everything shown on the site comes from here. No other file needs to
   change for normal updates (new job, project, certificate, etc.).

   Tips:
   - Keep the quotes "" and commas , exactly as they are.
   - To remove an item, delete its whole { ... } block.
   - To add one, copy a block and paste it where you want it to appear.
   - Leave a link as "" to hide that button.
   ===================================================================== */

window.SITE = {
  // ---------- Basic info ----------
  name: "Shreyash Jaiswal",
  tagline: "Data Science · Machine Learning · Web Development",
  headline: "I build ML, NLP and LLM-based solutions, and enterprise automations.",
  location: "India",
  resume: "Shreyash Jaiswal Resume.pdf", // file in the same folder as index.html

  // ---------- About ----------
  about: [
    "Data Science, ML and Web Development enthusiast with hands-on experience in predictive modelling, NLP, and LLM-based projects. I'm passionate about using AI to solve real-world problems in finance, healthcare, and other domains.",
    "Currently, I work as an Application Developer at IBM India, building reports, integrations and approval workflows on Oracle Fusion for a large mining client."
  ],

  // Small quick-facts shown next to the About text
  facts: [
    { label: "Education", value: "Integrated MTech, VIT Bhopal" },
    { label: "CGPA", value: "8.48" },
    { label: "Currently", value: "IBM India" },
    { label: "Location", value: "India" }
  ],

  // ---------- Contact / social ----------
  contact: {
    email: "shreyashjais2002@gmail.com",
    phone: "+91 9325690984",
    linkedin: "https://linkedin.com/in/shreyashjais02",
    github: "https://github.com/shreyjais02",
    other: [] // e.g. { label: "Kaggle", url: "https://..." }
  },

  // ---------- Experience (newest first) ----------
  experience: [
    {
      role: "Application Developer – Oracle Technical Fusion",
      company: "IBM India (Client: Maaden Saudi Arabian Mining Company)",
      place: "Bengaluru, KA",
      period: "Apr 2026 – Present",
      points: [
        "Developed 10+ custom Oracle Fusion HCM reports using SQL, PL/SQL and BI Publisher (employee attrition, contractual, air ticket eligibility, leave balance) to support client reporting and audit requirements.",
        "Built automated integrations and scheduled workflows using Oracle Fusion integrations and REST APIs, including automated report delivery to the CEO and probation notification workflows.",
        "Built an end-to-end employee probation management pipeline integrating Oracle Process Automation (OPA), Visual Builder Cloud Service (VBCS) and Oracle Fusion, with a two-level approval process.",
        "Resolved defects in existing reports and corrected offer letter generation automation, improving reliability and saving 20+ hours of manual effort.",
        "Executed HCM Data Loads converting 5000+ records for employee goals, employee management and job role updates."
      ]
    },
    {
      role: "Software Development Faculty Trainee",
      company: "NxtWave Disruptive Technologies",
      place: "Hyderabad, TS",
      period: "Oct 2025 – Mar 2026",
      points: [
        "Completed a structured faculty training program in full-stack web development and generative AI (HTML, CSS, Bootstrap, Python, GenAI fundamentals).",
        "Delivered online and offline demo lectures on programming concepts and teaching methodologies, and took part in fortnightly workshops to sharpen instructional and technical communication skills."
      ]
    },
    {
      role: "Data Science Intern",
      company: "State Bank of India",
      place: "Navi Mumbai, MH",
      period: "Apr 2024 – Jul 2024",
      points: [
        "Analyzed 100,000+ education loan entries to build predictive models with 90% precision, improving the reliability of default predictions by 25%.",
        "Used Logistic Regression and Random Forest to raise prediction accuracy by over 30% versus baseline methods.",
        "Applied PCA preprocessing, streamlining the dataset and cutting processing time by 40%.",
        "Designed ML algorithms reaching 85%+ accuracy for loan default prediction, supporting decision making and risk management."
      ]
    }
  ],

  // ---------- Projects ----------
  projects: [
    {
      title: "Indian Legal Document Summarization",
      period: "Jan 2025 – Apr 2025",
      type: "Individual Project",
      description: "Fine-tuned a 406M-parameter BART-large transformer on 11,278 Indian legal documents to make verbose legal text easier to read.",
      points: [
        "67.4% average compression ratio with 86.2% ROUGE-L F1-score.",
        "Tokenized 90,224+ document-summary pairs with Hugging Face datasets & transformers, with <2% data loss.",
        "Trained on a Colab T4 GPU with FP16 mixed precision: 3.1× faster convergence and a 41.3% smaller model."
      ],
      tags: ["NLP", "BART", "Hugging Face", "PyTorch", "LLMs"],
      link: "", // paste project URL here (e.g. GitHub repo)
      linkLabel: "View project"
    },
    {
      title: "Chronic Kidney Disease Prediction",
      period: "Jan 2023 – Mar 2023",
      type: "Team Project",
      description: "End-to-end ML pipeline predicting chronic kidney disease from 25 medical attributes with 96%+ accuracy.",
      points: [
        "Data cleaning, outlier treatment, imputation and skewness correction.",
        "Benchmarked 12+ models (SVM, XGBoost, CatBoost, Random Forest, Stacking); +14% F1 after GridSearchCV tuning.",
        "SMOTE for class imbalance gave +22% minority-class recall; validated with 5-fold CV (AUC > 0.98)."
      ],
      tags: ["Machine Learning", "XGBoost", "scikit-learn", "Healthcare"],
      link: "", // paste project URL here
      linkLabel: "View project"
    }
  ],

  // ---------- Skills (grouped) ----------
  skills: [
    { group: "Data & AI", items: ["Python", "Machine Learning", "Deep Learning", "Generative AI", "NLP & LLMs", "Statistical & Data Analysis"] },
    { group: "Data Visualization", items: ["Tableau", "Power BI", "Excel"] },
    { group: "Web", items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "REST API"] },
    { group: "Oracle", items: ["Oracle Fusion HCM", "Oracle Integrations", "Oracle VBCS", "Oracle Process Automation", "SQL", "PL/SQL", "BI Publisher"] },
    { group: "Tools & Cloud", items: ["Git", "AWS Cloud Services"] }
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "Integrated MTech in CSE (Computational and Data Science)",
      school: "VIT Bhopal University",
      place: "Bhopal, MP",
      period: "Oct 2020 – Oct 2025",
      note: "CGPA: 8.48"
    }
  ],

  // ---------- Certifications ----------
  certifications: [
    { name: "Generative AI with Large Language Models", issuer: "Coursera", date: "Jan 2025" },
    { name: "Applied Machine Learning in Python", issuer: "Coursera", date: "Mar 2024" },
    { name: "AWS Cloud Foundations", issuer: "AWS Academy", date: "May 2022" }
  ]
};
