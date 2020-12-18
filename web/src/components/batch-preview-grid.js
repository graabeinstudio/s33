import React from 'react'
import BatchPreview from './batch-preview'

import styles from './batch-preview-grid.module.css'

function BatchPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.name && <h2 className={styles.headline}>{props.name}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node, index) => (
            <li key={node.id}>
              <BatchPreview {...node} lazyload={index > 10} />
            </li>
          ))}
      </ul>
    </div>
  )
}

BatchPreviewGrid.defaultProps = {
  name: '',
  nodes: [],
  browseMoreHref: ''
}

export default BatchPreviewGrid
