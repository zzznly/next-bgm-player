import styles from "./styles.module.scss";
import { SidebarMenuItem } from "../Sidebar";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import Link from "next/link";

export default function SidebarMenu({ item }: { item: SidebarMenuItem }) {
    return (
        <div
            className={styles["sidebar-menu-item"]}
        >
            <Link href={item.path}>
                <SvgIcon
                    name={item.icon.name}
                />
                <span>{item.menu}</span>
            </Link>
        </div>
    );
}