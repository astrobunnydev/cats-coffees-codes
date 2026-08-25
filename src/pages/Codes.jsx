/**
 * Author: Ria Gino
 * GitHub: https://github.com/astrobunnydev
 */

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      "We hop on a call and talk through your business, your goals, and where things stand right now. Just a conversation, not a pitch.",
  },
  {
    number: '02',
    title: 'Technical Audit',
    description:
      "I go through your site: performance, technical SEO, structure, what's working, what's not. Nine years of doing this means the recommendations come from experience, not guesswork.",
  },
  {
    number: '03',
    title: 'Scope & Estimate',
    description:
      "You'll get an itemized breakdown of the work, the timeline, and the cost. Enough detail that you know exactly what you're paying for.",
  },
  {
    number: '04',
    title: 'Build & Launch',
    description:
      "I build, test, and ship on WordPress or Shopify, with regular updates along the way so you're never left wondering what's happening.",
  },
]

const WORK = [
  {
    name: 'P.M Port Melbourne',
    meta: 'Luxury apartment leasing · Melbourne',
    tags: ['WordPress', 'Elementor', 'Astra'],
    url: 'https://pmportmelbourne.com.au/',
  },
  {
    name: 'American Family Care',
    meta: 'Urgent care clinic locator · 400+ US locations',
    tags: ['WordPress', 'Elementor', 'Astra'],
    url: 'https://www.afcurgentcare.com/',
  },
  {
    name: 'The Alpine Club',
    meta: 'Private mountain club membership · Telluride',
    tags: ['WordPress', 'ACF', 'Custom Theme'],
    url: 'https://thealpineclub.com/',
  },
  {
    name: 'Ramsay Postgraduate Scholarship',
    meta: 'Postgraduate scholarship program · Australia',
    tags: ['WordPress', 'ACF', 'Elementor', 'Astra'],
    url: 'https://ramsaypostgradscholarship.com/',
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
            <li className="work__card" key={item.name}>
              <h3 className="work__card-title">{item.name}</h3>
              <p className="work__card-meta">{item.meta}</p>
              <ul className="work__card-tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="work__card-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                visit site ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Codes
