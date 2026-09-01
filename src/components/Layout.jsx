/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BRAND = '</ ccc >'

function getInitialTheme() {
  const stored = window.localStorage.getItem('ccc-theme')
  return stored === 'light' || stored === 'dark' ? stored : 'dark'
}

function Layout() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('ccc-theme', theme)
  }, [theme])

  return (
    <div className="site">
      <nav className="site-nav" aria-label="Primary">
        <NavLink
          className="site-nav__brand"
          to="/"
          end
          aria-label="cats. coffees. codes., home"
        >
          {BRAND}
        </NavLink>

        <div className="site-nav__links">
          <NavLink
            className="site-nav__link site-nav__link--cats"
            to="/cats"
          >
            <svg
              className="site-nav__tail"
              viewBox="0 0 24 12"
              aria-hidden="true"
            >
              <path
                d="M22 6c-3-4-6 4-9 0s-6 4-9 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            cats.
          </NavLink>
          <NavLink
            className="site-nav__link site-nav__link--coffees"
            to="/coffees"
          >
            coffees.
            <span className="site-nav__steam" aria-hidden="true">
              <span className="site-nav__steam-wisp" />
              <span className="site-nav__steam-wisp" />
              <span className="site-nav__steam-wisp" />
            </span>
          </NavLink>
          <NavLink
            className="site-nav__link site-nav__link--codes"
            to="/codes"
          >
            codes.
            <span className="site-nav__dev" aria-hidden="true">
              &gt;<span className="site-nav__dev-caret">_</span>
            </span>
          </NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__row">
        <button
          type="button"
          className="theme-toggle"
          role="switch"
          aria-checked={theme === 'light'}
          aria-label="Toggle light or dark theme"
          onClick={() =>
            setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
          }
        >
          <span className="theme-toggle__track">
            <span
              className={`theme-toggle__icon theme-toggle__icon--sun${
                theme === 'light' ? ' is-active' : ''
              }`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
            <span
              className={`theme-toggle__icon theme-toggle__icon--moon${
                theme === 'dark' ? ' is-active' : ''
              }`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
            <span
              className="theme-toggle__knob"
              data-position={theme}
              aria-hidden="true"
            />
          </span>
        </button>

        <div className="site-footer__links">
          <a
            className="site-footer__link"
            href="https://riagino.info"
            target="_blank"
            rel="noopener"
            aria-label="Ria Gino's profile at riagino.info"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="site-footer__icon"
            >
              <path
                fill="currentColor"
                d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
              />
            </svg>
          </a>

          <a
            className="site-footer__link"
            href="https://www.linkedin.com/in/ria-gino/"
            target="_blank"
            rel="noopener"
            aria-label="Ria Gino on LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="site-footer__icon"
            >
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
              />
            </svg>
          </a>

          <a
            className="site-footer__link"
            href="https://github.com/astrobunnydev"
            target="_blank"
            rel="noopener"
            aria-label="Ria Gino on GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="site-footer__icon"
            >
              <path
                fill="currentColor"
                d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.63c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z"
              />
            </svg>
          </a>

          <a
            className="site-footer__link"
            href="/ria-gino-cv.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="View Ria Gino's CV (PDF)"
          >
            <svg
              className="site-footer__icon cv-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5.5 3.5h8.7l4.3 4.3v12.7H5.5z" />
              <path d="M14.2 3.5v4.3h4.3" />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fill="currentColor"
                stroke="none"
                fontSize="6"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
              >
                CV
              </text>
            </svg>
          </a>
        </div>
        </div>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} cats. coffees. codes.
        </p>
      </footer>
    </div>
  )
}

export default Layout
