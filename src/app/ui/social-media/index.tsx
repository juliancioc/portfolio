import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./social-media.module.css";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      <Link
        href="https://www.linkedin.com/in/julianciocarvalho/"
        target="_blank"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://github.com/juliancioc" target="_blank">
        <FaGithub size={24} />
      </Link>
    </div>
  );
}
