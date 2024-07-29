import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Docs() {
  return (
    <>
      <main className="relative mt-16 sm:mt-20">
        <Image
          src={require('@/img/showcase/beams@75.jpg')}
          alt=""
          className="hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none"
          priority
          unoptimized
        />
        <Image
          src={require('@/img/showcase/beams-index-dark@75.jpg')}
          alt=""
          className="hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none"
          priority
          unoptimized
        />
        <div className="relative max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 sm:text-center">
          <h1 className="text-sm font-semibold leading-6 text-sky-500">Showcase</h1>
          <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
            You can build anything with Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Well not quite <em>anything</em>, like you can't build a spaceship with it. But you can
            definitely build the website for the spaceship —{' '}
            <Link
              href="/showcase/nasa"
              className="font-semibold text-gray-900 border-b border-sky-300 hover:border-b-2 dark:text-white dark:border-sky-400"
            >
              NASA did
            </Link>
            .
          </p>
        </div>
        <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          {[
            {
              title: 'Discord',
              href: '/discord',
              description:
                'Join over 10,000 members on the Discord group to chat about Tailwind and other related topics.',

              className:
                'ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20',
            },
            {
              title: 'GitHub Discussions',
              href: 'https://github.com/tailwindlabs/tailwindcss/discussions',
              description:
                'Have an issue with your project? Connect with other members of the Tailwind community to get some assistance.',

              className:
                'ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20',
            },
          ].map(({ title, href, description, icon, className }) => (
            <li key={title} className="relative flex flex-row-reverse">
              <div className="flex-auto ml-6 peer group">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                  <a
                    href={href}
                    className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                  >
                    {title}
                  </a>
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              </div>
              <div className="absolute opacity-0 -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 peer-hover:opacity-100 sm:-inset-4" />
            </li>
          ))}
        </ul>
      </main>
      <Footer className="mt-32" />
    </>
  )
}

Docs.layoutProps = {
  meta: {
    title: 'Example Showcase',
    description:
      'Beautiful websites built with Tailwind CSS, including marketing sites, SaaS applications, ecommerce stores, and more.',
    ogImage: require('@/img/showcase/og.jpg'),
  },
}
