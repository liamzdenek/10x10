import { Project } from '../types';
import animaProject from './anima';
import hiiveProject from './hiive';
import affirmProject from './affirm';
import sofiProject from './sofi';
import stitchFixProject from './stitch-fix';
import sourcegraphProject from './sourcegraph';
import vercelProject from './vercel';
import gitlabProject from './gitlab';
import posthogProject from './posthog';
import zillowProject from './zillow';

// Sort projects by project day in reverse order (10 to 1)
const projects: Project[] = [
  zillowProject,      // Day 10
  posthogProject,     // Day 9
  gitlabProject,      // Day 8
  vercelProject,      // Day 7
  sourcegraphProject, // Day 6
  stitchFixProject,   // Day 5
  sofiProject,        // Day 4
  affirmProject,      // Day 3
  hiiveProject,       // Day 2
  animaProject,       // Day 1
];

export default projects;