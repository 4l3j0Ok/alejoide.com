import type { APIRoute } from "astro";
import { PROJECTS_API_URL } from "astro:env/server";

import { mockProjects } from "../../mocks/projects";

export const GET: APIRoute = async () => {
  if (import.meta.env.DEV) {
    return Response.json(mockProjects);
  }

  if (!PROJECTS_API_URL) {
    return Response.json(
      { error: "PROJECTS_API_URL no está configurada" },
      { status: 500 },
    );
  }

  const response = await fetch(`${PROJECTS_API_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return Response.json(
      { error: errorData?.detail || "Error fetching data" },
      { status: response.status },
    );
  }

  const projects = await response.json();
  return Response.json(projects);
};
