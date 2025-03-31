// generateProjectRoutes.ts
import projects from '../src/data/projects';

/**
 * Generates a list of project routes for prerendering
 * 
 * @returns An array of project routes in the format '/10x10/projects/[slug]'
 */
export function generateProjectRoutes(): string[] {
  return projects.map(project => `/10x10/projects/${project.slug}`);
}