"use client";
import styles from "./styles.module.scss";

export default function SearchLayout({
  children,
  searchMain,
  searchResult,
}: {
  children: React.ReactNode;
  searchMain: React.ReactNode;
  searchResult: React.ReactNode;
}) {
  return (
    <div className={styles["search-page"]}>
      <h2 className={styles["search-page-title"]}>Search</h2>
      <div className={styles["search-page-content"]}>
        {children}
        {searchMain}
        {searchResult}
      </div>
    </div>
  );
}
