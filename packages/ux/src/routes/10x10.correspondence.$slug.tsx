import { createFileRoute } from '@tanstack/react-router';
import Correspondence from '../app/components/correspondence/Correspondence';
import projects from '../data/projects';

export const Route = createFileRoute('/10x10/correspondence/$slug')({
  component: Correspondence,
  loader: ({ params }) => {
    const project = projects.find(p => p.slug === params.slug);
    return { project };
  },
  head: ({ params, loaderData }) => {
    const { project } = loaderData;
    const title = project ? `${project.company} Correspondence | 10x10 Portfolio` : 'Correspondence | 10x10 Portfolio';
    const description = project ? `Email correspondence for the ${project.company} project` : 'Email correspondence for a 10x10 Portfolio project';
    
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