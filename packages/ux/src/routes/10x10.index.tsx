import { createFileRoute } from '@tanstack/react-router';
import Home from '../app/components/home/Home';

export const Route = createFileRoute('/10x10/')({
  component: Home
});