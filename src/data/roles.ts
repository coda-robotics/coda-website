export interface Role {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  compensation: string;
}

export const roles: Role[] = [
  {
    id: 1,
    title: "Department Lead - Robotic World Models",
    slug: "department-lead-robotic-world-models",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Lead the development of robotic world models to enhance autonomous systems at Coda Robotics.",
    responsibilities: [
      "Lead a team of researchers and engineers",
      "Develop novel algorithms for robotic perception",
      "Collaborate with cross-functional teams",
      "Publish research findings"
    ],
    requirements: [
      "PhD in Robotics or related field",
      "5+ years of experience in robotic systems",
      "Strong leadership skills"
    ],
    niceToHave: [
      "Experience with ROS",
      "Publications in top-tier conferences"
    ],
    compensation: "Base salary range: $180,000 - $250,000 per year, plus equity and benefits"
  },
  {
    id: 2,
    title: "Department Lead - Embodied Reasoning",
    slug: "department-lead-embodied-reasoning",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Oversee the embodied reasoning department to advance AI capabilities.",
    responsibilities: [
      "Manage research projects in embodied AI",
      "Develop reasoning models for autonomous systems",
      "Mentor junior researchers"
    ],
    requirements: [
      "PhD in AI or related field",
      "Experience in machine learning",
      "Strong publication record"
    ],
    compensation: "Base salary range: $180,000 - $250,000 per year, plus equity and benefits"
  },
  {
    id: 3,
    title: "Department Lead - Data Weighting",
    slug: "department-lead-data-weighting",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Lead efforts in optimizing data weighting strategies for machine learning models.",
    responsibilities: [
      "Design data weighting algorithms",
      "Collaborate with data scientists",
      "Ensure model performance and scalability"
    ],
    requirements: [
      "PhD in Data Science or related field",
      "Experience with ML optimization",
      "Strong analytical skills"
    ],
    compensation: "Base salary range: $180,000 - $250,000 per year, plus equity and benefits"
  },
  {
    id: 4,
    title: "Department Lead - Evaluations",
    slug: "department-lead-evaluations",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Oversee evaluation frameworks for robotic systems.",
    responsibilities: [
      "Develop evaluation metrics",
      "Conduct performance assessments",
      "Lead a team of evaluators"
    ],
    requirements: [
      "PhD in Engineering or related field",
      "Experience in system evaluation",
      "Leadership experience"
    ],
    compensation: "Base salary range: $180,000 - $250,000 per year, plus equity and benefits"
  },
  {
    id: 5,
    title: "Infrastructure Engineer",
    slug: "infrastructure-engineer",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Build and maintain the infrastructure supporting our robotic systems.",
    responsibilities: [
      "Design scalable infrastructure",
      "Optimize system performance",
      "Collaborate with engineering teams"
    ],
    requirements: [
      "BS/MS in Computer Science or related field",
      "Experience with cloud infrastructure",
      "Proficiency in Python and DevOps tools"
    ],
    compensation: "Base salary range: $140,000 - $200,000 per year, plus equity and benefits"
  },
  {
    id: 6,
    title: "Chief Media Officer",
    slug: "chief-media-officer",
    department: "Media",
    location: "San Francisco",
    type: "Full time",
    description: "Lead media strategy to promote Coda Robotics’ vision and achievements.",
    responsibilities: [
      "Develop media campaigns",
      "Manage public relations",
      "Oversee content creation"
    ],
    requirements: [
      "10+ years in media or PR",
      "Strong leadership skills",
      "Experience in tech industry"
    ],
    compensation: "Base salary range: $200,000 - $300,000 per year, plus equity and benefits"
  },
  {
    id: 7,
    title: "Chief Product Officer",
    slug: "chief-product-officer",
    department: "Product",
    location: "San Francisco",
    type: "Full time",
    description: "Drive the product vision and strategy for Coda Robotics.",
    responsibilities: [
      "Define product roadmap",
      "Lead product development teams",
      "Align products with market needs"
    ],
    requirements: [
      "10+ years in product management",
      "Experience in tech startups",
      "Strong strategic thinking"
    ],
    compensation: "Base salary range: $220,000 - $320,000 per year, plus equity and benefits"
  },
  {
    id: 8,
    title: "Research Lead - Online RL",
    slug: "research-lead-online-rl",
    department: "Research",
    location: "San Francisco",
    type: "Full time",
    description: "Lead research in online reinforcement learning for robotics.",
    responsibilities: [
      "Conduct RL research",
      "Develop innovative algorithms",
      "Publish findings"
    ],
    requirements: [
      "PhD in RL or related field",
      "Strong research background",
      "Experience with Python"
    ],
    niceToHave: [
      "Experience with online learning",
      "Publications in RL conferences"
    ],
    compensation: "Base salary range: $160,000 - $230,000 per year, plus equity and benefits"
  }
];