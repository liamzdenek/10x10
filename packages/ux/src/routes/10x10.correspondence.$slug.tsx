import { createFileRoute } from '@tanstack/react-router';
import Correspondence from '../app/components/correspondence/Correspondence';

export const Route = createFileRoute('/10x10/correspondence/$slug')({
  component: Correspondence
});