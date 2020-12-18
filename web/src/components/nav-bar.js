import { Link } from "gatsby";
import React from "react";

import styles from "./nav-bar.module.css";

const NavBar = () => (
  <nav className={styles.navBar}>
    <div className={styles.link}>
      <Link to="./">Etiketter</Link>
    </div>
    <div className={styles.link}>
      <Link to="./stats">Statistikk</Link>
    </div>
  </nav>
);

export default NavBar;
