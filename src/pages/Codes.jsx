/**
 * Author: Ria Gino
 * GitHub: https://github.com/astrobunnydev
 */

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      "Every project starts with understanding your business, not just your website. We talk through your goals, your customers, and where things stand today, so any recommendation I make is grounded in what you actually need.",
  },
  {
    number: '02',
    title: 'Technical Audit',
    description:
      "I review your site's performance, technical SEO, and structure to find out what's actually holding it back. Nine years of doing this means I can tell the difference between what looks broken and what's actually costing you.",
  },
  {
    number: '03',
    title: 'Scope & Estimate',
    description:
      "You'll get a clear, itemized plan covering the work, the timeline, and the cost, laid out so you know exactly what you're saying yes to before anything starts.",
  },
  {
    number: '04',
    title: 'Build & Launch',
    description:
      "From there, I build, test, and ship on WordPress or Shopify, with regular check-ins along the way so you're never left guessing where things stand.",
  },
]

const WORK = [
  {
    name: 'P.M Port Melbourne',
    meta: 'Luxury apartment leasing · Melbourne',
    tags: ['Built from scratch', 'WordPress', 'Elementor', 'Astra'],
    url: 'https://pmportmelbourne.com.au/',
    image: '/pmportmelbourne.jpg',
  },
  {
    name: 'American Family Care',
    meta: 'Urgent care clinic locator · 400+ US locations',
    tags: ['Built from scratch', 'WordPress', 'Elementor', 'Astra'],
    url: 'https://www.afcurgentcare.com/',
    image: '/afc.jpg',
  },
  {
    name: 'The Alpine Club',
    meta: 'Private mountain club membership · Telluride',
    tags: ['Maintenance', 'WordPress', 'ACF', 'Custom Theme'],
    url: 'https://thealpineclub.com/',
    image: '/alpine.jpg',
  },
  {
    name: 'Ramsay Postgraduate Scholarship',
    meta: 'Postgraduate scholarship program · Australia',
    tags: ['Built from scratch', 'WordPress', 'ACF', 'Elementor', 'Astra'],
    url: 'https://ramsaypostgradscholarship.com/',
    image: '/ramsay.jpg',
  },
]

function Codes() {
  return (
    <section className="page page--codes">
      <header className="page__header">
        <h1 className="page__title">codes.</h1>
        <p className="page__intro">
          freelance full-stack web developer. every project starts with a
          real look at what you actually need.
        </p>
      </header>

      <div className="process">
        <h2 className="process__heading">How I Work</h2>
        <p className="process__subheading">
          From first call to launch, here's what working together looks
          like.
        </p>

        <ol className="process__grid">
          {STEPS.map((step) => (
            <li className="process__card" key={step.number}>
              <span className="process__number">{step.number}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="work">
        <h2 className="work__heading">Selected Work</h2>
        <p className="process__subheading">
          a few sites I've built, rebuilt, and kept alive.
        </p>

        <ul className="work__grid">
          {WORK.map((item) => (
            <li key={item.name}>
              <a
                className="work__card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="work__card-preview"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-hidden="true"
                />
                <div className="work__card-scrim" aria-hidden="true" />
                <span className="work__card-arrow" aria-hidden="true">
                  ↗
                </span>

                <div className="work__card-content">
                  <h3 className="work__card-title">{item.name}</h3>
                  <p className="work__card-meta">{item.meta}</p>
                  <ul className="work__card-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Codes
