import styles from "./styles.module.scss";
import { SidebarMenuItem } from "../Sidebar";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import Link from "next/link";

export default function SidebarMenu({ path, icon, menu }: SidebarMenuItem) {
    return (
        <div
            className={styles["sidebar-menu-item"]}
        >
            <Link href={path}>
                <SvgIcon
                    name={icon.name}
                />
                <span>{menu}</span>
            </Link>
        </div>
    );
}