import { Logo } from '@/components/Logo'
import { documentationNav } from '@/navs/documentation'
import Link from 'next/link'

const footerNav = [
  {
    Customization: documentationNav['Customization'],
    Community: [
      { title: 'GitHub', href: 'https://github.com/tailwindlabs/tailwindcss' },
      { title: 'Discord', href: '/discord' },
      { title: 'Twitter', href: 'https://twitter.com/tailwindcss' },
      { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="pb-16 text-sm leading-6">
      <div className="px-4 mx-auto divide-y max-w-7xl divide-slate-200 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex">
          {footerNav.map((sections) => (
            <div
              key={Object.keys(sections).join(',')}
              className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"
            >
              {Object.entries(sections).map(([title, items]) => (
                <div key={title} className="lg:flex-none lg:w-1/2">
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-10 mt-16">
          <Logo className="w-auto h-6" />
        </div>
      </div>
    </footer>
  )
}
