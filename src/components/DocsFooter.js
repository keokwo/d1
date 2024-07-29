import clsx from 'clsx'
import Link from 'next/link'

export function DocsFooter({ children, previous, next }) {
  return (
    <footer className={clsx('text-sm leading-6', previous || next ? 'mt-12' : 'mt-16')}>
      {(previous || next) && (
        <div className="flex items-center mb-10 font-semibold text-slate-700 dark:text-slate-200">
          {previous && (
            <Link
              href={previous.href}
              className="flex items-center group hover:text-slate-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 3 6"
                className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {previous.shortTitle || previous.title}
            </Link>
          )}
          {next && (
            <Link
              href={next.href}
              className="flex items-center ml-auto group hover:text-slate-900 dark:hover:text-white"
            >
              {next.shortTitle || next.title}
              <svg
                viewBox="0 0 3 6"
                className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      )}
      <div className="justify-between pt-10 border-t pb-28 border-slate-200 sm:flex text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright &copy; {new Date().getFullYear()} Neoartd.</p>
          {/* <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
            <Link href="/brand" className="hover:text-slate-900 dark:hover:text-slate-400">
              Trademark Policy
            </Link>
          </p> */}
        </div>
      </div>
    </footer>
  )
}
