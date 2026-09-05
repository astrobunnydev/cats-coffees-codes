/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { useDocumentMeta } from '../hooks/useDocumentMeta.js'

function Cats() {
  useDocumentMeta(
    'cats. — cats. coffees. codes.',
    'Cat photos coming soon — part of cats. coffees. codes., the personal site of Ria Gino.'
  )

  return (
    <section className="page page--placeholder">
      <h1 className="page__title">cats.</h1>
      <p className="page__intro">coming soon: cat photos incoming.</p>
    </section>
  )
}

export default Cats
