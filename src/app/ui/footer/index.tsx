import SocialMedia from "../social-media";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Juliancio Carvalho</h3>
        <SocialMedia />
      </div>
    </div>
  );
}
