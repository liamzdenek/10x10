import * as React from 'react'
import { Outlet, createRootRoute, useMatches, HeadContent, Scripts } from '@tanstack/react-router'
import Layout from '../app/components/layout/Layout'
import HomeLayout from '../app/components/layout/HomeLayout'

const DEFAULT_TITLE = "10x10 Portfolio";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    //title: DEFAULT_TITLE,
    meta: [
      {
        title: DEFAULT_TITLE,
      },
      {
        name: 'description',
        content: 'A showcase of 10 projects built in 10 days, each demonstrating different technical skills and problem-solving abilities.'
      },
      {
        property: 'og:title',
        content: DEFAULT_TITLE
      },
      {
        property: 'og:description',
        content: 'A showcase of 10 projects built in 10 days, each demonstrating different technical skills and problem-solving abilities.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml'
      }
    ]
  })
})

/*
function Meta({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const meta = matches.at(-1)?.meta?.find((meta) => meta?.title);

  console.log('matches', matches.at(-1)?.meta);
  console.log('meta', meta);

  React.useEffect(() => {
    //document.title = [meta?.title, DEFAULT_TITLE].filter(Boolean).join(' · ');
  }, [meta]);

  return children;
}
  */

function RootComponent() {
  const matches = useMatches();
  const currentPath = matches.length > 0 ? matches[matches.length - 1].pathname : '/';
  
  // Use HomeLayout for the homepage, Layout for all other routes
  const is10x10Route = true; //currentPath.startsWith('/10x10');
  
  return (
    <>
      <HeadContent />
      {is10x10Route ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <HomeLayout>
          <Outlet />
        </HomeLayout>
      )}
      <Scripts/>
    </>
  );
}
