import { ui, programming } from './pro';
import { curriculum } from './curriculum';

export const projects = [...curriculum, ...ui, ...programming].map((project) => ({
  ...project,
  slug: project.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
}));