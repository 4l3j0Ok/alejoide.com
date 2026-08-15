interface MockProject {
  id: number;
  title: string;
  description: string;
  url: string;
  repo_url?: string;
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
    created_at: "2026-01-02T00:00:00.000Z",
    updated_at: "2026-01-02T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
];
