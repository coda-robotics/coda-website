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
    title: "Department Lead - World Models",
    slug: "department-lead-world-models",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is developing infrastructure to power the next generation of robotic foundation models. Data is crucial to improving these models, yet robotic data is scarce and expensive to collect. World models pose a promosing avenue to generate 'dreams' of robot trajectories which can be collected for training. You will become a part of Coda's founding team and lead the development and deployment of Coda Robotics' world models.",
    responsibilities: [
      "Lead a team of researchers and engineers.",
      "Develop more efficient ways to generate high quality dreams of robot trajectories.",
      "Define and own the technical roadmap for your assigned subsystem.",
      "Drive rapid iteration, testing, and integration cycles to validate performance and de-risk development.",
      "Own all key decisions, from architecture to tradeoffs in performance, cost, weight, and reliability.",
      "Collaborate closely with other department leads.",
      "Champion a high-accountability, high-velocity culture that values results, responsibility, and bold technical ambition."
    ],
    requirements: [
      "Strong experience in world models / video generation models ",
      "Strong experience in post-training video generation models",
    ],
    compensation: "Base salary range: $100,000 - $120,000 per year, plus strong equity and benefits"
  },
  {
    id: 2,
    title: "Department Lead - Embodied Reasoning",
    slug: "department-lead-embodied-reasoning",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is developing infrastructure to power the next generation of robotic foundation models. Once we have overcome the scarcity of robotic data, we will need systems to improve the quality of the data we collect. Adding embodied reasoning to the training datasets allows the robotic foundation model to iteratively reason over complex tasks before predicting the action. With reasoning, the policy is 27% more accurate. You will become a part of Coda's founding team and lead the development and deployment of Coda Robotics' embodied reasoning data engine.",
    responsibilities: [
      "Lead a team of researchers and engineers.",
      "Add Human-in-the-loop feedback to improve reasoning annotations in the training datasets.",
      "Explore test-time compute.",
      "Explore reasoning dropout during inference and other ways to lower inference latency.",
      "Develop efficient training strategies.",
      "Define and own the technical roadmap for your assigned subsystem.",
      "Drive rapid iteration, testing, and integration cycles to validate performance and de-risk development.",
      "Own all key decisions, from architecture to tradeoffs in performance, cost, weight, and reliability.",
      "Collaborate closely with other department leads.",
      "Champion a high-accountability, high-velocity culture that values results, responsibility, and bold technical ambition."
    ],
    requirements: [
      "Reasoning related research / experience",
      "Experience developing vision models: DINO-Grounding, SAM 3, OWLv2, ...",
      "Experience developing reasoning techniques: CoT, in-context learning, ..."
    ],
    compensation: "Base salary range: $100,000 - $120,000 per year, plus strong equity and benefits"
  },
  {
    id: 3,
    title: "Department Lead - Data Weighting",
    slug: "department-lead-data-weighting",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is developing infrastructure to power the next generation of robotic foundation models. Once we have overcome the scarcity of robotic data, we will need systems to weight the generated data and filter out the unwanted data. These types of systems will lead to more efficient trainning - lower compute and storage costs. You will become a part of Coda's founding team and lead the development and deployment of Coda Robotics' data weighting engine.",
    responsibilities: [
      "Lead a team of researchers and engineers.",
      "Design, build, and deploy more efficient data weighting systems at scale.",
      "Define and own the technical roadmap for your assigned subsystem.",
      "Drive rapid iteration, testing, and integration cycles to validate performance and de-risk development.",
      "Own all key decisions, from architecture to tradeoffs in performance, cost, weight, and reliability.",
      "Collaborate closely with other department leads.",
      "Champion a high-accountability, high-velocity culture that values results, responsibility, and bold technical ambition."
    ],
    requirements: [
      "Experience in data weighting and filtering",
      "Experience with world models / video generation models"
    ],
    compensation: "Base salary range: $100,000 - $120,000 per year, plus strong equity and benefits"
  },
  {
    id: 4,
    title: "Chief Media Officer",
    slug: "chief-media-officer",
    department: "Media",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is developing infrastructure to power the next generation of robotic foundation models. You will become a part of Coda's founding team and lead Coda Robotics' media strategies.",
    responsibilities: [
      "Strategize and setup intense and focused media campaign.",
      "Develop high quality video production.",
      "Develop PR strategies.",
      "Own all key decisions.",
      "Collaborate closely with other department leads.",
      "Champion a high-accountability, high-velocity culture that values results and responsibility."
    ],
    requirements: [
      "Experience in PR",
      "Experience in video production",
      "Large social media presence"
    ],
    compensation: "Base salary range: $80,000 - $90,000 per year, plus equity and benefits"
  },
  {
    id: 5,
    title: "Chief Product Officer",
    slug: "chief-product-officer",
    department: "Product",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is developing infrastructure to power the next generation of robotic foundation models. Delivering the highest quality products is crucial to achieve strong adoption. You will become a part of Coda's founding team and lead Coda Robotics' product development.",
    responsibilities: [
      "Lead the product design.",
      "Align products with market needs.",
      "Own all key decisions.",
      "Collaborate closely with other department leads.",
      "Champion a high-accountability, high-velocity culture that values results and responsibility."
    ],
    requirements: [
      "Strong design skills",
      "Experience leading product design in tech startups",
      "Strong strategic thinking"
    ],
    compensation: "Base salary range: $80,000 - $90,000 per year, plus equity and benefits"
  }
];