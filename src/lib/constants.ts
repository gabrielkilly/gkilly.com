// ─── Site Metadata ────────────────────────────────────────────
// TODO: Update with your real info before deploying
export const SITE = {
  name: 'gkilly',
  fullName: 'Your Name',         // TODO: Replace with your name
  title: 'Senior Software Engineer',
  tagline: '// building systems, shipping products, breaking things in homelab',
  email: 'hello@gkilly.com',     // TODO: Replace with your email
  github: 'https://github.com/gkilly',
  linkedin: 'https://linkedin.com/in/gkilly',
  url: 'https://gkilly.com',
  description: 'Senior Software Engineer. Writing about software, homelab, music, and culture.',
  location: 'Earth',             // TODO: Update if you want to show location
};

// ─── Featured Projects ────────────────────────────────────────
export const PROJECTS = [
  {
    name: 'gkilly.com',
    description: 'Terminal-themed personal card + blog. Built with Astro and MDX.',
    url: 'https://github.com/gkilly/gkilly.com',
    tech: ['astro', 'tailwind', 'mdx'],
  },
  {
    name: 'homelab-infra',
    description: 'IaC configs and runbooks for my home server stack.',
    url: 'https://github.com/gkilly/homelab-infra',
    tech: ['proxmox', 'docker', 'ansible'],
  },
  {
    name: 'project-three',           // TODO: Replace with a real project
    description: 'Short description of a project you want to highlight.',
    url: 'https://github.com/gkilly',
    tech: ['typescript', 'node'],
  },
];

// ─── Skills ───────────────────────────────────────────────────
export const SKILLS = {
  languages:  ['TypeScript', 'Python', 'Go', 'SQL', 'Bash'],
  frontend:   ['React', 'Astro', 'Next.js', 'Tailwind CSS'],
  backend:    ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
  infra:      ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux'],
  tools:      ['Git', 'Neovim', 'tmux', 'Proxmox'],
};

// ─── Blog Categories ──────────────────────────────────────────
export const CATEGORIES = [
  { slug: 'homelab',              label: 'Homelab',      color: '#50FA7B' },
  { slug: 'music',                label: 'Music',        color: '#FF79C6' },
  { slug: 'software-engineering', label: 'Engineering',  color: '#8BE9FD' },
  { slug: 'culture',              label: 'Culture',      color: '#FFB86C' },
] as const;

export type CategorySlug = typeof CATEGORIES[number]['slug'];

export function getCategoryMeta(slug: string) {
  return CATEGORIES.find(c => c.slug === slug) ?? {
    slug,
    label: slug,
    color: '#BD93F9',
  };
}
