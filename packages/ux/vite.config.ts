/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
//import { ssr } from 'vite-plugin-ssr/plugin'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import vitePrerender from 'vite-plugin-prerender'
//const Renderer = vitePrerender.PuppeteerRenderer
import PuppeteerRenderer from './util/PuppeteerRenderer';

console.log('vite prerenderer', vitePrerender);
//const Renderer = vitePrerender.JSDomRenderer;
import path from 'path';

import { parseRouteManifest } from './util/parseRouteManifest';

export default defineConfig(async () => {
  const manifest = await parseRouteManifest();
  const routes = Object.keys(manifest.routes).filter(v => v !== "__root__")
  console.log('routes', routes);

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

      vitePrerender({
        // Required - The path to the vite-outputted app to prerender.
        staticDir: path.join(__dirname, '../../dist/packages/ux/'),
        // Required - Routes to render.
        routes,

        renderer: new PuppeteerRenderer({
          renderAfterElementExists: '#root:not(:empty):not(:has(#pending))',
          //headless: false,
        })
      }),
      //ssr({ prerender: true }),
    ],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
      outDir: '../../dist/packages/ux',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }
});
