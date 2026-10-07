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
          cat photos, personal updates, and whatever my AuDHD decided matters
          today.
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
              deep matte black fading into dusty rose with a smoky fade.
            </p>
            <p className="currently__detail currently__detail--muted">
              july 2026 <span aria-hidden="true">♡</span>
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
            <span className="currently__label">[ playlist on repeat ]</span>
            <div className="song-embed">
              <iframe
                src="https://open.spotify.com/embed/playlist/3HvgaZeBWbr7UjFeicPFRI?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify playlist: EPIC: The Musical (All songs in order)"
              />
            </div>
          </li>
        </ul>
      </div>

      <section className="cat-scrapbook">
        <figure className="polaroid polaroid--1 taped">
          <div className="photo">
            <img
              src="/ashe-yuki-polaroid.jpg"
              alt="Two cats lying side by side on a white shelf, a fluffy silver cat on the left and a brown-and-white cat with blue eyes on the right, both looking at the camera."
            />
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
        the chaos continues... <span aria-hidden="true">↓</span>
      </p>
    </section>
  )
}

export default Cats
