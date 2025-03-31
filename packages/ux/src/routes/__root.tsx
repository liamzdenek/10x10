import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Layout from '../app/components/layout/Layout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
