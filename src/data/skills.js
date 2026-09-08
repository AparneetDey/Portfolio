/**
 * Skills & alchemical abilities data.
 * Easily add, remove, or modify skills without touching presentation components.
 */
export const skills = [
  // Frontend Spells
  {
    id: "react",
    name: "React & Ecosystem",
    category: "Frontend Spells",
    description: "Architecting component-driven interfaces, custom hooks, and reactive state systems.",
    icon: "atom",
    proficiencyTier: "Master",
  },
  {
    id: "javascript",
    name: "Modern JavaScript (ES6+)",
    category: "Frontend Spells",
    description: "Deep understanding of asynchronous programming, DOM APIs, and modern language patterns.",
    icon: "scroll",
    proficiencyTier: "Master",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS & Styling",
    category: "Frontend Spells",
    description: "Crafting responsive, bespoke design systems, theme tokens, and accessible interfaces.",
    icon: "palette",
    proficiencyTier: "Master",
  },
  {
    id: "html-css",
    name: "Semantic HTML & Modern CSS",
    category: "Frontend Spells",
    description: "Building responsive layouts, CSS Grid, Flexbox, and accessible web foundations.",
    icon: "shield",
    proficiencyTier: "Expert",
  },

  // Backend Crafting
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "Backend Crafting",
    description: "Forging RESTful APIs, middleware pipelines, and scalable server-side microservices.",
    icon: "server",
    proficiencyTier: "Expert",
  },
  {
    id: "databases",
    name: "PostgreSQL & SQLite",
    category: "Backend Crafting",
    description: "Schema modeling, relational indexing, transaction safety, and query optimization.",
    icon: "database",
    proficiencyTier: "Proficient",
  },
  {
    id: "rest-apis",
    name: "API Design & Integration",
    category: "Backend Crafting",
    description: "Designing clean API contracts, authentication flows (JWT/OAuth), and rate limiting.",
    icon: "key",
    proficiencyTier: "Expert",
  },

  // Tools & Alchemy
  {
    id: "git",
    name: "Git & Version Control",
    category: "Tools & Alchemy",
    description: "Branching strategies, collaborative workflows, and disciplined repository hygiene.",
    icon: "branch",
    proficiencyTier: "Master",
  },
  {
    id: "vite",
    name: "Vite & Build Tooling",
    category: "Tools & Alchemy",
    description: "Fast bundler configuration, HMR pipelines, and asset optimization.",
    icon: "sparkles",
    proficiencyTier: "Expert",
  },
  {
    id: "testing",
    name: "Testing & Quality Assurance",
    category: "Tools & Alchemy",
    description: "Unit testing, integration testing, and bug prevention through linting and test suites.",
    icon: "potion",
    proficiencyTier: "Proficient",
  },
];

export const skillCategories = [
  "All",
  "Frontend Spells",
  "Backend Crafting",
  "Tools & Alchemy",
];
