import { FaHtml5, FaCss3Alt, FaReact, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiCypress,
  SiWebpack,
  SiAwselasticloadbalancing,
  SiTextpattern,
} from "react-icons/si";
import { FaGitAlt, FaNodeJs } from "react-icons/fa6";
import { GiOctopus } from "react-icons/gi";

import styles from "./skills.module.css";

export default function Skills() {
  return (
    <div className={styles.container} id="skills">
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        <div className={styles.skill}>
          <FaHtml5 size={28} color="var(--secondary-color)" />
          <p>HTML5</p>
        </div>
        <div className={styles.skill}>
          <FaCss3Alt size={28} color="var(--secondary-color)" />
          <p>CSS3</p>
        </div>
        <div className={styles.skill}>
          <IoLogoJavascript size={28} color="var(--secondary-color)" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <SiTypescript size={28} color="var(--secondary-color)" />
          <p>TypeScript</p>
        </div>
        <div className={styles.skill}>
          <SiWebpack size={28} color="var(--secondary-color)" />
          <p>Webpack</p>
        </div>
        <div className={styles.skill}>
          <FaReact size={28} color="var(--secondary-color)" />
          <p>React.js</p>
        </div>
        <div className={styles.skill}>
          <SiNextdotjs size={28} color="var(--secondary-color)" />
          <p>Next.js</p>
        </div>
        <div className={styles.skill}>
          <FaVuejs size={28} color="var(--secondary-color)" />
          <p>Vue.js</p>
        </div>
        <div className={styles.skill}>
          <SiRedux size={28} color="var(--secondary-color)" />
          <p>Redux</p>
        </div>
        <div className={styles.skill}>
          <FaNodeJs size={28} color="var(--secondary-color)" />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <FaGitAlt size={28} color="var(--secondary-color)" />
          <p>Git</p>
        </div>
        <div className={styles.skill}>
          <SiJest size={28} color="var(--secondary-color)" />
          <p>Jest</p>
        </div>
        <div className={styles.skill}>
          <GiOctopus size={28} color="var(--secondary-color)" />
          <p>Testing Library</p>
        </div>
        <div className={styles.skill}>
          <SiCypress size={28} color="var(--secondary-color)" />
          <p>Cypress</p>
        </div>
        <div className={styles.skill}>
          <SiAwselasticloadbalancing size={28} color="var(--secondary-color)" />
          <p>Micro-frontend</p>
        </div>
        <div className={styles.skill}>
          <SiTextpattern size={28} color="var(--secondary-color)" />
          <p>Test Driven Development (TDD)</p>
        </div>
      </div>
    </div>
  );
}
