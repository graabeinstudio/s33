import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './batch-preview.module.css'

function BatchPreview (props) {
  return (
    <Link className={styles.root} to={`/batch/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.label && props.label.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.label))
              .width(600)
              .url()}
            alt={props.label.alt}
          />
        )}
      </div>
    </Link>
  )
}

export default BatchPreview
