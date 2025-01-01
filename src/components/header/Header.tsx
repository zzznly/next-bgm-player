import styles from "./styles.module.scss";
import HeaderSearch from "./header-search/HeaderSearch";
import HeaderUser from "./header-user/HeaderUser";
import Link from "next/link";
import { queryOptions } from "@/service/user/queries";
import { getDehydratedQuery } from "@/utils/react-query";

export interface SpotifyUserInfo {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  product: string;
  type: string;
  uri: string;
}

export default async function Header() {
  const { queryKey, queryFn } = queryOptions.me();
  const {
    state: { data: userInfo },
  } = await getDehydratedQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className={styles["header"]}>
      <HeaderSearch />
      {userInfo?.display_name ? (
        <HeaderUser {...{ userInfo }} />
      ) : (
        <Link href="/api/auth/login" className={styles["header-login"]}>
          Login with Spotify
        </Link>
      )}
    </div>
  );
}
