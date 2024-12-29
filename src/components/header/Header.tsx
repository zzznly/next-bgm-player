import { getCookies } from "cookies-next";
import { cookies } from "next/headers";
import styles from "./styles.module.scss";
import HeaderSearch from "./header-search/HeaderSearch";
import HeaderUser from "./header-user/HeaderUser";
import Link from "next/link";
import { useUserInfo } from "@/service/user/useUserService";
// import UserService from "@/service/user/UserService";

// async function getUserInfo() {
//   try {
//     const res = await UserService.getUserInfo();
//     console.log(12345, res);
//     return res;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default async function Header() {
  const cookie = await getCookies({ cookies });
  console.log("### cookie: ", cookie);

  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: cookie?.access_token
        ? `Bearer ${cookie?.access_token}`
        : undefined,
    },
  });
  const data = await res.json();
  console.log("## userInfo: ", data);

  if (!res.ok) {
    console.error("Failed to fetch user info:", res.status, res.statusText);
  }

  return (
    <div className={styles["header"]}>
      <HeaderSearch />
      {data?.display_name ? (
        <HeaderUser {...{ data }} />
      ) : (
        <Link href="/api/auth/login" className={styles["header-login"]}>
          Login with Spotify
        </Link>
      )}
    </div>
  );
}
