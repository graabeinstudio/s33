import React from "react";
import Header from "./header";

import "../styles/layout.css";
import styles from "./layout.module.css";
import NavBar from "./nav-bar";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <NavBar />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>© {new Date().getFullYear()}, Gråbein studio</div>
      </div>
    </footer>
  </>
);

export default Layout;
