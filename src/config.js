export const nav = [
  { path: '/', name: 'Home', hidden: true },
  // { path: '/podcast/', name: 'Podcast' },
  { path: 'https://medium.com/@marisamorby', name: 'Blog', hidden: true },
  { path: '/work/', name: 'Work' },
  { path: '/about/', name: 'About' },
  { path: '/contact/', name: 'Contact' },
];

export const site = {
  title: {
    default: 'Marisa Morby · Transformation Designer and UX Researcher',
    template: '%s · Marisa Morby',
  },
  description: '',
  url: 'https://marisamorby.com', // no trailing slash!
  logo: 'https://marisamorby.com/images/logo.png',
  image: '/images/marisa-morby.jpg',
  owner: 'Marisa Morby',
};

export const social = {
  twitter: {
    username: '@marisamorby',
  },
  facebook: {
    appId: '',
  },
};

export const categories = {
  confidence: 'Confidence',
  'better-humans': 'Better Humans',
  'business-basics': 'Business Basics',
  'uncomfortable-things': 'Uncomfortable Things',
};
