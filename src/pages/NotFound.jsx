/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page page--not-found">
      <p className="not-found__code">
        404<span className="not-found__caret" aria-hidden="true">&gt;_</span>
      </p>

      <h1 className="not-found__title">this page is missing.</h1>
      <p className="not-found__intro">the cat is helping look for it.</p>

      <div
        className="not-found__sprite"
        role="img"
        aria-label="An illustrated cat pacing around, looking lost."
      >
        <img className="not-found__frame" src="/lost-cat-1.png" alt="" aria-hidden="true" />
        <img className="not-found__frame" src="/lost-cat-2.png" alt="" aria-hidden="true" />
        <img className="not-found__frame" src="/lost-cat-3.png" alt="" aria-hidden="true" />
        <img className="not-found__frame" src="/lost-cat-4.png" alt="" aria-hidden="true" />
      </div>

      <Link to="/" className="cta__button">
        [ take me home ] <span className="cta__arrow" aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}

export default NotFound
