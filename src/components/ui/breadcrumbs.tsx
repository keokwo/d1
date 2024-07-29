'use client'

import { cn } from '@/lib/utils'
import { IconChevronRight } from '@irsyadadl/paranoid'
import type { BreadcrumbProps, BreadcrumbsProps } from 'react-aria-components'
import {
  Breadcrumb as BreadcrumbPrimitive,
  Breadcrumbs as BreadcrumbsPrimitive,
  Link,
  type LinkProps
} from 'react-aria-components'

function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return <BreadcrumbsPrimitive {...props} className={cn('flex gap-1', props.className)} />
}

function Breadcrumb(props: BreadcrumbProps & LinkProps) {
  return (
    <BreadcrumbPrimitive {...props} className={cn('flex items-center gap-1', props.className)}>
      <Link href={props.href} {...props} />
      {props.href && <IconChevronRight className="size-4 shrink-0 text-muted-fg" />}
    </BreadcrumbPrimitive>
  )
}

export { Breadcrumb, Breadcrumbs }
