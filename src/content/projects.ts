export type ImageFrame = "browser" | "phone";

export type ArchitectureLayer = {
  name: string;
  items: string[];
};

export type ProjectImage = {
  alt: string;
  caption?: string;
  src: string;
  frame: ImageFrame;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  role: string;
  period: string;
  liveUrl?: string;
  liveLabel?: string;
  featured: boolean;
  homepage: "toddly" | "billing-agent" | null;
  summary: string;
  description: string;
  outcomes: string[];
  architecture: {
    caption: string;
    layers: ArchitectureLayer[];
  };
  stack: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "toddly",
    title: "Toddly",
    eyebrow: "Featured work",
    tagline: "Childcare SaaS for parents and schools",
    role: "Founder & Senior Software Engineer",
    period: "2023 – Present",
    liveUrl: "https://www.toddly.app",
    liveLabel: "toddly.app",
    featured: true,
    homepage: "toddly",
    summary:
      "Multi-tenant platform used by 400+ schools — enrollment, waitlists, Stripe Connect payments, and parent communications in one product.",
    description:
      "Toddly connects parents with local childcare centers and gives schools a single system for enrollment, waitlists, billing, and family communications. I designed the application architecture and relational data model, then built the Python backend, REST APIs, and AWS infrastructure that power the web and mobile apps. Parents search a live map, compare programs, and enroll online. Schools replace spreadsheets and manual follow-up with automated workflows. Payments run through Stripe Connect so marketplace-style payouts stay with each school.",
    outcomes: [
      "Launched a production multi-tenant SaaS now used by 400+ schools",
      "Replaced spreadsheet-driven enrollment, waitlists, and billing with automated workflows",
      "Shipped Stripe Connect marketplace payments plus parent communications",
      "Owned architecture, data modeling, APIs, AWS operations, and ongoing product development",
    ],
    architecture: {
      caption:
        "Parents and schools use React and React Native (Expo) clients. Flask APIs persist to MySQL, cache in Redis, store files in S3, and settle payments through Stripe. AWS runs the fleet.",
      layers: [
        {
          name: "Frontend",
          items: ["React", "React Native", "Expo"],
        },
        {
          name: "API",
          items: ["Flask", "REST", "SQLAlchemy"],
        },
        {
          name: "Data",
          items: ["MySQL / RDS", "Redis", "S3", "Stripe Connect"],
        },
        {
          name: "AWS",
          items: ["Elastic Beanstalk", "EC2", "Lambda", "CloudWatch"],
        },
      ],
    },
    stack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL",
      "Redis",
      "React",
      "React Native",
      "Expo",
      "Stripe Connect",
      "AWS",
    ],
    images: [
      {
        src: "/images/toddly/search-map.webp",
        frame: "browser",
        alt: "Toddly parent search with a map and school cards",
        caption: "Parent search — map, filters, and school profiles",
      },
      {
        src: "/images/toddly/school-dashboard.png",
        frame: "browser",
        alt: "Toddly school dashboard for enrollment, operations, and finance",
        caption: "School dashboard — leads, operations, and finance",
      },
      {
        src: "/images/toddly/tours.png",
        frame: "browser",
        alt: "Toddly tour availability calendar",
        caption: "Inquiries and tours — weekly availability",
      },
      {
        src: "/images/toddly/updates-mobile-app.png",
        frame: "phone",
        alt: "Toddly parent app updates feed",
        caption: "Updates — classroom activity and check-in",
      },
      {
        src: "/images/toddly/chat-mobile-app.png",
        frame: "phone",
        alt: "Toddly parent app messages",
        caption: "Messages — families and staff",
      },
      {
        src: "/images/toddly/billing-mobile-app.png",
        frame: "phone",
        alt: "Toddly parent app billing screen",
        caption: "Billing — invoices, receipts, and payment methods",
      },
    ],
  },
  {
    slug: "billing-agent",
    title: "Billing Agent",
    eyebrow: "AI / LLM",
    tagline: "Natural-language billing analysis",
    role: "Founder & Senior Software Engineer",
    period: "2024 – Present",
    featured: true,
    homepage: "billing-agent",
    summary:
      "LLM agent with a natural-language interface and application tools that retrieve and analyze customer billing data on the Toddly stack.",
    description:
      "I built an LLM-powered billing agent so school staff can ask questions about invoices, balances, and payment history in plain language. The agent uses application tools to retrieve live billing data, then summarizes aging, outstanding balances, and recent activity. It sits on top of the existing ledger rather than replacing it — retrieve, analyze, and explain, with the database remaining the source of truth.",
    outcomes: [
      "Natural-language interface over production billing data",
      "Tool-using agent that retrieves invoices, balances, and payment history",
      "Designed to analyze and explain without writing a second source of truth",
      "Built against the same multi-tenant billing model used by Toddly schools",
    ],
    architecture: {
      caption:
        "A chat UI sends a question to an agent loop. The model calls application tools that query billing tables, then returns a grounded answer with the retrieved context.",
      layers: [
        {
          name: "Interface",
          items: ["Natural-language chat", "Staff workspace"],
        },
        {
          name: "Agent",
          items: ["LLM", "Tool calling", "Retrieval"],
        },
        {
          name: "Tools",
          items: ["Invoices", "Balances", "Payment history"],
        },
        {
          name: "Source of truth",
          items: ["MySQL billing data", "Stripe events"],
        },
      ],
    },
    stack: ["Python", "LLMs", "Tool calling", "Flask", "MySQL", "Stripe"],
    images: [
      {
        src: "/images/billing-agent/billing-agent.png",
        frame: "browser",
        alt: "Toddly Billing Assistant answering a revenue question beside the billing dashboard",
        caption: "Billing Assistant — monthly revenue, then why January was higher",
      },
    ],
  },
  {
    slug: "storybook-studio",
    title: "Storybook Studio",
    eyebrow: "Client product",
    tagline: "Enrollment for a children's art studio",
    role: "Founder & Senior Software Engineer",
    period: "2025 – 2026",
    liveUrl: "https://www.storybookstudiosa.com",
    liveLabel: "storybookstudiosa.com",
    featured: true,
    homepage: null,
    summary:
      "Custom class browsing, accounts, and checkout for a San Antonio children's art studio — warm brand, straightforward enrollment.",
    description:
      "Storybook Studio needed a site that felt like the studio: literature-inspired, warm, and easy for parents to use. I built a custom enrollment experience so families can browse classes and camps, create accounts, and reserve spots with secure checkout. Semester schedules, monthly tuition, and deposits for birthday celebrations sit on a single flow instead of email threads and spreadsheets.",
    outcomes: [
      "Shipped a branded enrollment site for classes, camps, and celebrations",
      "Account creation and child profiles so parents can reserve spots themselves",
      "Secure checkout for experience fees, tuition, and deposits",
      "Replaced manual intake with a parent-facing catalog and payment flow",
    ],
    architecture: {
      caption:
        "A marketing and catalog frontend talks to enrollment APIs. Accounts, child profiles, and class inventory live in a relational database; payments go through Stripe.",
      layers: [
        {
          name: "Frontend",
          items: ["Catalog", "Accounts", "Checkout"],
        },
        {
          name: "Backend",
          items: ["Enrollment APIs", "Schedules", "Profiles"],
        },
        {
          name: "Data & payments",
          items: ["Relational DB", "Stripe"],
        },
      ],
    },
    stack: ["TypeScript", "SvelteKit", "Stripe", "AWS"],
    images: [
      {
        src: "/images/storybook/classes.png",
        frame: "browser",
        alt: "Storybook Studio class catalog",
        caption: "Class catalog — ages, schedules, and reserve flows",
      },
      {
        src: "/images/storybook/celebrations.png",
        frame: "browser",
        alt: "Storybook Studio celebrations page",
        caption: "Celebrations — birthday booking and how it works",
      },
    ],
  },
  {
    slug: "bidding-system",
    title: "Engineering Bidding System",
    eyebrow: "Client product",
    tagline: "Live bids for a local engineering firm",
    role: "Founder & Senior Software Engineer",
    period: "2023 – 2024",
    featured: false,
    homepage: null,
    summary:
      "Authenticated live bidding with cloud document storage and encrypted business information.",
    description:
      "A local engineering firm needed a live bidding system that could replace email attachments and shared folders. I built authenticated workflows for submitting and reviewing bids, cloud storage for application documents, and encryption for sensitive business information in the database.",
    outcomes: [
      "Live bidding workflow for a local firm",
      "User authentication around bid submission and review",
      "Cloud storage for application documents",
      "Encrypted storage for sensitive business information",
    ],
    architecture: {
      caption:
        "Authenticated users submit and review bids through a web app. Documents go to object storage; sensitive records are encrypted in the database.",
      layers: [
        {
          name: "App",
          items: ["Web UI", "Auth", "Live bidding"],
        },
        {
          name: "Storage",
          items: ["Cloud documents", "Encrypted records"],
        },
      ],
    },
    stack: ["Python", "Flask", "AWS S3", "Authentication"],
    images: [
      {
        src: "/images/case-studies/se-home.webp",
        frame: "browser",
        alt: "SE Legacy Connect bidding and procurement portal home",
        caption: "Portal home — register, then browse opportunities",
      },
      {
        src: "/images/case-studies/se-opportunities.png",
        frame: "browser",
        alt: "Closed opportunities table in the bidding portal",
        caption: "Closed opportunities — bid history for authenticated vendors",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getHomepageProject(key: "toddly" | "billing-agent") {
  const project = projects.find((item) => item.homepage === key);
  if (!project) {
    throw new Error(`Missing homepage project: ${key}`);
  }
  return project;
}

export function browserImages(project: Project) {
  return project.images.filter((image) => image.frame === "browser");
}

export function phoneImages(project: Project) {
  return project.images.filter((image) => image.frame === "phone");
}
