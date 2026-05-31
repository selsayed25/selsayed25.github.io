export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  links: { label: string; url: string }[];
  year: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "The Techbook",
    description: "An open-source resource for learning computer science and mathematics.",
    longDescription:
      "An open-access programming and computing textbook designed for students new to CS, covering Python, Java, Linux, Git, and more. Written to make complex technical concepts accessible to everyone.",
    tags: ["Education", "CS", "Mathematics", "Open Source"],
    links: [
      { label: "GitHub", url: "https://github.com/techbook" },
      { label: "Website", url: "https://selsayed25.github.io/techbook" },
    ],
    year: 2022,
    featured: false,
  },
  {
    title: "Unraveling AI Paradoxes",
    description: "An open-source book exploring the philosophical and technical paradoxes of artificial intelligence.",
    longDescription:
      "A book about contradictions in modern artificial intelligence—ethics, safety, regulation, and machine deception. Explores the risks we're not ready for and the decisions we need to make now.",
    tags: ["Books", "Education", "AI", "Open Source"],
    links: [
      { label: "Website", url: "https://ai-paradoxes.onrender.com" },
    ],
    year: 2024,
    featured: false,
  },
  {
    title: "Optimizing AI Workloads within Heterogeneous Systems",
    description: "My TJHSST senior year research project at the computer systems lab.",
    longDescription:
      "A research project focused on optimizing AI workloads across heterogeneous computing systems. Involved analyzing performance bottlenecks, developing scheduling algorithms, and implementing optimizations to improve efficiency and reduce latency for AI applications.",
    tags: ["Python", "AI", "Research"],
    links: [
      { label: "Article", url: "#" },
      { label: "Paper", url: "#" },
    ],
    year: 2025,
    featured: true,
  },
  {
    title: "The Debate Engine",
    description: "Interactive website and mathematical framework for competitive debate visualization and analysis.",
    longDescription:
      "A Codects project that uses graph theory and interactive visualizations to simulate and analyze competitive debate rounds. It models arguments as nodes and their relationships as edges, allowing users to explore the structure of debates, identify key arguments, and understand strategic dynamics.",
    tags: ["Debate", "Mathematics"],
    links: [
      { label: "Website", url: "https://debate-engine.onrender.com" },
      { label: "Article", url: "https://tcedco.github.io/posts/policy-debate-logic-test/" },
    ],
    year: 2026,
    featured: true,
  },
  {
    title: "TJHSST Infrastructure Modernization",
    description: "A comprehensive overhaul of the computer systems lab's infrastructure at Thomas Jefferson High School for Science and Technology.",
    longDescription:
      "Led critical infrastructure upgrades for the computer systems lab at TJHSST, including server hardware refreshes, network architecture redesign, workstations modernization, and implementation of new software tools. Improved performance, reliability, and security for thousands of students and faculty.",
    tags: ["Systems Adminstration", "Linux", "Networking", "Hardware"],
    links: [
      { label: "tjCSL", url: "https://sysadmins.tjhsst.edu" },
    ],
    year: 2023,
    featured: true,
  },
];
