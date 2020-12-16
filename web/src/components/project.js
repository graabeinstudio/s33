import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";

import styles from "./project.module.css";

function Project(props) {
  const { _rawBody, name, categories, label, brewedAt } = props;
  return (
    <article className={styles.root}>
      {props.label && label.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(label))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={label.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {brewedAt && (
              <div className={styles.brewedAt}>
                {differenceInDays(new Date(brewedAt), new Date()) > 3
                  ? distanceInWords(new Date(brewedAt), new Date())
                  : format(new Date(brewedAt), "MMMM Do YYYY")}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
