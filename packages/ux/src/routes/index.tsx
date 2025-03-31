import { createFileRoute } from '@tanstack/react-router'
import Home from '../app/components/home/Home'

export const Route = createFileRoute('/')({
  component: Home,
})