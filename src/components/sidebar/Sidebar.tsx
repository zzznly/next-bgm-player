"use client";

import styles from "./styles.module.scss";
import TrueTonesLogo from "@/svg/TrueTonesLogo";
import SidebarMenu from "./sidebar-menu/SidebarMenu";

export interface SidebarMenuItem {
  label: string;
  path: string;
  icon: { name: string; category?: string };
  iconActive?: { name: string; category?: string };
}

export default function Sidebar() {
  const sidebarMenuList: { [key: string]: SidebarMenuItem[] } = {
    menu: [
      {
        label: "Discover",
        path: "/",
        icon: { name: "discover", category: "navbar" },
        iconActive: { name: "discover-active", category: "navbar" },
      },
      {
        label: "Explorer",
        path: "/explorer",
        icon: { name: "explorer", category: "navbar" },
        iconActive: { name: "explorer-active", category: "navbar" },
      },
      {
        label: "Search",
        path: "/search",
        icon: { name: "search" },
        iconActive: { name: "search-active" },
      },
    ],
    library: [
      {
        label: "My Music",
        path: "/my/playlists",
        icon: { name: "playlist", category: "navbar" },
        iconActive: { name: "playlist-active", category: "navbar" },
      },
      {
        label: "Albums",
        path: "/my/favorites",
        icon: { name: "albums", category: "navbar" },
        iconActive: { name: "albums-active", category: "navbar" },
      },
      {
        label: "Artists",
        path: "/my/artists",
        icon: { name: "artists", category: "navbar" },
        iconActive: { name: "artists-active", category: "navbar" },
      },
    ],
    others: [
      {
        label: "Logout",
        path: "/logout",
        icon: { name: "logout", category: "navbar" },
      },
    ],
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-logo"]}>
        <TrueTonesLogo />
      </div>
      <div className={styles["sidebar-menu"]}>
        {Object.keys(sidebarMenuList).map((menu: string, idx: number) => (
          <div className={styles["sidebar-menu-wrap"]} key={idx}>
            <p className={styles["sidebar-menu-title"]}>{menu.toUpperCase()}</p>
            <ul className={styles["sidebar-menu-list"]}>
              {sidebarMenuList[menu as keyof typeof sidebarMenuList].map(
                (item: SidebarMenuItem, idx: number) => (
                  <SidebarMenu {...item} key={idx} />
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
