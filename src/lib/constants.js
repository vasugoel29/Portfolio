// ─── Color Palette ─────────────────────────────────────────────
export const colors = {
  bgPrimary: '#050816',
  bgSurface: '#111827',
  accent: '#38BDF8',
  accentSecondary: '#818CF8',
  textPrimary: '#E5E7EB',
  textSecondary: '#9CA3AF',
  glow: 'rgba(56, 189, 248, 0.15)',
};

// ─── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

// ─── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'CRAS',
    subtitle: 'Campus Room Allocation System',
    description:
      'A premium, modern room booking platform for campuses featuring real-time availability tracking, atomic booking transactions, and a glassmorphism dark-themed UI.',
    tags: ['React', 'Vite', 'Express.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/vasugoel29/room-allocation',
    live: 'https://room-allocation-indol.vercel.app',
    color: '#38BDF8',
  },
  {
    id: 2,
    title: 'ActivityTracker',
    subtitle: 'PWA Life Analyst',
    description:
      'An advanced PWA that bridges a Supabase cluster with a local Mistral AI engine to analyze Habits, Time, and Finances continuously — generating daily, weekly, and monthly audits.',
    tags: ['React', 'Supabase', 'Ollama', 'Mistral AI', 'PWA'],
    github: 'https://github.com/vasugoel29/ActivityTracker',
    live: 'https://activity-tracker-one-pi.vercel.app',
    color: '#818CF8',
  },
  {
    id: 3,
    title: 'LocalGPT',
    subtitle: 'Tauri Desktop App',
    description:
      'A production-quality local ChatGPT/Claude-style desktop application natively integrated with Ollama using Tauri. Features streaming responses, markdown rendering, and conversation management.',
    tags: ['React', 'Tauri', 'Rust', 'Ollama', 'TailwindCSS'],
    github: 'https://github.com/vasugoel29/localGPT',
    live: null,
    color: '#F472B6',
  },
  {
    id: 4,
    title: 'IQAC',
    subtitle: 'Quality Assurance Platform',
    description:
      'An Internal Quality Assurance Cell platform for academic institutions, streamlining accreditation and quality assessment workflows.',
    tags: ['JavaScript', 'React', 'Vercel'],
    github: 'https://github.com/vasugoel29/IQAC',
    live: 'https://iqac-five.vercel.app',
    color: '#34D399',
  },
  {
    id: 5,
    title: 'RBAC Dash',
    subtitle: 'Access Control Dashboard',
    description:
      'A comprehensive admin dashboard implementing Role-Based Access Control with user management, role assignment, and permission control.',
    tags: ['TypeScript', 'Next.js', 'Radix UI', 'shadcn/ui'],
    github: 'https://github.com/vasugoel29/RBAC_Dash',
    live: 'https://rbac-dash.vercel.app',
    color: '#FBBF24',
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'Radix UI', 'PWA'],
    icon: '◈',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Supabase'],
    icon: '⬡',
  },
  {
    title: 'Desktop & Native',
    skills: ['Tauri', 'Rust', 'Electron'],
    icon: '◇',
  },
  {
    title: 'AI / ML',
    skills: ['Ollama', 'Mistral', 'Local LLM', 'Prompt Engineering'],
    icon: '◎',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Vercel', 'Git', 'ESM', 'CI/CD'],
    icon: '⎔',
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL', 'HTML/CSS'],
    icon: '⟐',
  },
];

// ─── Experience (placeholder — update with real data) ──────────
export const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Independent Projects',
    period: '2024 — Present',
    description:
      'Building production-grade applications spanning web platforms, desktop apps, and AI-powered tools. Focused on systems architecture, real-time data, and local AI integration.',
    technologies: ['React', 'Next.js', 'Tauri', 'PostgreSQL', 'Ollama'],
  },
];

// ─── Social Links ──────────────────────────────────────────────
export const socialLinks = {
  github: 'https://github.com/vasugoel29',
  linkedin: '#',
  twitter: '#',
  email: 'mailto:vasugoel29@gmail.com',
};
