import { createFileRoute, useNavigate } from '@tanstack/react-router';
import Home from '../app/components/home/Home';
import { useEffect } from 'react';

export const Route = createFileRoute('/10x10/')({
  component: Home
});