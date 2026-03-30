import Link from './link'
import MobileNav from './mobile-nav'
import SearchButton from './search-button'
import ThemeSwitch from './theme-switch'
import headerNavLinks from '@/data/header-nav-links'
import siteMetadata from '@/data/site-metadata'

const Header = () => {
  return (
    <header className="mb-6 flex items-center justify-between border-b-2 border-primary-500 py-6 dark:border-primary-400 md:py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="h-6 text-2xl font-semibold text-primary-500 dark:text-primary-400 sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium lowercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
