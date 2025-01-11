import styles from "./styles.module.scss";
import HeaderSearch from "./header-search/HeaderSearch";
import HeaderUser from "./header-user/HeaderUser";
import Link from "next/link";
import { queryOptions } from "@/service/user/queries";
import { getDehydratedQuery, Hydrate } from "@/utils/react-query";
import UserService from "@/service/user/UserService";

export default async function Header() {
  const userInfo = await UserService.getUserInfo();

  return (
    <div className={styles["header"]}>
      <HeaderSearch />
      {userInfo?.display_name ? (
        <HeaderUser userInfo={userInfo} />
      ) : (
        <Link href="/api/auth/login" className={styles["header-login"]}>
          Login with Spotify
        </Link>
      )}
    </div>
  );
}
