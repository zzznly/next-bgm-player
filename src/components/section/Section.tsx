import styles from "./styles.module.scss";

export default function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className={styles["section"]}>
      <ul className={styles["section-wrap"]}>
        <div className={styles["section-head"]}>
          <h2 className={styles["section-title"]}>{title}</h2>
        </div>
        <div className={styles["section-content"]}>{children}</div>
      </ul>
    </div>
  );
}
