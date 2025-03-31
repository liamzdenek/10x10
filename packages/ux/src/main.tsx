import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import Loading from './app/components/common/Loading';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Import global styles
import './styles.css';

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultPendingComponent: Loading,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
