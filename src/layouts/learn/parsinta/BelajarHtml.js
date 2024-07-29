import { Title } from '@/components/Meta'
import { SidebarLayout } from '@/layouts/SidebarLayout'
import { documentationNav } from '@/navs/learn/parsinta/belajar-html'

export function BelajarHtml(props) {
  return (
    <>
      <Title>{props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}</Title>
      <SidebarLayout nav={documentationNav} {...props} />
    </>
  )
}

BelajarHtml.nav = documentationNav
