/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import vitePrerender from 'vite-plugin-prerender'
import PuppeteerRenderer from './util/PuppeteerRenderer';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { parseRouteManifest } from './util/parseRouteManifest';
import { generateProjectRoutes } from './util/generateProjectRoutes';

export default defineConfig(async () => {
  const manifest = await parseRouteManifest();
  const baseRoutes = Object.keys(manifest.routes).filter(v => v !== "__root__");
  
  // Generate project routes for prerendering
  const projectRoutes = generateProjectRoutes();
  
  // Combine base routes with project routes
  const allRoutes = [...baseRoutes, ...projectRoutes];
  
  console.log('Routes to prerender:', allRoutes);

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/ux',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [
      TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
      react(),
      nxViteTsPaths(),
      nxCopyAssetsPlugin(['*.md']),
      ViteImageOptimizer({
        png: {
          quality: 95,
        }
      }),
      vitePrerender({
        // Required - The path to the vite-outputted app to prerender.
        staticDir: path.join(__dirname, '../../dist/packages/ux/'),
        // Required - Routes to render.
        routes: allRoutes,

        renderer: new PuppeteerRenderer({
          // Wait until the root element exists and doesn't contain any text with "Loading..."
          // This ensures all loading spinners are gone from the DOM
          renderAfterElementExists: '#root:not(:empty):not(:has(#loading))',
          navigationOptions: {
            waitUntil: 'networkidle0',
          }
        })
      }),
    ],
    build: {
      outDir: '../../dist/packages/ux',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
      }
    },
  }
});
