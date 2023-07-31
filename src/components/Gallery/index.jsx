import React from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import Cards from "./Cards";
import pics from "./Cards/pics.json";

export default function Gallery() {
  const [items, setItems] = React.useState(pics);

  const tags = [...new Set(pics.map((item) => item.tag))];

  const filterByTag = (tag) => {
    const newItems = pics.filter((item) => item.tag === tag);
    setItems(newItems);
  };

  return (
    <section className={styles.galeria}>
      <h2>Browser through the gallery</h2>
      <div>
        <Tags tags={tags} filterPics={filterByTag} setItems={setItems}/>
      </div>
      <Cards styles={styles} pics={items} />
    </section>
  );
}
