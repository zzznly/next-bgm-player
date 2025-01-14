import styles from "./styles.module.scss";
import Header from "@/components/header/Header";
import PlayerPanel from "@/components/player-panel/PlayerPanel";
import Sidebar from "@/components/sidebar/Sidebar";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx("layout", "layout-row")}>
      <Sidebar />
      <div className={styles["content"]}>
        <Header />
        <div className={styles["body"]}>
          <div className={styles["page"]}>{children}</div>
          <PlayerPanel />
        </div>
      </div>
    </div>
  );
}
