import styles from "./styles.module.scss";

export default function HeaderUser({ data }) {
  return (
    <div className={styles["header-user"]}>
      <div className={styles["header-user-image"]}>
        <img src={data.images[0].url} />
      </div>
      <span className={styles["header-user-name"]}>{data.display_name}</span>
    </div>
  );
}
