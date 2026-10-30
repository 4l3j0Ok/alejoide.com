export interface TechnologyPill {
  name: string;
  icon?: string;
}

export interface WorkArea {
  title: string;
  description: string;
  pills: TechnologyPill[];
}

export const sreDevOpsArea: WorkArea = {
  title: "SRE / DevOps",
  description:
    "Actualmente me encuentro trabajando de SRE/DevOps, donde trabajo principalmente con tecnologías para la administración de infraestructura y despliegue de aplicaciones con contenedores y orquestadores.",
  pills: [
    { name: "Kubernetes", icon: "simple-icons:kubernetes" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "Ansible", icon: "simple-icons:ansible" },
    { name: "ArgoCD", icon: "simple-icons:argo" },
    { name: "Jenkins", icon: "simple-icons:jenkins" },
    { name: "DigitalOcean", icon: "simple-icons:digitalocean" },
    // { name: "AWS", icon: "simple-icons:amazonaws" }, próximamente
    { name: "Helm", icon: "simple-icons:helm" },
    { name: "Terraform", icon: "simple-icons:terraform" },
    { name: "GitHub Actions", icon: "simple-icons:githubactions" },
    { name: "GitLab CI", icon: "simple-icons:gitlab" },
    { name: "Grafana", icon: "simple-icons:grafana" },
    // { name: "OpenTelemetry", icon: "simple-icons:opentelemetry" }, próximamente
    { name: "Prometheus", icon: "simple-icons:prometheus" },
    { name: "Apache", icon: "simple-icons:apache" },
    { name: "Nginx", icon: "simple-icons:nginx" },
  ],
};

export const backendArea: WorkArea = {
  title: "Backend",
  description:
    "Tengo experiencia como desarrollador backend con múltiples tecnologías y lenguajes de programación, principalmente Python y FastAPI para el desarrollo de APIs, microservicios y aplicaciones web.",
  pills: [
    { name: "Python", icon: "simple-icons:python" },
    { name: "FastAPI", icon: "simple-icons:fastapi" },
    { name: "Flask", icon: "simple-icons:flask" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "Redis", icon: "simple-icons:redis" },
    { name: "SQLModel", icon: "simple-icons:sqlalchemy" },
    { name: "SQLAlchemy", icon: "simple-icons:sqlalchemy" },
    { name: "REST y SOAP", icon: "mdi:api" },
    { name: "pytest", icon: "simple-icons:pytest" },
  ],
};

export const frontendArea: WorkArea = {
  title: "Frontend",
  description:
    "También tengo conocimiento en el área de frontend, habiendo trabajado con Single Page Applications (SPA) y frameworks modernos como React y Astro, para la creación de interfaces de usuario interactivas y responsivas.",
  pills: [
    { name: "JavaScript", icon: "simple-icons:javascript" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "React", icon: "simple-icons:react" },
    { name: "Astro", icon: "simple-icons:astro" },
    { name: "HTML", icon: "simple-icons:html5" },
    { name: "CSS", icon: "simple-icons:css3" },
    { name: "Vite", icon: "simple-icons:vite" },
    { name: "Next.js", icon: "simple-icons:nextdotjs" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    { name: "Figma", icon: "simple-icons:figma" },
  ],
};

export const aiArea: WorkArea = {
  title: "Inteligencia Artificial",
  description:
    "En los últimos años estuve enfocándome en estudiar y experimentar con inteligencia artificial, con el fin de aumentar la productividad y eficiencia en mis proyectos, tanto personales como profesionales. Sigo continuamente especializándome en las tecnologías modernas de I.A, implementación de RAG, creación de Harnesses para proyectos de desarrollo y despliegue de LLMs tanto en cloud como on-premise.",
  pills: [
    { name: "OpenCode", icon: "simple-icons:opencode" },
    { name: "Claude", icon: "simple-icons:claude" },
    { name: "Ollama", icon: "simple-icons:ollama" },
    { name: "LM Studio", icon: "simple-icons:lmstudio" },
    { name: "LiteLLM", icon: "mdi:robot" },
    { name: "Hugging Face", icon: "simple-icons:huggingface" },
    { name: "RAG", icon: "mdi:database-search" },
  ],
};

export const workAreas: WorkArea[] = [
  sreDevOpsArea,
  backendArea,
  frontendArea,
  aiArea,
];
