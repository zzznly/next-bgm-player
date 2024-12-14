"use client";

import styles from "./styles.module.scss";
import TrueTonesLogo from "@/svg/TrueTonesLogo";
import SidebarMenu from "./sidebar-menu/SidebarMenu";

export interface SidebarMenuItem {
    menu: string;
    path: string;
    icon: { name: string; category?: string };
    iconActive?: { name: string; category?: string };
}

export const MENU_LIST: { [key: string]: SidebarMenuItem[] } = {
    MENU: [
        {
            menu: "Discover",
            path: "/",
            icon: { name: "discover", category: "navbar" },
            iconActive: { name: "discover-active", category: "navbar" },
        },
        {
            menu: "Explorer",
            path: "/",
            icon: { name: "explorer", category: "navbar" },
            iconActive: { name: "explorer-active", category: "navbar" },
        },
        {
            menu: "Search",
            path: "/search",
            icon: { name: "search" },
            iconActive: { name: "search-active" },
        },
    ],
    LIBRARY: [
        {
            menu: "My Music",
            path: "/my/playlists",
            icon: { name: "playlist", category: "navbar" },
            iconActive: { name: "playlist-active", category: "navbar" },
        },
        {
            menu: "Albums",
            path: "/my/favorites",
            icon: { name: "albums", category: "navbar" },
            iconActive: { name: "albums-active", category: "navbar" },
        },
        {
            menu: "Artists",
            path: "/my/artists",
            icon: { name: "artists", category: "navbar" },
            iconActive: { name: "artists-active", category: "navbar" },
        },
    ],
    OTHERS: [
        {
            menu: "Logout",
            path: "/logout",
            icon: { name: "logout", category: "navbar" },
        },
    ],
}

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles["sidebar-logo"]}>
                <TrueTonesLogo />
            </div>
            <div className={styles["sidebar-menu"]}>
                {Object.keys(MENU_LIST).map((menu: string, idx: number) =>
                    <div className={styles["sidebar-menu-wrap"]} key={idx}>
                        <p className={styles["sidebar-menu-title"]}>{menu}</p>
                        <ul className={styles["sidebar-menu-list"]}>
                            {MENU_LIST[menu as keyof typeof MENU_LIST].map(
                                (item: SidebarMenuItem, idx: number) => <SidebarMenu {...item} key={idx} />
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
