import {format, distanceInWords, differenceInDays} from 'date-fns'
import nb from 'date-fns/locale/nb'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './batch.module.css'

function Batch (props) {
  const {name, label, brewedAt, ibu, alcohol, type} = props
  return (
    <article className={styles.root}>
      {props.label && label.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(label))
              .width(1000)
              .fit('crop')
              .url()}
            alt={label.alt}
          />
        </div>
      )}
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <h1 className={styles.name}>{name}</h1>
          {type && type.map(t => <p>{t.name}</p>)}

          {ibu && <p>IBU: {ibu}</p>}
          <p>Alkohol: {alcohol} %</p>

          {brewedAt && (
            <div className={styles.brewedAt}>
              {differenceInDays(new Date(brewedAt), new Date()) > 3
                ? distanceInWords(new Date(brewedAt), new Date())
                : format(new Date(brewedAt), 'MMMM YYYY', {locale: nb})}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Batch
