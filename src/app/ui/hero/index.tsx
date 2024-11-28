import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1>
        Olá, <br />
        meu nome é <span>Juliancio</span>, <br />
        Desenvolvedor Front-end
      </h1>

      <Image src="/profile.jpeg" alt="profile" width={400} height={400} />
    </div>
  );
}
