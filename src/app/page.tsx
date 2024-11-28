import Header from "@/app/ui/header";
import Hero from "@/app/ui/hero";
import styles from "./home.module.css";
import SocialMedia from "./ui/social-media";
import About from "./ui/about";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <SocialMedia />
        <About />
      </div>
    </>
  );
}
