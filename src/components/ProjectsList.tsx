import { useState, useEffect } from "react";
import "../styles/ProjectsList.css";

export interface Project {
  id: number;
  title: string;
  description: string;
  url?: string | null;
  repo_url?: string | null;
  featured?: boolean;
  created_at: string;
  updated_at: string;
  image?: string | null;
}

function ProjectLinks({ url, repo_url }: Pick<Project, "url" | "repo_url">) {
  if (!url && !repo_url) return null;

  return (
    <div className="project-links">
      {url && (
        <a className="spotlight-button" href={url} target="_blank">
          Ver sitio →
        </a>
      )}
      {repo_url && (
        <a className="spotlight-button" href={repo_url} target="_blank">
          Ver código →
        </a>
      )}
    </div>
  );
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("/api/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const toggleExpanded = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (loading) return <p>Cargando proyectos...</p>;
  if (projects.length === 0) return <p>No hay proyectos para mostrar.</p>;

  const featuredProjects = projects.filter((project) => project.featured !== false);
  const otherProjects = projects.filter((project) => project.featured === false);

  return (
    <>
      <div className="projects-grid">
        {featuredProjects.map((project) => {
          const { title, description, image, url, repo_url } = project;

          return (
            <article key={project.id} className="project spotlight-card">
              {image && <img src={image} alt={title} loading="lazy" />}
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ProjectLinks url={url} repo_url={repo_url} />
            </article>
          );
        })}
      </div>

      {otherProjects.length > 0 && (
        <div className="projects-more">
          <button
            type="button"
            className={`projects-more-toggle${showMore ? " is-open" : ""}`}
            aria-expanded={showMore}
            aria-controls="projects-more-grid"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <span>{showMore ? "Ver menos" : "Ver más"}</span>
            <svg
              className="projects-more-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {showMore && (
            <div id="projects-more-grid" className="projects-grid projects-grid--compact">
              {otherProjects.map((project) => {
                const { id, title, description, image, url, repo_url } = project;
                const expanded = expandedIds.has(id);
                const panelId = `project-panel-${id}`;

                return (
                  <article
                    key={id}
                    className={`project-compact spotlight-card${expanded ? " is-expanded" : ""}`}
                  >
                    <button
                      type="button"
                      className="project-compact-header"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => toggleExpanded(id)}
                    >
                      <h3>{title}</h3>
                      <span className="project-compact-chevron" aria-hidden="true" />
                    </button>
                    {expanded && (
                      <div id={panelId} className="project-compact-body">
                        {image && <img src={image} alt={title} loading="lazy" />}
                        <p>{description}</p>
                        <ProjectLinks url={url} repo_url={repo_url} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
