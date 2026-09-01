/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { useEffect, useState } from 'react'

const TITLE = '</ cats. coffees. codes. >'
const TYPE_INTERVAL_MS = 45

function Home() {
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
          <a href="https://riagino.info" target="_blank" rel="noopener">
            ria
          </a>
          .
        </p>

        <p className="site-hero__tagline">
          code, curiosity, and occasional chaos.
        </p>
      </div>
    </section>
  )
}

export default Home
