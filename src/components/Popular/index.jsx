import React from "react";
import popularPics from "./popular-images.json";
import styles from "./Popular.module.scss";

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Populars</h2>
      <ul className={styles.populares__imagens}>
        {popularPics.map((pic) => {
          return (
            <li key={pic.id}>
              <img src={pic.path} alt={pic.alt} />
            </li>
          );
        })}
      </ul>
      <button>More</button>
    </aside>
  );
}
