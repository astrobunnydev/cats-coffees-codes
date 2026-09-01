/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { useState } from 'react'

const SERVICES = [
  {
    label: 'Build & Rebuild',
    description:
      "New builds, redesigns, and sites that have outgrown their current setup.",
  },
  {
    label: 'Technical Audits',
    description:
      "A deep look at how the site is built, how its parts work together, where the technical risks are, and what's likely to break next.",
  },
  {
    label: 'Performance Optimization',
    description:
      "Finding bottlenecks, unnecessary weight, and technical issues that are getting in the site's way.",
  },
  {
    label: 'Maintenance & Fixes',
    description:
      "Ongoing updates, bug fixes, and keeping an existing site healthy long after launch.",
  },
  {
    label: 'Migrations',
    description:
      "Moving a site to a new host, theme, or platform without losing what already works.",
  },
  {
    label: 'Integrations',
    description:
      "Connecting your site with CRMs, APIs, forms, tracking platforms, booking systems, payment providers, and other third-party tools.",
  },
  {
    label: 'Tracking & Analytics',
    description:
      "Setting up and troubleshooting website tracking so the data being collected actually reflects what users are doing.",
  },
  {
    label: 'AI & Automation',
    description:
      "Using AI-assisted development, custom dashboards, and lightweight automations to reduce repetitive work, streamline workflows, and bring data, tools, and processes into one place.",
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      "We talk through what's working, what isn't, what you want to change, and where you want the site to go. The goal is to understand the problem before any technical work starts.",
  },
  {
    number: '02',
    title: 'Technical Audit',
    description:
      "From there, I dig deeper into what the project actually needs, how the site should be built, and how its different parts should work together, to find the best approach for implementing everything properly. For existing sites, that also means looking at the current setup: what should stay, what should change, and what could cause problems later.",
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
      "Once the scope is agreed, I build, test, and launch, with regular check-ins along the way so you always know what's done, what's next, and where things stand.",
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
    tags: ['Maintenance', 'WordPress', 'ACF', 'CPT', 'Custom Theme'],
    url: 'https://thealpineclub.com/',
    image: '/alpine.jpg',
  },
  {
    name: 'Ramsay Postgraduate Scholarship',
    meta: 'Postgraduate scholarship program · Australia',
    tags: ['Built from scratch', 'WordPress', 'ACF', 'CPT', 'Elementor', 'Astra'],
    url: 'https://ramsaypostgradscholarship.com/',
    image: '/ramsay.jpg',
  },
]

function Codes() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="page page--codes">
      <header className="page__header">
        <h1 className="page__title">codes.</h1>
        <p className="page__intro">
          freelance full-stack web developer. every project starts with a
          real look at what you actually need.
        </p>
      </header>

      <div className="what">
        <h2 className="what__heading">What I do</h2>
        <p className="process__subheading">
          10+ years in web development. still curious, still debugging.
        </p>

        <ul className="what__pills">
          {SERVICES.map((service, index) => (
            <li key={service.label}>
              <button
                type="button"
                className={`what__pill${
                  index === activeService ? ' is-active' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                [ {service.label} ]
              </button>
            </li>
          ))}
        </ul>

        <p className="what__description">
          {SERVICES[activeService].description}
        </p>
      </div>

      <div className="process">
        <h2 className="process__heading">How I Work</h2>
        <p className="process__subheading">
          from first call to launch, here's what working together looks
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
          a few sites I've built, rebuilt, and kept evolving.
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

      <div className="cta">
        <h2 className="cta__heading">have something in mind?</h2>
        <p className="cta__subheading">
          tell me what you're building, fixing, or trying to untangle.
        </p>
        <a
          className="cta__button"
          href="https://riagino.info/"
          target="_blank"
          rel="noopener"
        >
          [ get in touch ] <span className="cta__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Codes
