import {Link} from 'gatsby'
import React from 'react'

import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <div className={styles.branding}>
    <Link to='/'>{siteTitle}</Link>
  </div>
)

export default Header
