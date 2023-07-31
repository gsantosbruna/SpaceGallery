import React from "react";
import styles from "./Tags.module.scss";
import pics from "../Gallery/Cards/pics.json";

export default function Tags({ tags, filterPics, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filter by tag:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPics(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItems(pics)}>All</li>
      </ul>
    </div>
  );
}
