import { createFileRoute } from '@tanstack/react-router';
import ProjectDetail from '../app/components/project/ProjectDetail';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetail,
});