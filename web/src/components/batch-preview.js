import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './batch-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

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
      <h3 className={cn(responsiveTitle3, styles.name)}>{props.name}</h3>
    </Link>
  )
}

export default BatchPreview
