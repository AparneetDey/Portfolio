/**
 * Status variants dictionary defining standard medieval fantasy states.
 * Easily add or modify variants here without altering UI component markup.
 */
export const STATUS_VARIANTS = {
  available: {
    highlight: "Open",
    secondary: "for Opportunities",
    highlightColor: "text-[#2e5d36]", // Muted medieval moss green
    icon: "briefcase",
    ariaLabel: "Status: Open for Opportunities",
  },
  busy: {
    highlight: "Engaged",
    secondary: "in Active Quest",
    highlightColor: "text-[#a06f15]", // Warm amber/bronze
    icon: "sword",
    ariaLabel: "Status: Engaged in Active Quest",
  },
  freelancing: {
    highlight: "Open",
    secondary: "for Commissions",
    highlightColor: "text-[#345e80]", // Twilight harbor blue
    icon: "potion",
    ariaLabel: "Status: Open for Commissions",
  },
  unavailable: {
    highlight: "Resting",
    secondary: "at the Tavern",
    highlightColor: "text-[#5e6978]", // Slate gray
    icon: "shield",
    ariaLabel: "Status: Currently Unavailable",
  },
};
