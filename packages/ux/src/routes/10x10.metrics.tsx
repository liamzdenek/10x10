import { createFileRoute } from '@tanstack/react-router';
import Metrics from '../app/components/metrics/Metrics';

export const Route = createFileRoute('/10x10/metrics')({
  component: Metrics,
  head: () => ({
    meta: [
      {
        title: 'Metrics | 10x10 Portfolio',
      },
      {
        name: 'description',
        content: 'Performance metrics and insights from the 10x10 Portfolio project.'
      },
      {
        property: 'og:title',
        content: 'Metrics | 10x10 Portfolio'
      },
      {
        property: 'og:description',
        content: 'Performance metrics and insights from the 10x10 Portfolio project.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  })
});
