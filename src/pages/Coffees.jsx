/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { useDocumentMeta } from '../hooks/useDocumentMeta.js'

function Coffees() {
  useDocumentMeta(
    'coffees. — cats. coffees. codes.',
    'Travel and photography content coming soon — part of cats. coffees. codes., the personal site of Ria Gino.'
  )

  return (
    <section className="page page--placeholder">
      <h1 className="page__title">coffees.</h1>
      <p className="page__intro">
        coming soon: travel and photography, one cup at a time.
      </p>
    </section>
  )
}

export default Coffees
