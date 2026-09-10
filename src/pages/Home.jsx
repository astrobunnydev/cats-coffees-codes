/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { useEffect, useState } from 'react'

const TITLE = '</ cats. coffees. codes. >'
const TYPE_INTERVAL_MS = 45

const SKILLS = [
  'JavaScript',
  'PHP',
  'WordPress',
  'Elementor',
  'Astra Theme',
  'ACF',
  'CPT',
  'Shopify',
  'Zapier',
  'Google Tag Manager',
  'GA4',
  'Git',
  'REST APIs',
  'CSS',
  'Wix',
  'BigCommerce',
  'Squarespace',
  'HubSpot',
  'WooCommerce',
  'Core Web Vitals',
  'Google Merchant Center',
  'Google Search Console',
  'Technical SEO',
]

function Home() {
  const [typedLength, setTypedLength] = useState(0)
  const [showCaret, setShowCaret] = useState(false)
  const [logoStamped, setLogoStamped] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setTypedLength(TITLE.length)
      setLogoStamped(true)
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
        setTimeout(() => setLogoStamped(true), 250)
      }
    }, TYPE_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      <section className="site-hero">
        <div className="site-hero__brand">
          <img
            className={`site-hero__logo site-hero__logo--coffee${logoStamped ? ' is-stamped' : ''}`}
            src="/logo-coffee-transparent.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className={`site-hero__logo site-hero__logo--red${logoStamped ? ' is-stamped' : ''}`}
            src="/logo-red-transparent.png"
            alt=""
            aria-hidden="true"
          />

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

      <section className="skills-marquee" aria-label="Skills and tools">
        <div className="skills-marquee__bar">
          <div className="skills-marquee__track">
            <ul className="skills-marquee__list">
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <ul className="skills-marquee__list" aria-hidden="true">
              {SKILLS.map((skill) => (
                <li key={`${skill}-dup`}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
