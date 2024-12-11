import styles from "./styles.module.scss";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <div className={`${styles["layout"]} ${styles["layout-row"]}`}>
        <Sidebar />
        <div className={styles["content"]}>
            <Header />
            <div className={styles["page"]}>
                {children}
            </div>
        </div>
        {/* <Player /> */}
    </div>
}