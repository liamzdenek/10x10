// generateProjectRoutes.ts
import projects from '../src/data/projects';

/**
 * Generates a list of project routes for prerendering
 * 
 * @returns An array of project routes in the format '/projects/[slug]'
 */
export function generateProjectRoutes(): string[] {
  return projects.map(project => `/projects/${project.slug}`);
}