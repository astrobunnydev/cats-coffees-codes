/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

function Cats() {
  return (
    <section className="page page--cats">
      <header className="page__header">
        <h1 className="page__title">cats.</h1>
        <p className="page__intro">
          cat photos, personal updates, and whatever's currently stuck in my
          head.
        </p>
      </header>

      <div className="currently">
        <h2 className="currently__heading">currently.</h2>
        <p className="process__subheading">
          little updates from off-screen.
        </p>

        <ul className="currently__grid">
          <li className="currently__card">
            <span className="currently__label">[ nails this month ]</span>
            <a
              className="currently__nails"
              href="https://www.instagram.com/clawsbytenshi_/reel/DbBFx4Nzg-P/?ref=catscoffeescodes"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/nails-this-month.jpg"
                alt="This month's manicure: long matte stiletto nails in a dark brown-to-black ombré."
              />
            </a>
            <p className="currently__detail">
              vampy black-to-brown ombré, matte stiletto.
            </p>
            <p className="currently__detail currently__detail--muted">
              sep 2026 <span aria-hidden="true">♡</span>
            </p>
            <p className="currently__detail currently__credit">
              nails by{' '}
              <a
                href="https://www.instagram.com/clawsbytenshi_/reel/DbBFx4Nzg-P/?ref=catscoffeescodes"
                target="_blank"
                rel="noopener"
              >
                @clawsbytenshi
              </a>
            </p>
          </li>

          <li className="currently__card">
            <span className="currently__label">[ album on repeat ]</span>
            <div className="song-embed">
              <iframe
                src="https://open.spotify.com/embed/album/2yDFVH9CeOHt0sc9eI0aBs?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify player: PRIMA by Adéla"
              />
            </div>
          </li>
        </ul>
      </div>

      <section className="cat-scrapbook">
        <figure className="polaroid polaroid--1 taped">
          <div className="photo">
            <span className="photo__placeholder" aria-hidden="true">
              😴
            </span>
          </div>
          <figcaption>
            mood: this. <span aria-hidden="true">♡</span>
          </figcaption>
        </figure>

        <div className="scrap-note note--1">
          same little weirdo,
          <br />
          different day. <span aria-hidden="true">✦</span>
        </div>
      </section>

      <p className="page__intro currently__more">
        more cat photos coming soon <span aria-hidden="true">↓</span>
      </p>
    </section>
  )
}

export default Cats
