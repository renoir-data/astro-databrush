import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Renoir',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/renoir/overview'),
        },
        {
          text: 'Use Cases',
          href: getPermalink('/renoir/use-cases'),
        },
        {
          text: 'Documentation',
          href: getPermalink('/renoir/documentation'),
        },
      ],
    },
    {
      text: 'Blog',
      href: '#',
    },
    {
      text: 'Roadmap',
      href: '#',
    },
    {
      text: 'Contact',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/deib-polimi/renoir', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Renoir',
      links: [
        { text: 'Overview', href: '#' },
        { text: 'Documentation', href: '#' },
        { text: 'Use Cases', href: '#' },
        { text: 'Reference', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Roadmap', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Databrush',
      links: [
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/data-brush' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/deib-polimi/renoir' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
