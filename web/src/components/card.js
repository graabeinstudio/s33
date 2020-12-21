import React, {useState} from 'react'

import styles from './card.module.css'

function Card (props) {
  const [show, setShow] = useState(0)

  return (
    <div className={styles.card} onClick={() => setShow(show === 0 ? true : !show)}>
      <div className={`${styles.side} ${styles.front} ${!show && styles.showFront}`}>
        <div className={styles.content}>
          <h2>{props.titleFront}</h2>
        </div>
      </div>
      <div className={`${styles.side} ${styles.back} ${show && styles.showBack}`}>
        <div className={styles.content}>
          <h2>{props.titleBack}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
