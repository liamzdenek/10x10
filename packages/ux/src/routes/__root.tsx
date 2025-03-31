import * as React from 'react'
import { Outlet, createRootRoute, useMatches } from '@tanstack/react-router'
import Layout from '../app/components/layout/Layout'
import HomeLayout from '../app/components/layout/HomeLayout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const matches = useMatches();
  const currentPath = matches.length > 0 ? matches[matches.length - 1].pathname : '/';
  
  // Use HomeLayout for the homepage, Layout for all other routes
  const is10x10Route = currentPath.startsWith('/10x10');
  
  return is10x10Route ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
}
