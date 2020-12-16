import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Container from "./container";

import styles from "./batch.module.css";

function Batch(props) {
  const { name, type, label, brewedAt } = props;
  return (
    <article className={styles.root}>
      {props.label && label.asset && (
        <div className={styles.label}>
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
            <h1 className={styles.name}>{name}</h1>
          </div>
          <aside className={styles.metaContent}>
            {brewedAt && (
              <div className={styles.brewedAt}>
                {differenceInDays(new Date(brewedAt), new Date()) > 3
                  ? distanceInWords(new Date(brewedAt), new Date())
                  : format(new Date(brewedAt), "MMMM Do YYYY")}
              </div>
            )}
            {type && type.length > 0 && (
              <div className={styles.typesOfBeer}>
                <h3 className={styles.typesOfBeerHeadline}>Type</h3>
                <ul>
                  {typesOfBeer.map(typeOfBeer => (
                    <li key={typeOfBeer._id}>{typeOfBeer.name}</li>
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

export default Batch;
