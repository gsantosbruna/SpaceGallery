import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Popular from "components/Popular";
import banner from "./banner.png";
import styles from "./InitialPage.module.scss";

export default function InitialPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>The most complete gallery of the space</h1>
            <img src={banner} alt="Earth seen from the space" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Gallery />
          <Popular />
        </div>
      </main>
    </>
  );
}
