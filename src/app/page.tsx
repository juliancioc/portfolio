import Header from "@/app/ui/header";
import Hero from "@/app/ui/hero";
import styles from "./home.module.css";
import SocialMedia from "./ui/social-media";
import About from "./ui/about";
import Skills from "./ui/skills";
import Projects from "./ui/projects";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <SocialMedia />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
