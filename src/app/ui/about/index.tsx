import Image from "next/image";

import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <h1>Sobre</h1>
      <div className={styles.wrapper}>
        <Image src="/profile.jpeg" alt="profile" width={300} height={332} />
        <div className={styles.about_me}>
          <h2>Um pouco sobre mim</h2>
          <p>
            Olá, meu nome é Juliancio, tenho 10 anos de experiência na área de
            TI. Iniciei minha carreira como Analista de Suporte Técnico e, em
            2018, decidi migrar para a área de Programação, uma transição que
            trouxe novos desafios e oportunidades de crescimento.
          </p>
        </div>
      </div>
    </div>
  );
}
