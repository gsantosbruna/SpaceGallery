import home from "../../assets/icons/home-ativo.png";
import mostLiked from "../../assets/icons/mais-curtidas-inativo.png";
import mostViewed from "../../assets/icons/mais-vistas-inativo.png";
import newIcon from "../../assets/icons/novas-inativo.png";
import surpriseMe from "../../assets/icons/surpreenda-me-inativo.png";
import React from "react";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="logo" />
          <a href="/">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostLiked} alt="logo" />
          <a href="/">Most liked</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostViewed} alt="logo" />
          <a href="/">Most viewed</a>
        </li>
        <li className={styles.menu__item}>
          <img src={newIcon} alt="logo" />
          <a href="/">New</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseMe} alt="logo" />
          <a href="/">Surprise me</a>
        </li>
      </ul>
    </nav>
  );
}
