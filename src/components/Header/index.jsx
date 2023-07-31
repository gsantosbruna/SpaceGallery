import logo from "./logo.png";
import search from "./search.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="logo" />
      <div className={styles.cabecalho__container}>
        <input
          type="text"
          placeholder="Search"
          className={styles.cabecalho__input}
        />
        <img src={search} alt="search" />
      </div>
    </header>
  );
}
