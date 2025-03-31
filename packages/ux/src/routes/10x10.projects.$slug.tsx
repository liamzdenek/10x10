import { createFileRoute } from '@tanstack/react-router';
import ProjectDetail from '../app/components/project/ProjectDetail';

export const Route = createFileRoute('/10x10/projects/$slug')({
  component: ProjectDetail,
});