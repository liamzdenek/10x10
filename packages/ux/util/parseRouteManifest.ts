// parseRouteManifest.ts
import { promises as fs } from 'fs';
import * as path from 'path';

export interface RouteManifest {
  routes: {
    [route: string]: {
      filePath: string;
      children?: string[];
    };
  };
}

const ROUTE_MANIFEST_START = '/* ROUTE_MANIFEST_START';
const ROUTE_MANIFEST_END = 'ROUTE_MANIFEST_END */';

/**
 * Parses the route manifest embedded as a comment in the ./routeTree.gen.ts file.
 * 
 * @returns A promise that resolves to the parsed RouteManifest object.
 */
export async function parseRouteManifest(): Promise<RouteManifest> {
  const filePath = path.resolve(__dirname, '../src/routeTree.gen.ts');
  const fileContents = await fs.readFile(filePath, 'utf-8');

  const startIdx = fileContents.indexOf(ROUTE_MANIFEST_START);
  const endIdx = fileContents.indexOf(ROUTE_MANIFEST_END);

  if (startIdx === -1 || endIdx === -1 || startIdx > endIdx) {
    throw new Error('Could not find valid route manifest block in file.');
  }

  const manifestContent = fileContents
    .slice(startIdx + ROUTE_MANIFEST_START.length, endIdx)
    .trim();

  try {
    const parsed: RouteManifest = JSON.parse(manifestContent);
    return parsed;
  } catch (error) {
    throw new Error('Failed to parse route manifest JSON: ' + error);
  }
}
