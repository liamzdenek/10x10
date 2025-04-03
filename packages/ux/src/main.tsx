import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles.css'
import { MetricsProvider } from './app/context/MetricsContext'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Add a listener to scroll to top on navigation
router.subscribe('onBeforeNavigate', () => {
  window.scrollTo(0, 0);
});


router.history.subscribe(() => {
  const url = router.history.location.href;
  const path = router.history.location.pathname;

  // Track page view with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: url,
      page_path: path,
      send_to: 'G-FX8NRGPVDK'
    });
  }
})

// Render the app
const rootElement = document.getElementById('root')!

const tree = (
  <StrictMode>
    <MetricsProvider>
      <RouterProvider router={router} />
    </MetricsProvider>
  </StrictMode>
);
if (rootElement.innerHTML) {
  hydrateRoot(rootElement, tree)
} else {
  const root = createRoot(rootElement)
  root.render(tree);
}