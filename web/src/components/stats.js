import React from 'react'
import {format} from 'date-fns'
import nb from 'date-fns/locale/nb'
import styles from './stats.module.css'
import Card from './card'

const Intro = ({batches, maxBatch}) => (
  <section className={styles.intro}>
    <p>
      Vi brygget vår første batch i{' '}
      <strong>
        {format(new Date(batches[batches.length - 1].brewedAt), 'MMMM YYYY', {locale: nb})}
      </strong>
      . Siden da har det blitt totalt <strong>{maxBatch * 20}</strong> liter øl fordelt på{' '}
      <strong>{maxBatch}</strong> brygg.
    </p>
  </section>
)
function Stats ({batches}) {
  const meanAlc = (batches.reduce((sum, batch) => sum + batch.alcohol, 0) / batches.length).toFixed(
    1
  )
  const maxBatch = batches.reduce((max, batch) => Math.max(max, batch.number), 0)
  const maxAlc = batches.reduce(
    (max, batch) => {
      if (max.alcohol > batch.alcohol) {
        return max
      }
      return batch
    },
    {
      alcohol: 0
    }
  )
  const minAlc = batches.reduce(
    (min, batch) => {
      if (min.alcohol < batch.alcohol) {
        return min
      }
      return batch
    },
    {
      alcohol: 100
    }
  )
  const distinctTypes = Object.values(
    batches.reduce((types, batch) => {
      batch.type.forEach(({name}) => {
        types[name] = {name, num: ((types[name] || {}).num || 0) + 1}
      })
      return types
    }, {})
  ).sort(function compare (a, b) {
    if (a.num < b.num) {
      return 1
    }
    if (a.num > b.num) {
      return -1
    }
    return 0
  })

  return (
    <div className={styles.grid}>
      <Intro batches={batches || []} maxBatch={maxBatch} />
      <section className={styles.box}>
        <p className={styles.category}>
          Vi har brygget <strong>{distinctTypes.length}</strong> forskjellige typer øl. Hvilke er de topp 3?
        </p>
        <div className={styles.cardCollection}>
          {distinctTypes.map((batch, index) => (
            <Card
              titleFront={`${index + 1} plass batch`}
              titleBack={batch.name}
              description={batch.num}
            />
          ))}
        </div>
      </section>
      <section className={styles.box}>
        <p className={styles.category}>
          <strong>Neste kategori er alkohol, hva er gjennomsnittlig alkohol %, svakeste og sterkeste ølen?</strong>
        </p>
        <div className={styles.cardCollection}>
          <Card
            titleFront={`Gjennomsnittlig alkohol innhold?`}
            titleBack={`Gjennomsnittlig alkohol innhold?`}
            description={`${meanAlc}%`}
          />
          <Card
            titleFront={`Sterkeste øl?`}
            titleBack={`Sterkeste øl?`}
            description={`${maxAlc.name} (${maxAlc.alcohol}%)`}
          />
          <Card
            titleFront={`Svakeste øl?`}
            titleBack={`Svakeste øl?`}
            description={`${minAlc.name} (${minAlc.alcohol}%)`}
          />
        </div>
      </section>
    </div>
  )
}

Stats.defaultProps = {
  batches: []
}

export default Stats
