import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './batch-preview.module.css'

function BatchPreview (props) {
  return (
    <Link className={styles.root} to={`/batch/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.label &&
          props.label.asset &&
          (props.lazyload ? (
            <img
              className='lazyload blur'
              data-src={imageUrlFor(buildImageObj(props.label))
                .width(600)
                .url()}
              alt={props.label.alt}
              data-lazy='laxy'
            />
          ) : (
            <img
              className='blur'
              src={imageUrlFor(buildImageObj(props.label))
                .width(600)
                .url()}
              alt={props.label.alt}
            />
          ))}
      </div>
    </Link>
  )
}

export default BatchPreview
