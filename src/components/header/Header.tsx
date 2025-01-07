import styles from "./styles.module.scss";
import HeaderSearch from "./header-search/HeaderSearch";
import HeaderUser from "./header-user/HeaderUser";
import Link from "next/link";
import { queryOptions } from "@/service/user/queries";
import { getDehydratedQuery } from "@/utils/react-query";

export default async function Header() {
  const { queryKey, queryFn } = queryOptions.me();
  const query = await getDehydratedQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className={styles["header"]}>
      <HeaderSearch />
      {query?.state?.data?.display_name ? (
        <HeaderUser userInfo={query?.state?.data} />
      ) : (
        <Link href="/api/auth/login" className={styles["header-login"]}>
          Login with Spotify
        </Link>
      )}
    </div>
  );
}
