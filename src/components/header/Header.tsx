import styles from "./styles.module.scss";
import HeaderSearch from "./header-search/HeaderSearch";
import HeaderUser from "./header-user/HeaderUser";

export default function Header() {
    return <div className={styles["header"]}>
        <HeaderSearch />
        <HeaderUser />
    </div>;
}