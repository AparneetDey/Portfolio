/**
 * Medieval & Fantasy Icon Set rendered as crisp SVGs.
 * Avoids heavy icon libraries and maintains consistent retro fantasy style.
 */
export function PixelIcon({ name, className = "w-5 h-5", ...props }) {
  switch (name) {
    case "scroll":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" />
          <path d="M4 17a2 2 0 1 0 4 0V3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
          <line x1="8" y1="7" x2="15" y2="7" />
          <line x1="8" y1="11" x2="13" y2="11" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 22V2" />
        </svg>
      );
    case "anvil":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M7 10H3V6h18v4h-4" />
          <path d="M7 10c0 4 3 6 5 6s5-2 5-6" />
          <path d="M6 20h12v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2z" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "atom":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6z" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "key":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M21 2l-2 2m-1.5 1.5L14 9l-3-3L8 9" />
          <circle cx="7.5" cy="16.5" r="4.5" />
          <line x1="16" y1="7" x2="19" y2="10" />
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
          <path d="M19 17l1.2 2.8L23 21l-2.8 1.2L19 25l-1.2-2.8L15 21l2.8-1.2L19 17z" />
        </svg>
      );
    case "potion":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M9 3h6v3l4 6a5 5 0 0 1-4.2 7H9.2A5 5 0 0 1 5 12l4-6V3z" />
          <line x1="8" y1="3" x2="16" y2="3" />
          <path d="M7 13h10" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "external-link":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "map-pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="3" />
          <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="3" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "leetcode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.864c.354.047.707.068 1.06.062a5.875 5.875 0 0 0 2.813-.703l5.622-3.245a1.375 1.375 0 0 0 .25-2.25l-4.5-4.5a1.375 1.375 0 0 0-1.944 1.944l3.528 3.528-4.707 2.718a3.125 3.125 0 0 1-2.91.134 3.188 3.188 0 0 1-1.64-1.64 2.97 2.97 0 0 1-.167-.78 3.016 3.016 0 0 1 .054-1.295 2.89 2.89 0 0 1 .65-1.157L9.08 9.38l4.403-4.707a1.374 1.374 0 0 0-.001-1.944A1.374 1.374 0 0 0 13.483 0zm4.5 13.5a1.375 1.375 0 0 0-1.375 1.375v4.5a1.375 1.375 0 0 0 2.75 0v-4.5a1.375 1.375 0 0 0-1.375-1.375z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#e5a828" />
          <path d="M7 16.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 1.9-.6 1.9-1.8v-6H9.4v5.9c0 .6-.2.8-.7.8-.4 0-.7-.3-.9-.6L7 16.5zm7.3-.2c.5.9 1.4 1.5 2.6 1.5 1.4 0 2.3-.7 2.3-1.8 0-1-.6-1.5-1.9-2l-.6-.2c-1-.4-1.5-.7-1.5-1.4 0-.7.5-1.2 1.4-1.2.7 0 1.2.3 1.6.9l1.4-.9c-.6-.9-1.5-1.3-2.9-1.3-1.9 0-3.1 1.1-3.1 2.5 0 1 .6 1.6 1.8 2.1l.6.2c1 .4 1.7.7 1.7 1.5 0 .8-.7 1.3-1.6 1.3-.9 0-1.6-.5-2-1.2l-1.3.8z" fill="#24140a" />
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4zm13.3 5.4l-.2 2.2H9.3l.2 2.2h7.3l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.1h2.2l.1 1.5 2.2.6 2.2-.6.3-2.8H7.3L6.6 5.2h10.9l-.2 2.2z" />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4zm13.1 5.3l-.2 2.2H9.2l.2 2.2h7.4l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.1h2.2l.1 1.5 2.2.6 2.2-.6.3-2.8H7.1L6.5 5.2h10.8l-.2 2.1z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M12 2L3 7.2v10.4L12 22l9-4.4V7.2L12 2zm6.7 14.3l-6.7 3.3-6.7-3.3V8.7L12 5.4l6.7 3.3v7.6z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M4 8h6M4 12h5M4 16h6" />
          <path d="M14 8l6 8M20 8l-6 8" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M12 1.5s-6 5.5-6 11.5c0 4.5 3.5 7.5 5.5 8.5v-7.5h1v7.5c2-1 5.5-4 5.5-8.5C18 7 12 1.5 12 1.5z" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M18.8 9.2C17.6 7 15.2 5.5 12.5 5.5c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.7-.3-1.6.2-3.3 1.5-4.5 1.5-1.4 3.7-1.8 5.6-1.1 1.2.4 2.3 1.2 3.1 2.2.8 1 1.3 2.3 1.4 3.6 1-.9 1.7-2.1 2-3.4.6-2.1.2-4.5-.6-6.8z" />
        </svg>
      );
    case "godot":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M4 7h2v2H4zm14 0h2v2h-2zM9 3h2v2H9zm4 0h2v2h-2zM3 10h18v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7zm5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 2h4v1.5h-4z" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M11.8 2c-3.1 0-4.9.4-4.9 2.2v2.2h5v.8H5c-2 0-3 .9-3 3 0 2.3 1.1 3.1 3 3.1h1.5v-1.6c0-1.7 1.5-3.1 3.1-3.1h4.7c1.3 0 2.3-.9 2.3-2.3V4.2C16.6 2.4 14.9 2 11.8 2zm-2.4 1.6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zm2.8 18.4c3.1 0 4.9-.4 4.9-2.2v-2.2h-5v-.8H19c2 0 3-.9 3-3 0-2.3-1.1-3.1-3-3.1h-1.5v1.6c0 1.7-1.5 3.1-3.1 3.1H9.7c-1.3 0-2.3.9-2.3 2.3v2.1c0 1.8 1.7 2.2 4.8 2.2zm2.4-1.6c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" />
        </svg>
      );
    case "cpp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M10 5.5A6.5 6.5 0 1 0 16.5 12h-2.5a4 4 0 1 1-4-4c1.1 0 2.1.5 2.8 1.2l1.8-1.8A6.47 6.47 0 0 0 10 5.5zm8 4v2h2v1h-2v2h-1v-2h-2v-1h2v-2h1zm4 0v2h2v1h-2v2h-1v-2h-2v-1h2v-2h1z" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M3 13.5h2V11H3v2.5zm3 0h2V11H6v2.5zm3 0h2V11H9v2.5zm3 0h2V11h-2v2.5zm3 0h2V11h-2v2.5zm-6-3.5h2V7.5H9V10zm3 0h2V7.5h-2V10zm3 0h2V7.5h-2V10zm3 0h2V7.5h-2V10zM1 14.5c.8 4.2 4.6 7.5 9.2 7.5 6.4 0 11.8-4.4 12.8-10.5-1.2.3-2.5.2-3.6-.3-1.1-.5-2-1.3-2.6-2.3-1.2.6-2.6.8-4 .6-.8-.1-1.6-.4-2.3-.8-1.5 1-3.3 1.5-5.2 1.5-1.5 0-3-.3-4.3-.9v5.2z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M21.6 10.8l-8.4-8.4a2 2 0 0 0-2.8 0L8 4.8l3.6 3.6a2.2 2.2 0 0 1 2.8 2.8l3.4 3.4a2.2 2.2 0 1 1-1.4 1.4L13 12.6v5a2.2 2.2 0 1 1-2 0v-5.2a2.2 2.2 0 0 1-1.2-2.9L6.3 5.9 2.4 9.8a2 2 0 0 0 0 2.8l8.4 8.4a2 2 0 0 0 2.8 0l8-8a2 2 0 0 0 0-2.2z" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M7 12l10-5-4 10-2-4-4-1z" fill="#24140a" />
        </svg>
      );
    case "linux":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M12 2C9.8 2 8 3.8 8 6v4.5c-.9.5-1.5 1.5-1.5 2.6 0 1.2.8 2.3 2 2.7V18c0 2.2 1.8 4 4 4s4-1.8 4-4v-2.2c1.2-.4 2-1.5 2-2.7 0-1.1-.6-2.1-1.5-2.6V6c0-2.2-1.8-4-4-4zm-1.5 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "quill":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M20.24 3.76a6 6 0 0 0-8.48 0L3 11.5V17h5.5l7.74-7.74a6 6 0 0 0 0-8.48z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      );
    case "cat":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
          <path d="M18 16c0-3.3-2.7-6-6-6s-6 2.7-6 6v2h12v-2z" />
          <path d="M7 10L5 6l4 2 3-1 3 1 4-2-2 4" />
          <path d="M18 16c1.5 0 3 1.5 3 3s-1.5 2-3 2h-1v-2h1c.6 0 1-.4 1-1s-.4-1-1-1v-1z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
