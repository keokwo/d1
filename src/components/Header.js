import { SearchButton } from '@/components/Search'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Dialog, DialogPanel } from '@headlessui/react'
import clsx from 'clsx'
import { MenuIcon, PanelRightClose, VerifiedIcon } from 'lucide-react'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Image from './Image'
import { ThemeSelect, ThemeToggle } from './ThemeToggle'

function Featured() {
  return (
    <a
      href="https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts"
      className="items-center hidden px-3 py-1 ml-3 text-xs font-medium leading-5 rounded-full text-sky-600 dark:text-sky-400 bg-sky-400/10 xl:flex hover:bg-sky-400/20"
    >
      <strong className="font-semibold">Introducing Catalyst</strong>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="ml-2 text-sky-600 dark:text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span className="ml-2">A modern application UI kit for React</span>
      <svg
        width="3"
        height="6"
        className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export function NavPopover({ display = 'md:hidden', className, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Dialog open={isOpen} onClose={setIsOpen} className={clsx('fixed z-50 inset-0', display)}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <DialogPanel className="fixed w-full max-w-xs p-6 text-base font-semibold bg-white rounded-lg shadow-lg top-4 right-4 text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute flex items-center justify-center w-8 h-8 top-5 right-5 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
          </ul>
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-200/10">
            <ThemeSelect />
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/docs" className="hover:text-sky-500 dark:hover:text-sky-400">
          Docs
        </Link>
      </li>
      <li>
        <Link href="/blog" className="hover:text-sky-500 dark:hover:text-sky-400">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/showcase" className="hover:text-sky-500 dark:hover:text-sky-400">
          Showcase
        </Link>
      </li>
    </>
  )
}

export function Header({ hasNav = false, navIsOpen, onNavToggle, title, section }) {
  let [isOpaque, setIsOpaque] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    let offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [isOpaque])

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet={require('@/img/beams/docs@30.avif').default.src} type="image/avif" />
            <img
              src={require('@/img/beams/docs@tinypng.png').default.src}
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet={require('@/img/beams/docs-dark@30.avif').default.src}
              type="image/avif"
            />
            <img
              src={require('@/img/beams/docs-dark@tinypng.png').default.src}
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div
        className={clsx(
          'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]',
          isOpaque
            ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
            : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
        )}
      >
        <div className="mx-auto max-w-8xl">
          <div
            className={clsx(
              'py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10',
              hasNav ? 'mx-4 lg:mx-0' : 'px-4'
            )}
          >
            <div className="relative flex items-center">
              <Link
                href="/"
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                onContextMenu={(e) => {
                  e.preventDefault()
                  Router.push('/brand')
                }}
              >
                <span className="sr-only">Tailwind CSS home page</span>
                <Image
                  src="/images/muqoffin.png"
                  alt="Muhammad Muqoffin Nuha"
                  width={40}
                  height={40}
                  rounded="rounded-full"
                  className="border-2 rotate-3 border-slate-200 dark:border-slate-700 lg:hover:scale-105"
                />
              </Link>
              <div className="flex items-center justify-center gap-3">
                <Link href="/" passHref>
                  <h2 className="text-lg font-medium lg:text-xl text-slate-700 dark:text-slate-200">
                    Muhammad Muqoffin Nuha
                  </h2>
                </Link>
                <Tooltip>
                  <TooltipTrigger aria-label="Verified">
                    <VerifiedIcon size={18} className="text-blue-400" data-aos="flip-right" />
                  </TooltipTrigger>
                  <TooltipContent>Verified</TooltipContent>
                </Tooltip>
              </div>
              <div className="relative items-center hidden ml-auto lg:flex">
                {showMenu && (
                  <nav className="text-sm font-semibold leading-6 border-r text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800">
                    <ul className="flex mr-6 space-x-8">
                      <NavItems />
                    </ul>
                  </nav>
                )}
                <div className="flex items-center pl-6">
                  <button
                    className="flex items-center gap-2 p-2 mr-6 rounded-md backdrop-blur "
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {showMenu ? <PanelRightClose size={18} /> : <MenuIcon size={18} />}
                  </button>
                  <ThemeToggle panelClassName="mt-8" />
                </div>
              </div>
              <SearchButton className="items-center justify-center block w-8 h-8 ml-auto -my-1 lg:ml-6 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5" />
                  <circle cx="11" cy="11" r="6" />
                </svg>
              </SearchButton>
              <NavPopover className="ml-2 -my-1" display="lg:hidden" />
            </div>
          </div>
          {hasNav && (
            <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
              <button
                type="button"
                onClick={() => onNavToggle(!navIsOpen)}
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24">
                  <path
                    d="M5 6h14M5 12h14M5 18h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {title && (
                <ol className="flex min-w-0 ml-4 text-sm leading-6 whitespace-nowrap">
                  {section && (
                    <li className="flex items-center">
                      {section}
                      <svg
                        width="3"
                        height="6"
                        aria-hidden="true"
                        className="mx-3 overflow-visible text-slate-400"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </li>
                  )}
                  <li className="font-semibold truncate text-slate-900 dark:text-slate-200">
                    {title}
                  </li>
                </ol>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
