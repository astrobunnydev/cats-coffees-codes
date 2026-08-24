/**
 * Author: Ria Gino
 * GitHub: https://github.com/astrobunnydev
 */

import { useEffect, useState } from 'react'
import './App.css'

const TITLE = '</ cats. coffees. codes. >'
const TYPE_INTERVAL_MS = 45

function App() {
  const [typedLength, setTypedLength] = useState(0)
  const [showCaret, setShowCaret] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setTypedLength(TITLE.length)
      return
    }

    setShowCaret(true)

    let charsTyped = 0
    const interval = setInterval(() => {
      charsTyped += 1
      setTypedLength(charsTyped)

      if (charsTyped >= TITLE.length) {
        clearInterval(interval)
        setTimeout(() => setShowCaret(false), 900)
      }
    }, TYPE_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="site">
      <section className="site-hero">
        <div className="site-hero__brand">
          <p className="site-hero__icons" aria-hidden="true">
            🐈 ☕ 💻
          </p>

          <h1 className="site-hero__title" aria-label="cats. coffees. codes.">
            <span aria-hidden="true">
              {TITLE.slice(0, typedLength)}
              {showCaret && <span className="site-hero__caret" />}
            </span>
          </h1>

          <p className="site-hero__intro">
            personal projects, experiments, and web things by{' '}
            <a
              href="https://riagino.info"
              target="_blank"
              rel="noreferrer"
            >
              ria
            </a>.
          </p>

          <p className="site-hero__tagline">
            code, curiosity, and occasional chaos.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <a
          className="site-footer__github"
          href="https://github.com/astrobunnydev"
          target="_blank"
          rel="noreferrer"
          aria-label="Ria Gino on GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="site-footer__github-icon"
          >
            <path
              fill="currentColor"
              d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.63c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z"
            />
          </svg>
        </a>
      </footer>
    </main>
  )
}

export default App