interface MockProject {
  id: number;
  title: string;
  description: string;
  url?: string;
  repo_url?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  image?: string;
}

export const mockProjects: MockProject[] = [
  {
    id: 1,
    title: "Portfolio Alejoide",
    description:
      "Sitio personal desarrollado con Astro y React para mostrar proyectos, experiencia y formas de contacto.",
    url: "https://alejoide.com",
    repo_url: "https://github.com/alejoide/alejoide.com",
    featured: true,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Projects API",
    description:
      "API de ejemplo para administrar proyectos, preparada para desarrollo local con datos mock.",
    url: "https://api.alejoide.com/projects",
    repo_url: "https://github.com/alejoide/projects-api",
    featured: true,
    created_at: "2026-01-02T00:00:00.000Z",
    updated_at: "2026-01-02T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bot de Telegram",
    description: "Bot para automatizar recordatorios y avisos personales.",
    url: "https://t.me/example_bot",
    repo_url: "https://github.com/alejoide/telegram-bot",
    featured: false,
    created_at: "2026-01-03T00:00:00.000Z",
    updated_at: "2026-01-03T00:00:00.000Z",
  },
  {
    id: 4,
    title: "Scripts de automatización",
    description: "Colección de scripts para tareas repetitivas de desarrollo.",
    repo_url: "https://github.com/alejoide/scripts",
    featured: false,
    created_at: "2026-01-04T00:00:00.000Z",
    updated_at: "2026-01-04T00:00:00.000Z",
  },
  {
    id: 5,
    title: "Landing de prueba",
    description: "Sitio estático de ejemplo, sin repositorio público.",
    url: "https://example.alejoide.com",
    featured: false,
    created_at: "2026-01-05T00:00:00.000Z",
    updated_at: "2026-01-05T00:00:00.000Z",
  },
];
