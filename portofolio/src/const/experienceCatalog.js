import { experienced, organizational } from './exp';
export const experienceGroups = [
  { title: 'Work Experience', items: experienced },
  { title: 'Organizational Experience', items: organizational },
].map((group) => ({ ...group, items: group.items.map((item) => ({ ...item,
  slug: item.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
})) }));