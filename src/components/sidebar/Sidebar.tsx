"use client";

import styles from "./styles.module.scss";
import TrueTonesLogo from "@/svg/TrueTonesLogo";
import SidebarMenuItem from "./sidebar-menu-item/SidebarMenuItem";
import { removeTokenParams } from "@/utils/auth";
import { useRouter } from "next/navigation";

export interface SidebarMenuItemProps {
  label: string;
  icon: { name: string; category?: string };
  iconActive?: { name: string; category?: string };
  path?: string;
  onClick?: () => void;
}

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-logo"]}>
        <TrueTonesLogo />
      </div>
      <SidebarMenu />
    </div>
  );
}

function SidebarMenu() {
  const sidebarMenuList: { [key: string]: SidebarMenuItemProps[] } = {
    menu: [
      {
        label: "Discover",
        path: "/",
        icon: { name: "discover", category: "navbar" },
        iconActive: { name: "discover-active", category: "navbar" },
      },
      {
        label: "Search",
        path: "/search",
        icon: { name: "search" },
        iconActive: { name: "search-active" },
      },
    ],
    // library: [
    //   {
    //     label: "My Music",
    //     path: "/my/playlists",
    //     icon: { name: "playlist", category: "navbar" },
    //     iconActive: { name: "playlist-active", category: "navbar" },
    //   },
    // ],
    others: [
      {
        label: "Logout",
        icon: { name: "logout", category: "navbar" },
        onClick: () => handleLogout(),
      },
    ],
  };

  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    removeTokenParams();
    router.push("/");
  };

  return (
    <div className={styles["sidebar-menu"]}>
      {Object.keys(sidebarMenuList).map((menu: string, idx: number) => (
        <div className={styles["sidebar-menu-wrap"]} key={idx}>
          {/* <p className={styles["sidebar-menu-title"]}>{menu.toUpperCase()}</p> */}
          <ul className={styles["sidebar-menu-list"]}>
            {sidebarMenuList[menu as keyof typeof sidebarMenuList].map(
              (item: SidebarMenuItemProps, idx: number) => (
                <SidebarMenuItem {...item} key={idx} />
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
