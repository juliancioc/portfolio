import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.container} id="skills">
      <h1>Projetos</h1>
      <div className={styles.wrapper}>
        <Link href="https://elegant-kepler-66d972.netlify.app/" target="_blank">
          <Image
            src="/projects/won-games.png"
            alt="won games"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://keen-noether-ac5b35.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/dt-money.png"
            alt="Finance app"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://charming-kataifi-101693.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/invoice-app.png"
            alt="Invoice app"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://dazzling-borg-bbbc46.netlify.app/cards"
          target="_blank"
        >
          <Image
            src="/projects/pokemon.png"
            alt="pokemon"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://incomparable-cat-034fc8.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/pomodoro.png"
            alt="pomodoro app"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://cozy-concha-05b60e.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/lp-1.png"
            alt="landing page"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://effervescent-pavlova-d1c649.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/todo-app.png"
            alt="to do app"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://relaxed-youtiao-6fe424.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/lp-2.png"
            alt="landing page"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://sprightly-cactus-ddee75.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/card.png"
            alt="card"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://fluffy-genie-0919b5.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/review-page.png"
            alt="review page"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://adorable-bunny-60f920.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/santa-fe-cell.png"
            alt="Santa fe cell"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href="https://startling-dieffenbachia-52e184.netlify.app/"
          target="_blank"
        >
          <Image
            src="/projects/product-page.png"
            alt="product page"
            width={300}
            height={200}
          />
        </Link>
        <Link href="https://calcimport.netlify.app/" target="_blank">
          <Image
            src="/projects/calc-import.png"
            alt="calc import"
            width={300}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
}
