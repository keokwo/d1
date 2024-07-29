import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(
    `../../../pages/learn/umum/parsinta/belajar-html/?meta=title,shortTitle,published`,
    false,
    /\.mdx$/
  ),
  '/learn/umum/parsinta/belajar-html'
)

export const documentationNav = {
  Customization: [pages['content-configuration']],
}
