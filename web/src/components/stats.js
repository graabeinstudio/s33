import React from "react";
import { format } from "date-fns";
import nb from "date-fns/locale/nb";
import styles from "./stats.module.css";

function Stats({ batches }) {
  const meanAlc = (batches.reduce((sum, batch) => sum + batch.alcohol, 0) / batches.length).toFixed(
    1
  );
  const maxBatch = batches.reduce((max, batch) => Math.max(max, batch.number), 0);
  const maxAlc = batches.reduce(
    (max, batch) => {
      if (max.alcohol > batch.alcohol) {
        return max;
      }
      return batch;
    },
    {
      alcohol: 0
    }
  );
  const minAlc = batches.reduce(
    (min, batch) => {
      if (min.alcohol < batch.alcohol) {
        return min;
      }
      return batch;
    },
    {
      alcohol: 100
    }
  );
  const distinctTypes = Object.values(
    batches.reduce((types, batch) => {
      batch.type.forEach(({ name }) => {
        types[name] = { name, num: ((types[name] || {}).num || 0) + 1 };
      });
      return types;
    }, {})
  ).sort(function compare(a, b) {
    if (a.num < b.num) {
      return 1;
    }
    if (a.num > b.num) {
      return -1;
    }
    return 0;
  });

  return (
    <div className={styles.grid}>
      <section className={styles.box}>
        <p>
          Vi brygget vår første batch i{" "}
          <strong>
            {format(new Date(batches[batches.length - 1].brewedAt), "MMMM YYYY", { locale: nb })}
          </strong>
          . Siden da har det blitt totalt <strong>{maxBatch * 20}</strong> liter øl fordelt på{" "}
          <strong>{maxBatch}</strong> brygg.
        </p>
      </section>
      <section className={styles.box}>
        <p>
          <strong>Alkohol</strong>
        </p>
        <p>
          Gjennomsnitt: <strong>{meanAlc}%</strong>
        </p>
        <p>
          Sterkeste øl:{" "}
          <strong>
            {maxAlc.name} ({maxAlc.alcohol}%)
          </strong>
        </p>
        <p>
          Svakeste øl:{" "}
          <strong>
            {minAlc.name} ({minAlc.alcohol}%)
          </strong>
        </p>
      </section>
      <section className={styles.box}>
        <p>
          Brygget <strong>{distinctTypes.length}</strong> forskjellige typer øl. Topp 3:
        </p>
        <ol>
          <li>
            <strong>
              {distinctTypes[0].name} ({distinctTypes[0].num})
            </strong>
          </li>
          <li>
            <strong>
              {distinctTypes[1].name} ({distinctTypes[1].num})
            </strong>
          </li>
          <li>
            <strong>
              {distinctTypes[2].name} ({distinctTypes[2].num})
            </strong>
          </li>
        </ol>
      </section>
    </div>
  );
}

Stats.defaultProps = {
  batches: []
};

export default Stats;
