import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/(installation|guides)/,
    },
    // TODO: Add these pages
    // pages['tailwind-cli'],
    // { title: 'Play CDN', href: '#' },
  ],
  Customization: [pages['configuration'], pages['content-configuration']],
  'Transitions & Animation': [pages['transition-property'], pages['transition-duration']],
}
