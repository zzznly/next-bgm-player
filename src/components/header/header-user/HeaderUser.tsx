import styles from "./styles.module.scss";

export default function HeaderUser() {
    // const { data: { display_name } = {} } = useUserInfo();
    
    return (<div className={styles["header-user"]}>
        <div className={styles["header-user-image"]}>
            {/* <img src="" /> */}
        </div>
        <span className={styles["header-user-name"]}>{"displayName"}</span>
    </div>)
}