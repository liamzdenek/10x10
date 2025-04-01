import { createFileRoute } from '@tanstack/react-router';
import Metrics from '../app/components/metrics/Metrics';

export const Route = createFileRoute('/10x10/metrics')({
  component: Metrics
});
