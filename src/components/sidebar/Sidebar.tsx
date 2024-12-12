"use client";

import styles from "./styles.module.scss";
import MyTonesLogo from "@/svg/MyTonesLogo";
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
            menu: "Home",
            path: "/",
            icon: { name: "explore", category: "navbar" },
            iconActive: { name: "explore-active", category: "navbar" },
        },
        {
            menu: "Search",
            path: "/search",
            icon: { name: "search" },
            iconActive: { name: "search-active" },
        },
    ],
    MY: [
        {
            menu: "Playlists",
            path: "/my/playlists",
            icon: { name: "playlist", category: "navbar" },
            iconActive: { name: "playlist-active", category: "navbar" },
        },
        {
            menu: "Favorites",
            path: "/my/favorites",
            icon: { name: "favorites", category: "navbar" },
            iconActive: { name: "favorites-active", category: "navbar" },
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
                <MyTonesLogo />
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
