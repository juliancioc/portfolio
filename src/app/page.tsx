import Header from "@/app/ui/header";
import Hero from "@/app/ui/hero";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
      </div>
    </>
  );
}
