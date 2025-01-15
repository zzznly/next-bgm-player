import styles from "./styles.module.scss";
import TrueTonesLogo from "@/svg/TrueTonesLogo";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles["login"]}>
      <div className={styles["login-head"]}>
        <TrueTonesLogo width={220} height={48} />
        <div className={styles["login-description"]}>
          Web Music Player with React.js
        </div>
      </div>
      <div className={styles["login-content"]}>
        <Link className={styles["login-button"]} href="/api/auth/login">
          Login with Spotify 🎧
        </Link>
      </div>
    </div>
  );
}
