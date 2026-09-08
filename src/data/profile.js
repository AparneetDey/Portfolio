/**
 * Profile and developer journey information.
 * Centralized data source for hero, about, and contact sections.
 */
export const profile = {
  name: "Aparneet Dey",
  title: "Full-Stack Developer & Game Developer",
  tagline: "Crafting digital realms, resilient web applications, and intuitive user journeys.",
  description:
    "A software engineer passionate about clean software craftsmanship, modern web architecture, and interactive digital worlds. Blending aesthetic design with robust, reliable engineering.",
  email: "aparnitd@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Assam, India",
  status: "Open for New Opportunities",
  statusBanner: {
    status: "Open for Opportunities",
    variant: "available", // Options: 'available' | 'busy' | 'freelancing' | 'unavailable'
  },
  avatar: "/favicon.svg",
  stats: [
    { label: "Years of Craft", value: "2+" },
    { label: "Completed Quests", value: "15+" },
    { label: "Code Commits", value: "1,400+" },
    { label: "Elixirs Brewed (Coffee)", value: "∞" },
  ],
  traits: [
    {
      title: "Clean Architecture",
      description: "Writing maintainable, modular, and well-tested code with clear separation of concerns.",
      icon: "scroll",
    },
    {
      title: "Full-Stack Versatility",
      description: "Comfortable navigating database depths, server corridors, and frontend interfaces.",
      icon: "anvil",
    },
    {
      title: "Continuous Exploration",
      description: "Ever-curious learner venturing into emerging tools, performance tuning, and design systems.",
      icon: "compass",
    },
    {
      title: "Game Development",
      description: "Building interactive game experiences while exploring game mechanics, level design, and engaging player interactions.",
      icon: "gamepad",
    },
  ],
};
