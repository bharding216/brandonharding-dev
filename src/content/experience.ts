export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Aver",
    role: "Senior Software Engineer",
    period: "2024 – Present",
    summary:
      "Design and develop production software across backend services, APIs, databases, and AWS. Build REST APIs for customer-facing applications and improve reliability through monitoring, performance work, and engineering best practices.",
  },
  {
    company: "Surmount / Toddly",
    role: "Founder & Senior Software Engineer",
    period: "2023 – Present",
    summary:
      "Built and launched a multi-tenant childcare SaaS and client software. Owned the full lifecycle — requirements, system design, implementation, AWS deployment, production monitoring, and ongoing product development.",
  },
  {
    company: "Versar / CarbonFree / Vintage Air",
    role: "Data Science & Machine Learning Engineering",
    period: "2018 – 2024",
    summary:
      "Developed Python data pipelines, AWS workflows, and machine learning / NLP systems supporting enterprise applications.",
  },
];
