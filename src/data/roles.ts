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
    title: "Research Engineer - World Models",
    slug: "research-engineer-world-models",
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
    title: "GPU Kernel Engineer",
    slug: "gpu-kernel-engineer",
    department: "Engineering",
    location: "San Francisco",
    type: "Full time",
    description: "Coda Robotics is scaling the compute infrastructure that powers next‑generation robotic foundation models. As training and inference workloads grow, we need kernel‑level innovations to reduce latency, memory usage, and energy consumption. You will join Coda's founding team to architect and optimize low‑level compute kernels, drivers, and runtime components—making model training and inference significantly cheaper and faster.",
    responsibilities: [
      "Lead a team of kernel and system engineers focused on performance-critical code",
      "Design, implement, and optimize custom compute kernels for CPU (AVX/ARM NEON), GPU (CUDA/ROCm), and hardware accelerators",
      "Find bottlenecks in memory hierarchy, thread scheduling, and data movement",
      "Integrate kernel optimizations into distributed ML frameworks (e.g., PyTorch, TensorFlow) and orchestrate deployment in cloud and edge environments",
      "Explore OS and driver‑level enhancements—such as zero‑copy I/O, custom scheduling, and power management—to further boost throughput",
      "Define and own the technical roadmap for kernel and runtime subsystems, balancing performance, maintainability, and portability",
      "Drive rapid iteration, testing, and benchmarking cycles to validate improvements and de‑risk large‑scale rollouts",
      "Champion a high‑velocity culture that values bold technical ambition, clear accountability, and measurable impact"
    ],
    requirements: [
      "Proven experience in low‑level systems programming (C/C++, assembly) targeting CPU and GPU architectures",
      "Expertise in developing and optimizing compute kernels (CUDA, ROCm, OpenCL, SIMD intrinsics)",
      "Deep understanding of performance profiling tools (nvprof, perf, Intel VTune) and techniques for memory and compute optimization",
      "Strong familiarity with ML framework internals (PyTorch, TensorFlow) and integration of custom operations",
      "Experience with compiler design or code generation (LLVM, MLIR) is a plus"
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