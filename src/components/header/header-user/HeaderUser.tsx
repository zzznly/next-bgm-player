import styles from "./styles.module.scss";
import { SpotifyUserInfo } from "../Header";
import SvgIcon from "@/components/svgIcon/SvgIcon";

export default function HeaderUser({ userInfo }: { userInfo: any }) {
  return (
    <div className={styles["header-user"]}>
      <div className={styles["header-user-image"]}>
        {/* <SvgIcon name="artists" width={24} height={24} /> */}
      </div>
      <span className={styles["header-user-name"]}>
        {userInfo.display_name}
      </span>
    </div>
  );
}
