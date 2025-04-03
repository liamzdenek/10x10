import { createFileRoute, useNavigate } from '@tanstack/react-router';
import Home from '../app/components/home/Home';
import { useEffect } from 'react';

export const Route = createFileRoute('/10x10/')({
  component: Home,
  head: () => ({
    meta: [
      {
        title: 'Projects | 10x10 Portfolio',
      },
      {
        name: 'description',
        content: 'A showcase of 10 projects built in 10 days, each demonstrating different technical skills and problem-solving abilities.'
      },
      {
        property: 'og:title',
        content: 'Projects | 10x10 Portfolio'
      },
      {
        property: 'og:description',
        content: 'A showcase of 10 projects built in 10 days, each demonstrating different technical skills and problem-solving abilities.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  })
});