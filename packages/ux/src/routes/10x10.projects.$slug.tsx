import { createFileRoute } from '@tanstack/react-router';
import ProjectDetail from '../app/components/project/ProjectDetail';
import projects from '../data/projects';

export const Route = createFileRoute('/10x10/projects/$slug')({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find(p => p.slug === params.slug);
    return { project };
  },
  head: ({ params, loaderData }) => {
    const { project } = loaderData;
    const title = project ? `${project.company} | 10x10 Portfolio` : 'Project | 10x10 Portfolio';
    const description = project ? project.shortDescription : 'A project from the 10x10 Portfolio';
    
    return {
      meta: [
        {
          title,
        },
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    };
  }
});