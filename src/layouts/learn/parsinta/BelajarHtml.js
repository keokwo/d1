import { Title } from '@/components/Meta'
import { SidebarLayout } from '@/layouts/SidebarLayout'
import { belajarHtml } from '@/navs/learn/parsinta/belajar-html'

export function BelajarHtml(props) {
  return (
    <>
      <Title>{props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}</Title>
      <SidebarLayout nav={belajarHtml} {...props} />
    </>
  )
}

BelajarHtml.nav = belajarHtml
