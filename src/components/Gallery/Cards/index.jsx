import React from "react";
import open from "./open.png";
import favorite from "./favorito.png";

export default function Cards({ styles, pics}) {
  return (
    <ul className={styles.galeria__cards}>
      {pics.map((pic) => {
        return (
          <li key={pic.id} className={styles.galeria__card}>
            <img
              src={pic.imagem}
              alt={pic.titulo}
              className={styles.galeria__imagem}
            />
            <p className={styles.galeria__descricao}>{pic.titulo}</p>
            <div>
              <p>{pic.creditos}</p>
              <span>
                <img src={favorite} alt="like icon" />
                <img src={open} alt="open modal icon" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
