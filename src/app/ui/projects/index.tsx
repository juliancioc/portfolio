import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

import projects from "@/mock/projects.json";

export default function Projects() {
  return (
    <div className={styles.container} id="projects">
      <h1>Projetos</h1>
      <div className={styles.wrapper}>
        {projects.map((project, index) => (
          <Link href={project.url} target="_blank" key={index}>
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
